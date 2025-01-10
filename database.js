
require('dotenv').config();
const mongoose = require('mongoose');

const connectDatabase = () => {
  
  mongoose
    .connect('mongodb+srv://jess-icaa:Tz-xR_k-63th3aQ@cluster0.5xpkv.mongodb.net/')
    .then((data) => {
      console.log(
        `Database is connected Successfully: ${data.connection.host}`
      );
    })
    .catch((er) => console.log('Database connection Failed...', er.message));
};

module.exports = connectDatabase;