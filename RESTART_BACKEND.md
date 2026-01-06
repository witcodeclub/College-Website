# Backend Server Restart Required

## Issue
The `/api/auth/profile` endpoint is returning 404 because the server needs to be restarted to load the new routes.

## Solution

**Restart the backend server:**

1. Stop the current server (Ctrl+C in the terminal where it's running)

2. Start it again:
   ```bash
   cd backend
   npm start
   ```

3. You should see:
   ```
   Server started on port 3001
   MongoDB Connected: localhost
   ```

## Verify Routes Are Working

After restarting, test the endpoints:

1. **Health check:**
   ```bash
   curl http://localhost:3001/health
   ```

2. **Root endpoint:**
   ```bash
   curl http://localhost:3001/
   ```

3. **Profile endpoint (will return 401 without valid token, but should not be 404):**
   ```bash
   curl http://localhost:3001/api/auth/profile
   ```

## Available Endpoints

After restart, these endpoints should be available:

- `GET /api/auth/profile` - Get user profile (professor/staff)
- `GET /api/student/profile` - Get student profile
- `POST /api/auth/login` - Login
- `POST /api/auth/register` - Register
- `POST /api/student/login` - Student login
- `POST /api/student/register` - Student register

## Note

The MongoDB deprecation warnings are harmless and have been fixed. They won't appear after restart.

