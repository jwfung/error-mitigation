const { connectDB } = require('./config/db.js');
const express = require('express');
const request = require('request');
const cors = require('cors');

// routes
const users = require('./routes/api/users');

const app = express();

// Connect Database
connectDB();

// cors

  
var corsOptions = {
  origin: ["http://localhost:3000","https://jwfung.github.io"]
  // default: "https://jwfung.github.io"
}
app.use(cors(corsOptions)); 

// app.use((req, res, next) => {
//   console.log("hi");
//   res.header('Access-Control-Allow-Origin', '*');
//   next();
// });

// app.get('/fetch', (req, res) => {
//   request(
//     { url: req.query.url },
//     (error, response, body) => {
//       if (error || response.statusCode !== 200) {
//         return res.status(500).send('error');
//       }
//       res.send(body);
//     }
//   )
// });


// Init Middleware
app.use(express.json({ extended: false }));

app.get('/', (req, res) => res.send('Hello world!'));

// use Routes
app.use(('/api/users', users));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));