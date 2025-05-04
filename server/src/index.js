import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import { connectDB } from './utils/db.js';
import userRoutes from './routes/user-route.js';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Your Express server is up and running!');
});
app.use(express.json());
app.use('/api/v1',userRoutes)
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
})

      