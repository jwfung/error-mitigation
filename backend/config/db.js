const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

// module.exports.datastores = {
//   default: {
//     adapter: 'sails-mongo',
//     url: process.env.MONGODB_URI,
//     ssl: true,
//   },
// };

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
    } catch (error) {
        console.error(`Error: ${error.message}`)
        process.exit(1)
    }
}

module.exports.connectDB = connectDB;