# Student Registration-Number-Based Authentication

## Overview
This system implements registration-number-based authentication for students with validation against a pre-approved StudentRegistry.

## Database Models

### StudentRegistry Model
```javascript
{
  name: String (required),
  registrationNumber: String (required, unique),
  rollNumber: String (required),
  isRegistered: Boolean (default: false),
  createdAt: Date
}
```

### User Model (for students)
```javascript
{
  role: "student",
  name: String,
  email: String (unique),
  regNo: String (unique) // registrationNumber
  password: String (hashed with bcrypt),
  createdAt: Date
}
```

## API Endpoints

### 1. Student Registration
**POST** `/api/student/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john.doe@university.com",
  "registrationNumber": "2025004",
  "password": "securepassword123"
}
```

**Success Response (201):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "role": "student",
    "name": "John Doe",
    "email": "john.doe@university.com",
    "registrationNumber": "2025004",
    "rollNumber": "ROLL004"
  }
}
```

**Error Responses:**
- `400`: Invalid registration number (not in registry)
- `400`: Registration number already registered
- `400`: Email already exists
- `400`: Missing required fields

### 2. Student Login
**POST** `/api/student/login`

**Request Body:**
```json
{
  "registrationNumber": "2025004",
  "password": "securepassword123"
}
```

**Success Response (200):**
```json
{
  "success": true,
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "507f1f77bcf86cd799439011",
    "role": "student",
    "name": "John Doe",
    "email": "john.doe@university.com",
    "registrationNumber": "2025004",
    "rollNumber": "ROLL004"
  }
}
```

**Error Responses:**
- `401`: Invalid registration number or password
- `400`: Missing registration number or password

### 3. Get Student Profile (Protected)
**GET** `/api/student/profile`

**Headers:**
```
Authorization: Bearer <JWT_TOKEN>
```

**Success Response (200):**
```json
{
  "success": true,
  "student": {
    "id": "507f1f77bcf86cd799439011",
    "name": "John Doe",
    "email": "john.doe@university.com",
    "registrationNumber": "2025004",
    "rollNumber": "ROLL004",
    "role": "student"
  }
}
```

**Error Responses:**
- `401`: Not authorized (no token)
- `403`: Access denied (not a student)
- `404`: User or registry entry not found

## JWT Token Structure

The JWT token includes:
```json
{
  "id": "user_id",
  "role": "student",
  "registrationNumber": "2025004",
  "rollNumber": "ROLL004",
  "name": "John Doe",
  "iat": 1234567890,
  "exp": 1234567890
}
```

## Authentication Flow

### Registration Flow:
1. Student submits registration form with: name, email, registrationNumber, password
2. Backend validates registrationNumber exists in StudentRegistry
3. Backend checks if registrationNumber is already registered (isRegistered = true)
4. Backend checks if email is already taken
5. If all validations pass:
   - Create User record
   - Hash password with bcrypt
   - Mark StudentRegistry entry as registered (isRegistered = true)
   - Generate JWT token with student details
   - Return token and user data

### Login Flow:
1. Student submits registrationNumber and password
2. Backend finds User by registrationNumber
3. Backend verifies password using bcrypt.compare()
4. Backend fetches StudentRegistry entry for rollNumber
5. Generate JWT token with student details (name, registrationNumber, rollNumber)
6. Return token and user data

### Profile Access Flow:
1. Frontend sends request with JWT token in Authorization header
2. Backend middleware verifies JWT token
3. Backend checks user role is "student"
4. Backend fetches user and registry data
5. Return student profile

## Security Features

1. **Password Hashing**: All passwords are hashed using bcrypt (10 salt rounds)
2. **JWT Authentication**: Secure token-based authentication
3. **Registration Validation**: Only pre-approved registration numbers can register
4. **Duplicate Prevention**: 
   - Registration numbers can only be used once
   - Emails must be unique
5. **Protected Routes**: Profile endpoint requires valid JWT token

## Dashboard Integration

The dashboard should:
1. Store JWT token in localStorage after login
2. Include token in Authorization header: `Bearer <token>`
3. Call `/api/student/profile` to get student details
4. Display: "Hi {Student Name}" with Registration Number and Roll Number

**Example Dashboard API Call:**
```javascript
const token = localStorage.getItem('token');
const response = await fetch('http://localhost:3001/api/student/profile', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
});
const data = await response.json();
// Display: Hi {data.student.name}
// Show: Registration Number: {data.student.registrationNumber}
// Show: Roll Number: {data.student.rollNumber}
```

## Seeding Database

Run the seed script to create StudentRegistry entries:
```bash
npm run seed
```

This creates:
- StudentRegistry entries for registration numbers 2025001-2025005
- Default users (students, professors, staff, director)

## Environment Variables

Required in `.env`:
```
PORT=3001
MONGODB_URI=mongodb://localhost:27017/college-website
JWT_SECRET=your-secret-key-change-this-in-production
JWT_EXPIRE=7d
```

