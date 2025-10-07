require('dotenv').config();
const connectDB = require('./config/database');
const configureApp = require('./config/appConfig');

const authRoutes = require('./src/routes/authRoutes');
const groupRoutes = require('./src/routes/groupRoutes');
const paymentRoutes = require('./src/routes/paymentRoutes');
const kycRoutes = require('./src/routes/kycRoutes');
const messageRoutes = require('./src/routes/messageRoutes');
const { globalErrorHandler } = require('./src/middleware/errorHandler');

connectDB();

const app = configureApp();
const PORT = process.env.PORT || 5000;


app.use('/api/v1/auth', authRoutes);
app.use('/api/v1/groups', groupRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1/kyc', kycRoutes);
app.use('/api/v1/messages', messageRoutes);

app.use(globalErrorHandler);

app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`)
});
