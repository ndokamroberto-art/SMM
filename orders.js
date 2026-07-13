const express = require('express');
const router = express.Router();
const orderController = require('./orderController');  // ← CHANGED THIS PATH

// ALL ROUTES ARE PUBLIC - NO AUTH NEEDED
router.get('/services', orderController.getAvailableServices);
router.post('/create', orderController.createOrder);
router.get('/', orderController.getOrders);
router.get('/:id', orderController.getOrderStatus);

module.exports = router;
