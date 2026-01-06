# Debugging Login Loop Issue

## Common Causes

1. **Token not being stored properly**
2. **Token format invalid**
3. **Backend not running or wrong port**
4. **CORS issues**
5. **Token verification failing**

## Debug Steps

1. **Check Browser Console** - Look for error messages
2. **Check Network Tab** - See if API calls are being made
3. **Check localStorage** - Verify token is stored
4. **Check Backend Logs** - See if requests are reaching backend

## Quick Fixes

### If token is not stored:
- Clear browser cache and localStorage
- Try logging in again

### If backend is not responding:
- Make sure backend is running on port 3001
- Check `.env` file has correct PORT

### If CORS error:
- Backend should have CORS enabled (already configured)

## Test Token Manually

Open browser console and run:
```javascript
// Check if token exists
console.log('Token:', localStorage.getItem('token'));

// Test API call manually
const token = localStorage.getItem('token');
fetch('http://localhost:3001/api/student/profile', {
  headers: {
    'Authorization': `Bearer ${token}`
  }
})
.then(r => r.json())
.then(console.log)
.catch(console.error);
```

