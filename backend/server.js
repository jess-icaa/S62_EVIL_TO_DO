const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require('mongoose');

app.use(express.json());
if (process.env.MONGO_URI !== 'PRODUCTION') {
    require('dotenv').config();
}
let dbConnectionStatus = 'Disconnected';
mongoose
    .connect(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => {
        console.log('Connected to MongoDB');
        dbConnectionStatus = 'Connected';
    })
    .catch((err) => {
        console.error('MongoDB connection error:', err);
        dbConnectionStatus = 'Disconnected';
    });
app.listen(port, () => {
    console.log(`EVIL TO-DO LIST is running on http://localhost:${port}`);
});