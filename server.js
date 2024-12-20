const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/tasks', (req, res) => {
    res.send('Welcome to the EVIL TO-DO LIST!');
});

app.post('/generate-task', (req,res) => {
    res.send({ task: 'Rearrange your books by size. '});
});

app.get('/sarcastic-qupte', (req, res) => {
    res.send({ status: 'Sabotage Mode Activated. Good luck finding your tasks!' });
});

app.get('/sarcastic-quote', (req, res) => {
    const quotes = [
        "Congrats! You did the bare minimum",
        "You're one step closer to being mediocre.",
        "Great! Another task done... for now.",
    ];
    const randomQote = quotes[Math.floor(Math.random() * quotes.length)];
    res.send({ quote: randomQote });
});

app.listen(port, () => {
    console.log(`EVIL TO-DO LIST is running on http://localhost:${port}`);