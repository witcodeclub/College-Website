const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { protect } = require('../middleware/auth');

const router = express.Router();

// Generate JWT Token
const generateToken = (id, role) => {
  const secret = process.env.JWT_SECRET || 'college-website-secret-key-2024-change-in-production';
  return jwt.sign({ id, role }, secret, {
    expiresIn: process.env.JWT_EXPIRE || '7d',
  });
};

// @route   POST /api/auth/login
// @desc    Login user (student, professor, staff)
// @access  Public
router.post('/login', async (req, res) => {
  try {
    const { role, emailOrReg, password } = req.body;

    console.log('Login attempt:', { role, emailOrReg, passwordLength: password?.length });

    if (!role || !emailOrReg || !password) {
      return res.status(400).json({ message: 'Please provide all fields' });
    }

    let user;
    if (role === 'student') {
      user = await User.findOne({ role: 'student', regNo: emailOrReg });
      console.log('Student lookup:', { regNo: emailOrReg, userFound: !!user });
    } else {
      user = await User.findOne({ role, email: emailOrReg.toLowerCase() });
      console.log('User lookup:', { role, email: emailOrReg.toLowerCase(), userFound: !!user });
    }

    if (!user) {
      console.log('User not found');
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const isMatch = await user.matchPassword(password);
    console.log('Password match:', isMatch);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id, user.role);

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        role: user.role,
        regNo: user.regNo,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/auth/employer-login
// @desc    Login employer/director
// @access  Public
router.post('/employer-login', async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ message: 'Please provide email and password' });
    }

    const user = await User.findOne({ 
      role: 'director', 
      email: email.toLowerCase() 
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials or not authorized' });
    }

    const isMatch = await user.matchPassword(password);
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    const token = generateToken(user._id, user.role);

    res.json({
      success: true,
      token,
      user: {
        id: user._id,
        role: user.role,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error('Employer login error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/auth/register
// @desc    Register new user
// @access  Public
router.post('/register', async (req, res) => {
  try {
    const { role, email, regNo, password, name } = req.body;

    if (!role || !password) {
      return res.status(400).json({ message: 'Please provide role and password' });
    }

    // Validate based on role
    if (role === 'student' && !regNo) {
      return res.status(400).json({ message: 'Registration number is required for students' });
    }

    if (role !== 'student' && !email) {
      return res.status(400).json({ message: 'Email is required' });
    }

    // Check if user already exists
    let existingUser;
    if (role === 'student') {
      existingUser = await User.findOne({ role: 'student', regNo });
    } else {
      existingUser = await User.findOne({ role, email: email.toLowerCase() });
    }

    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Create user
    const userData = {
      role,
      password,
      name: name || '',
    };

    if (role === 'student') {
      userData.regNo = regNo;
    } else {
      userData.email = email.toLowerCase();
    }

    const user = await User.create(userData);

    const token = generateToken(user._id, user.role);

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        role: user.role,
        regNo: user.regNo,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error('Register error:', error);
    if (error.code === 11000) {
      return res.status(400).json({ message: 'User already exists' });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   POST /api/auth/employer-register
// @desc    Register employer/director (only director can register)
// @access  Public
router.post('/employer-register', async (req, res) => {
  try {
    const { email, password, name } = req.body;

    if (!email || !password || !name) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    // Check if director already exists
    const existingDirector = await User.findOne({ 
      role: 'director', 
      email: email.toLowerCase() 
    });

    if (existingDirector) {
      return res.status(400).json({ message: 'Director already registered' });
    }

    // Create director
    const user = await User.create({
      role: 'director',
      email: email.toLowerCase(),
      password,
      name,
    });

    const token = generateToken(user._id, user.role);

    res.status(201).json({
      success: true,
      token,
      user: {
        id: user._id,
        role: user.role,
        email: user.email,
        name: user.name,
      },
    });
  } catch (error) {
    console.error('Employer register error:', error);
    if (error.code === 11000) {
      return res.status(400).json({ message: 'Director already registered' });
    }
    res.status(500).json({ message: 'Server error' });
  }
});

// @route   GET /api/auth/me
// @desc    Get current user
// @access  Private
router.get('/me', protect, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Get user error:', error);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;

