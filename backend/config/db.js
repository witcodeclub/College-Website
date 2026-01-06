const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/college-website';
    console.log('Attempting to connect to MongoDB:', mongoURI.replace(/\/\/.*@/, '//***:***@')); // Hide credentials
    
    const conn = await mongoose.connect(mongoURI);
    
    console.log(`✅ MongoDB Connected: ${conn.connection.host}`);
    console.log(`✅ Database Name: ${conn.connection.name}`);
    console.log(`✅ Connection State: ${conn.connection.readyState === 1 ? 'Connected' : 'Not Connected'}`);
    
    // Verify connection
    const db = conn.connection.db;
    const collections = await db.listCollections().toArray();
    console.log(`✅ Available collections: ${collections.map(c => c.name).join(', ') || 'None'}`);
    
  } catch (error) {
    console.error('❌ Error connecting to MongoDB:', error.message);
    console.error('Error details:', {
      name: error.name,
      code: error.code,
      message: error.message
    });
    process.exit(1);
  }
};

module.exports = connectDB;

