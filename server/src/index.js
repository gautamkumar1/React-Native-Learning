import express from 'express';
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Your Express server is up and running!');
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
      