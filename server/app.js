const express = require('express');
const connectDB = require('./db/db');
const contacts = require('./routes/api/contacts');
const cors = require('cors');

const app = express();
connectDB();

app.use(cors({ origin: true, credentials: true }));

app.use(express.json({ extended: false }));

app.get('/', (req, res) => {
    res.send('Hello');
});

app.use('/api/contacts', contacts);

// listen on port
const port = process.env.PORT || 8082;
app.listen(port, () => {
    console.log(`Server is running on port ${ port }`);
});