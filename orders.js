const express = require('express');
const router = express.Router();
const orderController = require('./ordercontroller');

// ALL ROUTES ARE PUBLIC - NO AUTH NEEDED
router.get('/services', ordercontroller.getAvailableServices);
router.post('/create', ordercontroller.createOrder);
router.get('/', ordercontroller.getOrders);
router.get('/:id', ordercontroller.getOrderStatus);

module.exports = router;
