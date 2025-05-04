import bcrypt from "bcryptjs";
import User from "../modules/user-model.js";
import jwt from "jsonwebtoken";
export const registerUser = async (req, res) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            return res.status(400).json({message: 'All fields are required'})
        }
        const isUserExist = await User.findOne({email});
        if (isUserExist) {
            return res.status(400).json({message: 'User already exists'})
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            email,
            password: hashedPassword
        })
        const isUserCreated = await User.findOne({email}).select('-password');
        return res.status(201).json({message: 'User created successfully', user: isUserCreated});
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Internal server error'})
        
    }
}

export const loginUser = async (req, res) => {
    try {
        const {email,password} = req.body;
        const isUserExist = await User.findOne({email});
        if (!isUserExist) {
            return res.status(400).json({message: 'User does not exist'})
        }
        const isPasswordMatch = await bcrypt.compare(password, isUserExist.password);
        if (!isPasswordMatch) {
            return res.status(400).json({message: 'Invalid credentials'})
        }
        const token = jwt.sign({isUserExist}, process.env.JWT_SECRET,{
            expiresIn: process.env.JWT_EXPIRES
        });
        return res.status(200).json({message: 'Login successful', token})
    } catch (error) {
        console.log(error);
        return res.status(500).json({message: 'Internal server error'})
        
    }
}