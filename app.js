require('dotenv').config();
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const path = require('path');

const orderRoutes = require('./orders');

const app = express();

// Middleware
app.use(helmet({ contentSecurityPolicy: false }));
app.use(cors());
app.use(morgan('combined'));
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ extended: true, limit: '10mb' }));

// Serve frontend files from root directory
app.use(express.static(__dirname));

// ============================================
// API ROUTES
// ============================================

// Orders API
app.use('/api/orders', orderRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({
    status: 'online',
    version: '3.0.0',
    timezone: 'Africa/Douala',
    timestamp: new Date().toISOString(),
    features: [
      'instant-orders',
      'no-payment',
      'country-matching-profiles',
      'human-behavior',
      'ip-protection',
      'anti-ban'
    ]
  });
});

// Root route - serve dashboard
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

// Serve dashboard.html directly
app.get('/dashboard.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'dashboard.html'));
});

// Serve index.html directly
app.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

// ============================================
// ERROR HANDLING
// ============================================

// 404 for API routes
app.get('/api/*', (req, res) => {
  res.status(404).json({
    success: false,
    error: 'API endpoint not found'
  });
});

// Global error handler
app.use((err, req, res, next) => {
  console.error('Server error:', err);
  res.status(500).json({
    success: false,
    error: 'Internal server error'
  });
});

// ============================================
// START SERVER
// ============================================

const PORT = process.env.PORT || 3000;

app.listen(PORT, '0.0.0.0', () => {
  console.log('========================================');
  console.log('🚀 FREE SMM PANEL');
  console.log('========================================');
  console.log(`📍 Server running on port: ${PORT}`);
  console.log(`🌍 Timezone: Africa/Douala`);
  console.log(`💰 Mode: ZERO PAYMENT - 100% FREE`);
  console.log(`🧠 Human behavior: ENABLED`);
  console.log(`🛡️ IP Protection: ENABLED`);
  console.log(`🎯 Country matching: ENABLED`);
  console.log('========================================');
  console.log(`📊 Dashboard: http://localhost:${PORT}/dashboard.html`);
  console.log(`🔍 Health: http://localhost:${PORT}/api/health`);
  console.log('========================================');
});

module.exports = app;
