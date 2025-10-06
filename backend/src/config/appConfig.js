const express = require('express'); 
const cors = require('cors');       
const morgan = require('morgan');   


const configureApp = () => {
    const app = express(); 

    app.use(cors({
        origin: 'http://localhost:3000',
        credentials: true
    }));

    app.use(morgan('combined')); 

    app.use(express.json({ limit: '10mb' }));           
    app.use(express.urlencoded({ extended: true, limit: '10mb' })); 

    app.use((err, req, res, next) => {
        console.error('❌ FATAL ERROR:', err.stack); 
        
        
        res.status(err.status || 500).json({
            message: err.message || 'Internal Server Error'
        });
    });

    // 404 handler - must be last
    app.use((req, res) => {
        res.status(404).json({
            message: `Route ${req.originalUrl} not found`
        });
    });

    return app;
};

module.exports = configureApp;