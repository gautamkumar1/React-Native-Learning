import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDB } from './utils/db.js';
import userRoutes from './routes/user-route.js';
import todoRoutes from './routes/todo-routes.js';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: 'http://localhost:8081',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

app.get('/', (req, res) => {
    res.send('Your Express server is up and running!');
});
app.use(express.json());
app.use('/api/v1',userRoutes)
app.use('/api/v1',todoRoutes)
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})

      