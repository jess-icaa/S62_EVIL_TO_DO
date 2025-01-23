const express = require('express');
const app = express.Router();

app.get('/ping', (req, res) => {
    res.send('pong');
});

app.get('/', (req, res) => {
    res.send(`Database connection status: ${dbConnectionStatus}`);
});

app.get('/tasks', (req, res) => {
    res.send('Welcome to the EVIL TO-DO LIST!');
});

app.post('/generate-task', (req, res) => {
    res.send({ task: 'Rearrange your books by size.' });
});

app.get('/sabotage-mode', (req, res) => {
    res.send({ status: 'Sabotage Mode Activated. Good luck finding your tasks!' });
});

app.get('/sarcastic-quote', (req, res) => {
    const quotes = [
        "Congrats! You did the bare minimum.",
        "You're one step closer to being mediocre.",
        "Great! Another task done... for now.",
    ];
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    res.send({ quote: randomQuote });
});

module.exports = app;