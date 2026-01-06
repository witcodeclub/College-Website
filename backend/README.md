# Backend Setup Guide

## Prerequisites
- Node.js installed
- MongoDB installed and running locally, or MongoDB Atlas account

## Installation

1. Install dependencies:
```bash
npm install
```

2. Create a `.env` file in the backend directory (copy from `.env.example`):
```env
PORT=3000
MONGODB_URI=mongodb://localhost:27017/college-website
JWT_SECRET=your-secret-key-change-this-in-production
JWT_EXPIRE=7d
```

3. Make sure MongoDB is running:
   - If using local MongoDB: `mongod` should be running
   - If using MongoDB Atlas: Update `MONGODB_URI` with your connection string

4. Seed the database with default users:
```bash
npm run seed
```

This will create default users:
- Students: regNo 2025001, 2025002, 2025003 (password: 1234, 5678, 9999)
- Professor: professor1@university.com (password: 1111)
- Staff: staff1@university.com (password: 2222)
- Director: director@university.com (password: 3333)

5. Start the server:
```bash
npm start
```

Or for development with auto-reload:
```bash
npm run dev
```

## API Endpoints

### Authentication Routes (`/api/auth`)

- `POST /api/auth/login` - Login for student, professor, or staff
  - Body: `{ role, emailOrReg, password }`
  
- `POST /api/auth/employer-login` - Login for employer/director
  - Body: `{ email, password }`

- `POST /api/auth/register` - Register new user
  - Body: `{ role, email/regNo, password, name }`

- `POST /api/auth/employer-register` - Register employer/director
  - Body: `{ email, password, name }`

- `GET /api/auth/me` - Get current user (requires authentication token)

## Notes

- All passwords are hashed using bcrypt
- JWT tokens are used for authentication
- Tokens are stored in localStorage on the frontend
- Default users are created when you run `npm run seed`

