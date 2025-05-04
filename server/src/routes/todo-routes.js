import {Router} from "express"
import { addTodo, deleteTodo, getAllTodo } from "../controllers/todo-controller.js";
import { isAuthenticated } from "../middleware/auth-middleware.js";
const router = Router();
router.post('/add', isAuthenticated,addTodo)
router.delete('/delete/:id', isAuthenticated,deleteTodo)
router.get('/get', isAuthenticated,getAllTodo)
export default router