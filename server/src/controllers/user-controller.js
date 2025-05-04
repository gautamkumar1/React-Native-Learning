import bcrypt from "bcryptjs";
import User from "../modules/user-model.js";
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
        
    }
}

