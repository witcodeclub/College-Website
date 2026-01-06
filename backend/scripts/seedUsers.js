const mongoose = require('mongoose');
const dotenv = require('dotenv');
const User = require('../models/User');
const StudentRegistry = require('../models/StudentRegistry');

dotenv.config();

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/college-website');
    console.log('MongoDB Connected for seeding');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error.message);
    process.exit(1);
  }
};

const seedUsers = async () => {
  try {
    await connectDB();

    // Clear existing users (optional - comment out if you want to keep existing data)
    // await User.deleteMany({});
    // await StudentRegistry.deleteMany({});

    // Seed StudentRegistry first
    const registryEntries = [
      {
        name: 'Student One',
        registrationNumber: '2025001',
        rollNumber: 'ROLL001',
        isRegistered: false,
      },
      {
        name: 'Student Two',
        registrationNumber: '2025002',
        rollNumber: 'ROLL002',
        isRegistered: false,
      },
      {
        name: 'Student Three',
        registrationNumber: '2025003',
        rollNumber: 'ROLL003',
        isRegistered: false,
      },
      {
        name: 'Student Four',
        registrationNumber: '2025004',
        rollNumber: 'ROLL004',
        isRegistered: false,
      },
      {
        name: 'Student Five',
        registrationNumber: '2025005',
        rollNumber: 'ROLL005',
        isRegistered: false,
      },
    ];

    console.log('Seeding StudentRegistry...');
    for (const registryData of registryEntries) {
      const existingRegistry = await StudentRegistry.findOne({ 
        registrationNumber: registryData.registrationNumber 
      });

      if (!existingRegistry) {
        await StudentRegistry.create(registryData);
        console.log(`Created registry entry: ${registryData.registrationNumber}`);
      } else {
        console.log(`Registry entry already exists: ${registryData.registrationNumber}`);
      }
    }

    // Seed default users
    const defaultUsers = [
      {
        role: 'student',
        regNo: '2025001',
        email: 'student1@university.com',
        password: '1234',
        name: 'Student One',
      },
      {
        role: 'student',
        regNo: '2025002',
        email: 'student2@university.com',
        password: '5678',
        name: 'Student Two',
      },
      {
        role: 'student',
        regNo: '2025003',
        email: 'student3@university.com',
        password: '9999',
        name: 'Student Three',
      },
      {
        role: 'professor',
        email: 'professor1@university.com',
        password: '1111',
        name: 'Professor One',
      },
      {
        role: 'staff',
        email: 'staff1@university.com',
        password: '2222',
        name: 'Staff One',
      },
      {
        role: 'director',
        email: 'director@university.com',
        password: '3333',
        name: 'Director',
      },
    ];

    // Check if users already exist
    for (const userData of defaultUsers) {
      let existingUser;
      if (userData.regNo) {
        existingUser = await User.findOne({ role: userData.role, regNo: userData.regNo });
      } else {
        existingUser = await User.findOne({ role: userData.role, email: userData.email });
      }

      if (!existingUser) {
        const createdUser = await User.create(userData);
        console.log(`Created ${userData.role}: ${userData.regNo || userData.email}`);
        
        // Mark registry as registered if student
        if (userData.role === 'student' && userData.regNo) {
          await StudentRegistry.findOneAndUpdate(
            { registrationNumber: userData.regNo },
            { isRegistered: true }
          );
        }
      } else {
        console.log(`User already exists: ${userData.regNo || userData.email}`);
      }
    }

    console.log('Seeding completed!');
    process.exit(0);
  } catch (error) {
    console.error('Seeding error:', error);
    process.exit(1);
  }
};

seedUsers();

