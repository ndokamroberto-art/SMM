const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');

// NO AUTHENTICATION REQUIRED - Anyone can order
router.get('/services', orderController.getAvailableServices);
router.post('/create', orderController.createOrder);
router.get('/:id', orderController.getOrderStatus);
router.get('/', orderController.getOrders);

module.exports = router;