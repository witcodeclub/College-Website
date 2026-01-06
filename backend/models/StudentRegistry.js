const mongoose = require('mongoose');

const studentRegistrySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  registrationNumber: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  rollNumber: {
    type: String,
    required: true,
    trim: true,
  },
  isRegistered: {
    type: Boolean,
    default: false,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('StudentRegistry', studentRegistrySchema);

