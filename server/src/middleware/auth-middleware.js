import jwt from "jsonwebtoken";
import User from "../modules/user-model.js";
export const isAuthenticated = async (req, res, next) => {
    try {
        const token = req.header("Authorization")?.replace("Bearer ", "");
        if(!token){
            return res.status(401).json({message: 'Unauthorized'});
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await User.findById(decoded._id).select('-password');
        if(!user){
            return res.status(401).json({message: 'Unauthorized'});
        }
        req.user = user;
        next();

    } catch (error) {
        console.log(`Error while authentication ${error}`);
        return res.status(401).json({message: "Error while authentication"});
        
    }
}