import express from "express";
import dotenv from 'dotenv';
import mongoose from "mongoose";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cookieParser from 'cookie-parser';
import cors from 'cors';
dotenv.config();
const app = express();

// Connection
mongoose.connect(process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/verifydoc')
.then(() => console.log('Connected to MongoDB'))
.catch(err => {
  console.error('MongoDB connection error:', err.message);
  console.log('Make sure MongoDB is installed and running, or use MongoDB Atlas');
});



// Middlewares
app.use(express.json());
app.use(cookieParser());
app.use(cors());

// Schemas
// User Schema
const UserSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    role: { type: String, enum: ['user', 'admin'], default: 'user' }
});

const User = mongoose.model("User", UserSchema);
// Data Schema
const DataSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
});

const Data = mongoose.model("Data", DataSchema);



// Authentication Middlewares
const authMiddleware = (req, res, next) => {
    const token = req.cookies.token || req.header("Authorization").replace("Bearer ", "");

    if (!token) return res.status(401).json({ message: "Unauthorized" });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
    } catch (error) {
        res.status(400).json({ message: "Invalid Token" });
    }
};

const adminMiddleware = (req, res, next) => {
    if (req.user.role !== "admin") {
        return res.status(403).json({ message: "Access denied" });
    }
    next();
};




// POST Routes

app.post("/signup", async (req, res) => {
    const { username, email, password ,role} = req.body;

    let user = await User.findOne({ email });
    if (user) {
        return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    user = await User.create({
        username,
        email,
        password: hashedPassword,
        role:role||"user"
    });

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30) // 30 days
    });

    res.status(201).json({ message: "User registered successfully", user: { id: user._id, username: user.username, email: user.email, role: user.role } });
});

app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ _id: user._id, role: user.role }, process.env.JWT_SECRET);
    res.cookie("token", token, {
        httpOnly: true,
        expires: new Date(Date.now() + 1000 * 60 * 60 * 24 * 30) // 30 days
    });

    res.status(200).json({ message: "Login successful", user: { id: user._id, username: user.username, email: user.email, role: user.role } });
});

app.post("/data", authMiddleware, async (req, res) => {
    const { content } = req.body;

    const data = new Data({
        user: req.user._id,
        content
    });

    await data.save();
    res.status(201).json(data);
});


// get routes 
app.get("/mydata", authMiddleware, async (req, res) => {
    const data = await Data.find({ user: req.user._id });
    res.status(200).json(data);
});


app.get("/alldata", authMiddleware, adminMiddleware, async (req, res) => {
    const allData = await Data.find().populate("user", "username email");
    res.status(200).json(allData);
});



app.listen(process.env.PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
});
