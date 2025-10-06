const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const databaseUrl = process.env.MONGODB_URI;

        const conn = await mongoose.connect(databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`MongoDB Connected with Success`);
    } catch (error) {
        console.error('Database connection error:', error.message);
        process.exit(1);
    }
}


