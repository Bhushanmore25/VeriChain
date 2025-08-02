from flask import Flask, request, jsonify
import io
import re
import numpy as np
import cv2
from PIL import Image
import easyocr
import tensorflow as tf
import os
import face_recognition
from skimage.metrics import structural_similarity as ssim

app = Flask(__name__)

# Load the pre-trained model
model = tf.keras.models.load_model("aadhar_fraud_detection_model.keras")

# Initialize EasyOCR Reader
reader = easyocr.Reader(['en', 'hi'])

# Utility Functions
def preprocess_image(image_bytes):
    image = Image.open(io.BytesIO(image_bytes))
    image = image.convert('RGB')
    image_np = np.array(image)
    resized_image = cv2.resize(image_np, (256, 256))
    normalized_image = resized_image / 255.0
    return np.reshape(normalized_image, (1, 256, 256, 3)), image_np, image

def detect_anomalies(text):
    anomalies = []
    name_pattern = r'(?:[^\n]+(?:\n+)?){0,2}[A-Za-zअ-ह]+\s[A-Za-zअ-ह]+'
    dob_pattern = r'\s*\d{2}[-/.]\d{2}[-/.]\d{4}'
    gender_pattern = r'\b(?:महिला|पुरुष|FEMALE|MALE|Female|Male)\b'
    aadhaar_pattern = r'\b\d{4}\s?\d{4}\s?\d{4}\b'

    if not re.search(name_pattern, text):
        anomalies.append("Missing or incorrect name format")
    if not re.search(dob_pattern, text):
        anomalies.append("Missing or incorrect date of birth format")
    if not re.search(gender_pattern, text):
        anomalies.append("Missing or incorrect gender format")
    if not re.search(aadhaar_pattern, text):
        anomalies.append("Missing or incorrect Aadhaar number format")

    return anomalies

def check_user_data(text, user_details):
    normalized_text = re.sub(r'\s+', ' ', text).strip().lower()
    results = {}
    for key in ['name', 'dob', 'gender', 'aadhaar_number']:
        user_value = user_details.get(key, '').strip().lower()
        if user_value and user_value not in normalized_text:
            results[key] = "Mismatch"
        else:
            results[key] = "Match"
    return results

def save_detected_faces(image_np, output_folder='/tmp/faces'):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    image_cv = cv2.cvtColor(image_np, cv2.COLOR_RGB2BGR)
    face_cascade = cv2.CascadeClassifier(cv2.data.haarcascades + 'haarcascade_frontalface_default.xml')
    gray = cv2.cvtColor(image_cv, cv2.COLOR_BGR2GRAY)
    faces = face_cascade.detectMultiScale(gray, scaleFactor=1.1, minNeighbors=5)
    face_paths = []
    for i, (x, y, w, h) in enumerate(faces):
        face_image = image_cv[y:y+h, x:x+w]
        face_path = os.path.join(output_folder, f"face_{i+1}.jpg")
        cv2.imwrite(face_path, face_image)
        face_paths.append(face_path)
    return face_paths

def get_face_encoding(image_path):
    image = face_recognition.load_image_file(image_path)
    encodings = face_recognition.face_encodings(image)
    if len(encodings) == 0:
        return None
    return encodings[0]

@app.route('/verify_aadhaar', methods=['POST'])
def verify_aadhaar():
    if 'aadhaar_image' not in request.files or 'user_image' not in request.files:
        return jsonify({"error": "aadhaar_image and user_image files are required."}), 400

    aadhaar_image = request.files['aadhaar_image'].read()
    user_image = request.files['user_image'].read()
    user_details = request.form.to_dict()

    # Preprocess Aadhaar image
    test_image, image_np, pil_image = preprocess_image(aadhaar_image)
    
    # OCR to extract text
    ocr_results = reader.readtext(image_np)
    extracted_text = " ".join(result[1] for result in ocr_results)

    # Detect anomalies
    anomalies = detect_anomalies(extracted_text)

    # Predict Real/Fake
    prediction = model.predict(test_image)
    prediction_label = "Fake" if prediction >= 0.5 else "Real"

    # Check user-provided data matches OCR text
    user_data_check = check_user_data(extracted_text, user_details)

    # Save detected faces
    face_paths = save_detected_faces(image_np)

    if not face_paths:
        return jsonify({"error": "No face detected in Aadhaar image."}), 400

    # Compare Aadhaar face with user-uploaded face
    aadhaar_face_encoding = get_face_encoding(face_paths[0])

    temp_user_photo_path = '/tmp/user_photo.jpg'
    with open(temp_user_photo_path, 'wb') as f:
        f.write(user_image)

    user_face_encoding = get_face_encoding(temp_user_photo_path)

    if aadhaar_face_encoding is None or user_face_encoding is None:
        face_match_result = "No face found in one or both images."
    else:
        match_result = face_recognition.compare_faces([aadhaar_face_encoding], user_face_encoding)
        face_match_result = "Match" if match_result[0] else "Mismatch"

    # Prepare response
    response = {
        "model_prediction": prediction_label,
        "anomalies_detected": anomalies,
        "user_data_verification": user_data_check,
        "face_match_result": face_match_result
    }

    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
