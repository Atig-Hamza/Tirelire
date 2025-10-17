const express = require('express');
const reliabilityController = require('../controllers/reliabilityController');
const authMiddleware = require('../middleware/authMiddleware');
const kycVerification = require('../middleware/kycVerification');

const router = express.Router();

router.use(authMiddleware);

router.get('/me', reliabilityController.getMyReliability);
router.put('/me', reliabilityController.updateMyReliability);
router.post('/me/events', reliabilityController.recordEvent);
router.get('/top', kycVerification, reliabilityController.getTopReliableUsers);

module.exports = router;
