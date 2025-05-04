import Todo from "../modules/todo-model.js"

export const addTodo = async (req, res) => {
    try {
        const {title, description, status} = req.body
        const todo = await Todo.create({title, description, status})
        return res.status(201).json({message: 'Todo created successfully', todo})

    } catch (error) {
        console.log(`Error while creating todo ${error}`);
        return res.status(500).json({message: 'Getting error while creating todo'})
        
    }
}

export const deleteTodo = async (req, res) => {
    try {
        const {id} = req.params
        const todo = await Todo.findByIdAndDelete(id)
        return res.status(200).json({message: 'Todo deleted successfully', todo})

    } catch (error) {
        console.log(`Error while deleting todo ${error}`);
        return res.status(500).json({message: 'Getting error while deleting todo'})
    }
}

export const getAllTodo = async (req, res) => {
    try {
        const todos = await Todo.find({});
        return res.status(200).json({message: 'Success', todos})
    } catch (error) {
        console.log(`Error while getting todos ${error}`);
        return res.status(500).json({message: 'Getting error while getting todos'})
    }
}