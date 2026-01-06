const jwt = require('jsonwebtoken');

const protect = (req, res, next) => {
  let token;

  console.log('=== Auth Middleware Debug ===');
  console.log('Authorization header:', req.headers.authorization ? 'Present' : 'Missing');
  
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1];
    console.log('Token extracted, length:', token?.length);
  } else {
    console.log('❌ No Bearer token in Authorization header');
  }

  if (!token) {
    console.log('❌ No token found');
    return res.status(401).json({ message: 'Not authorized, no token' });
  }

  try {
    const secret = process.env.JWT_SECRET || 'college-website-secret-key-2024-change-in-production';
    console.log('Verifying token with secret...');
    const decoded = jwt.verify(token, secret);
    console.log('✅ Token verified successfully:', {
      id: decoded.id,
      role: decoded.role,
      registrationNumber: decoded.registrationNumber
    });
    req.user = decoded;
    next();
  } catch (error) {
    console.error('❌ Token verification failed:', error.message);
    return res.status(401).json({ message: 'Not authorized, token failed', error: error.message });
  }
};

module.exports = { protect };

