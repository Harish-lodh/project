const mongoose = require("mongoose");

const DB = "mongodb+srv://harish:harish%4055@cluster0.e578d.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
// Function to connect to MongoDB
const connectDB = async () => {
    try {
        await mongoose.connect(DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Connected to DB successfully");
    } catch (error) {
        console.error("DB connection error:", error.message);
    }
};

// Call the connection function
connectDB();
