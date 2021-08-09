const { connectDB } = require('./config/db.js');
const express = require('express');
const cors = require('cors');

// routes
const users = require('./routes/api/users');

const app = express();

// Connect Database
connectDB();

// cors

var corsOptions = {
  origin: ["http://localhost:3000","https://jwfung.github.io"],
  default: "https://jwfung.github.io"
}
app.use(cors(corsOptions)); 


// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use('/api/users', users);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));