require('dotenv').config();
const connectDB = require('./config/database');
const configureApp = require('./config/appConfig');

connectDB();

const app = configureApp();
const PORT = process.env.PORT || 5000;


// routes



app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
});
