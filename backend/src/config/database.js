const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const databaseUrl = process.env.MONGODB_URI;

        const conn = await mongoose.connect(databaseUrl, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        
    } catch (error) {
        process.exit(1);
    }
}


