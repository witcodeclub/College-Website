const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const StudentRegistry = require('../models/StudentRegistry');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Generate JWT Token with student details
const generateStudentToken = (id, role, studentData) => {
  const secret = process.env.JWT_SECRET || 'college-website-secret-key-2024-change-in-production';
  return jwt.sign(
    { 
      id, 
      role,
      registrationNumber: studentData.registrationNumber,
      rollNumber: studentData.rollNumber,
      name: studentData.name
    }, 
    secret, 
    {
      expiresIn: process.env.JWT_EXPIRE || '7d',
    }
  );
};

// @route   POST /api/student/register
// @desc    Register a new student (registration number must be in StudentRegistry)
// @access  Public
router.post('/register', async (req, res) => {
  try {
    const { name, email, registrationNumber, password } = req.body;

    // Validate all required fields
    if (!name || !email || !registrationNumber || !password) {
      return res.status(400).json({ 
        message: 'Please provide all fields: name, email, registrationNumber, and password' 
      });
    }

    // Check if registration number exists in StudentRegistry
    const registryEntry = await StudentRegistry.findOne({ 
      registrationNumber: registrationNumber.trim() 
    });

    if (!registryEntry) {
      return res.status(400).json({ 
        message: 'Invalid registration number. Registration number not found in registry.' 
      });
    }

    // Check if registration number is already registered
    if (registryEntry.isRegistered) {
      return res.status(400).json({ 
        message: 'This registration number is already registered.' 
      });
    }

    // Check if user with this registration number already exists
    const existingUser = await User.findOne({ 
      role: 'student', 
      regNo: registrationNumber.trim() 
    });

    if (existingUser) {
      return res.status(400).json({ 
        message: 'User with this registration number already exists.' 
      });
    }

    // Check if email is already taken
    const existingEmail = await User.findOne({ 
      email: email.toLowerCase().trim() 
    });

    if (existingEmail) {
      return res.status(400).json({ 
        message: 'Email already registered.' 
      });
    }

    // Create user
    console.log('Creating user with data:', {
      role: 'student',
      name: name.trim(),
      email: email.toLowerCase().trim(),
      regNo: registrationNumber.trim(),
      hasPassword: !!password
    });
    
    const user = await User.create({
      role: 'student',
      name: name.trim(),
      email: email.toLowerCase().trim(),
      regNo: registrationNumber.trim(),
      password,
    });

    console.log('✅ User created successfully:', {
      id: user._id,
      name: user.name,
      email: user.email,
      regNo: user.regNo
    });

    // Mark registration number as registered in StudentRegistry
    console.log('Updating StudentRegistry entry...');
    registryEntry.isRegistered = true;
    await registryEntry.save();
    console.log('✅ StudentRegistry updated successfully');

    // Generate token with student details
    const token = generateStudentToken(user._id, user.role, {
      registrationNumber: user.regNo,
      rollNumber: registryEntry.rollNumber,
      name: user.name,
    });

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        role: user.role,
        name: user.name,
        email: user.email,
        registrationNumber: user.regNo,
        rollNumber: registryEntry.rollNumber,
      },
    });
  } catch (error) {
    console.error('❌ Student registration error:', error);
    console.error('Error name:', error.name);
    console.error('Error message:', error.message);
    console.error('Error code:', error.code);
    console.error('Error stack:', error.stack);
    
    if (error.code === 11000) {
      console.error('Duplicate key error - user already exists');
      return res.status(400).json({ 
        message: 'Registration number or email already exists.' 
      });
    }
    
    // Check if it's a MongoDB connection error
    if (error.name === 'MongoServerError' || error.name === 'MongoError') {
      console.error('❌ MongoDB error detected');
      return res.status(500).json({ 
        message: 'Database error. Please check MongoDB connection.',
        error: error.message 
      });
    }
    
    res.status(500).json({ 
      message: 'Server error',
      error: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
});

// @route   POST /api/student/login
// @desc    Login student using registration number and password
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { registrationNumber, password } = req.body;

    if (!registrationNumber || !password) {
      return res.status(400).json({ 
        message: 'Please provide registration number and password' 
      });
    }

    // Find user by registration number
    const user = await User.findOne({ 
      role: 'student', 
      regNo: registrationNumber.trim() 
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid registration number or password' });
    }

    // Verify password
    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid registration number or password' });
    }

    // Get student registry details
    const registryEntry = await StudentRegistry.findOne({ 
      registrationNumber: user.regNo 
    });

    if (!registryEntry) {
      return res.status(500).json({ 
        message: 'Student registry entry not found' 
      });
    }

    // Generate token with student details
    const token = generateStudentToken(user._id, user.role, {
      registrationNumber: user.regNo,
      rollNumber: registryEntry.rollNumber,
      name: user.name,
    });

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        role: user.role,
        name: user.name,
        email: user.email,
        registrationNumber: user.regNo,
        rollNumber: registryEntry.rollNumber,
      },
    });
  } catch (error) {
    console.error('Student login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/student/profile
// @desc    Get student profile (protected route)
// @access  Private
router.get('/profile', protect, async (req, res) => {
  try {
    console.log('=== Profile Request Debug ===');
    console.log('User from token:', req.user);
    console.log('User role:', req.user?.role);
    console.log('User ID:', req.user?.id);

    // Ensure user is a student
    if (req.user.role !== 'student') {
      console.log('❌ Access denied - not a student, role is:', req.user.role);
      return res.status(403).json({ message: 'Access denied. Student access only.' });
    }

    // Find user
    const user = await User.findById(req.user.id);
    if (!user) {
      console.log('❌ User not found in database');
      return res.status(404).json({ message: 'User not found' });
    }

    console.log('✅ User found:', {
      id: user._id,
      name: user.name,
      regNo: user.regNo,
      role: user.role
    });

    // Get student registry details
    const registryEntry = await StudentRegistry.findOne({ 
      registrationNumber: user.regNo 
    });

    if (!registryEntry) {
      console.log('❌ Registry entry not found for regNo:', user.regNo);
      return res.status(404).json({ message: 'Student registry entry not found' });
    }

    console.log('✅ Registry entry found:', {
      registrationNumber: registryEntry.registrationNumber,
      rollNumber: registryEntry.rollNumber
    });

    const studentData = {
      success: true,
      student: {
        id: user._id,
        name: user.name,
        email: user.email,
        registrationNumber: user.regNo,
        rollNumber: registryEntry.rollNumber,
        role: user.role,
      },
    };

    console.log('✅ Sending response:', studentData);
    res.json(studentData);
  } catch (error) {
    console.error('❌ Get student profile error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

