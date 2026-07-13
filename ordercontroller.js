const prisma = require('../config/database');
const OrderProcessor = require('../services/orderProcessor');

// Get available services (FREE - no authentication needed)
exports.getAvailableServices = async (req, res) => {
  try {
    const services = await prisma.service.findMany({
      where: { isActive: true },
      orderBy: { category: 'asc' }
    });
    res.json({ success: true, services });
  } catch (error) {
    console.error('Get services error:', error);
    res.status(500).json({ error: 'Failed to get services' });
  }
};

// Create order - INSTANT, NO PAYMENT
exports.createOrder = async (req, res) => {
  try {
    const { serviceId, targetUrl, quantity, serviceType, countryTarget } = req.body;

    if (!serviceId || !targetUrl || !quantity) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    const service = await prisma.service.findUnique({
      where: { id: serviceId }
    });

    if (!service || !service.isActive) {
      return res.status(404).json({ error: 'Service not available' });
    }

    if (quantity < service.minOrder || quantity > service.maxOrder) {
      return res.status(400).json({ 
        error: `Quantity must be between ${service.minOrder} and ${service.maxOrder}` 
      });
    }

    // Find or create user (auto-register if needed)
    let user = req.user;
    if (!user) {
      // Auto-create user for anonymous orders
      const guestEmail = `guest_${Date.now()}@temp.com`;
      user = await prisma.user.create({
        data: {
          email: guestEmail,
          password: 'auto_generated',
          fullName: `Guest ${Math.floor(Math.random() * 10000)}`,
          phoneNumber: `237${Math.floor(Math.random() * 90000000) + 10000000}`
        }
      });
    }

    // Create order with NO PAYMENT
    const order = await prisma.order.create({
      data: {
        userId: user.id,
        serviceId,
        targetUrl,
        quantity,
        serviceType: serviceType || 'DRIP',
        countryTarget: countryTarget || 'CM',
        status: 'PENDING'
      }
    });

    // Process order IMMEDIATELY - no queue, no waiting
    const result = await OrderProcessor.queueOrder(order.id);

    // Get updated order
    const updatedOrder = await prisma.order.findUnique({
      where: { id: order.id },
      include: { service: true }
    });

    res.json({
      success: true,
      order: updatedOrder,
      message: '✅ Order completed instantly!',
      profilesDelivered: updatedOrder.deliveredCount
    });
  } catch (error) {
    console.error('Create order error:', error);
    res.status(500).json({ error: 'Failed to create order' });
  }
};

// Get user's orders
exports.getOrders = async (req, res) => {
  try {
    const orders = await prisma.order.findMany({
      where: { userId: req.user.id },
      include: { service: true },
      orderBy: { createdAt: 'desc' },
      take: 50
    });
    res.json({ success: true, orders });
  } catch (error) {
    console.error('Get orders error:', error);
    res.status(500).json({ error: 'Failed to get orders' });
  }
};

// Get order status
exports.getOrderStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const order = await prisma.order.findFirst({
      where: { id },
      include: { service: true }
    });

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    res.json({ success: true, order });
  } catch (error) {
    console.error('Get order status error:', error);
    res.status(500).json({ error: 'Failed to get order status' });
  }
};