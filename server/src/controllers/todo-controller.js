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
