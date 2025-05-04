import {Router} from "express"
import { addTodo } from "../controllers/todo-controller.js";
import { isAuthenticated } from "../middleware/auth-middleware.js";
const router = Router();
router.post('/add', isAuthenticated,addTodo)
export default router