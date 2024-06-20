const mongoose = require("mongoose");
mongoose.set('strictQuery', false); // or true, depending on your requirement
console.log('MONGODB_URI:', process.env.MONGODB_URI); // Add this line

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", true);
    // mongodb+srv://abdulmuqsit:Muqsit@cluster0.t4ufslj.mongodb.net/
    await mongoose.connect(process.env.URI);
    // await mongoose.connect(process.env.URI);
    console.log("App Is Connected To Database Successfully...!!");
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDB;
// const mongoose = require('mongoose');

// const connectDB = async () => {
//     try {
//         await mongoose.connect(process.env.MONGODB_URI, {
//             useNewUrlParser: true,
//             useUnifiedTopology: true,
//         });
//         console.log('MongoDB connected');
//     } catch (error) {
//         console.error('Error connecting to MongoDB:', error);
//         process.exit(1);
//     }
// };

// module.exports = connectDB;
