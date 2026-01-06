import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api';
const STUDENT_API_URL = `${API_URL}/student`;
const AUTH_API_URL = `${API_URL}/auth`;

function Login() {
  const [role, setRole] = useState('student');
  const [emailOrReg, setEmailOrReg] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      // Trim whitespace from inputs
      const trimmedEmailOrReg = emailOrReg.trim();
      const trimmedPassword = password.trim();

      let response;
      
      // Use student-specific login endpoint for students
      if (role === 'student') {
        response = await axios.post(`${STUDENT_API_URL}/login`, {
          registrationNumber: trimmedEmailOrReg,
          password: trimmedPassword,
        });
      } else {
        // Use general auth endpoint for professor/staff
        response = await axios.post(`${AUTH_API_URL}/login`, {
          role,
          emailOrReg: trimmedEmailOrReg,
          password: trimmedPassword,
        });
      }

      if (response.data.success) {
        // Store token and user info
        const token = response.data.token;
        const userData = response.data.user;
        
        console.log('Login successful, token received:', token ? 'Token exists' : 'No token');
        console.log('User data:', userData);
        
        // Store in localStorage (for same origin)
        localStorage.setItem('token', token);
        localStorage.setItem('user', JSON.stringify(userData));
        
        // Verify token was stored
        const storedToken = localStorage.getItem('token');
        console.log('Token stored in localStorage:', storedToken ? 'Yes' : 'No');
        
        // Since dashboard is on different port, pass token via URL hash
        // Dashboard will extract it and store in its localStorage
        const baseURL = 'http://localhost:3003'; 
        const redirectURL = `${baseURL}/${role}#token=${encodeURIComponent(token)}`;
        
        console.log('Redirecting to dashboard with token in URL hash');
        window.location.href = redirectURL;
      } else {
        setError('Login failed. Please try again.');
        setLoading(false);
      }
    } catch (err) {
      console.error('Login error:', err);
      console.error('Error details:', {
        message: err.message,
        response: err.response?.data,
        status: err.response?.status,
        request: err.request
      });
      
      if (err.response) {
        // Server responded with error
        const errorMessage = err.response.data?.message || 'Invalid credentials. Please try again.';
        setError(errorMessage);
        console.error('Server error:', errorMessage);
      } else if (err.request) {
        // Request made but no response (backend might be down)
        setError('Cannot connect to server. Please make sure the backend is running on port 3001.');
        console.error('Network error - backend might be down');
      } else {
        // Something else happened
        setError(`An error occurred: ${err.message}`);
        console.error('Unexpected error:', err.message);
      }
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">Login</h2>
        <form onSubmit={handleLogin}>
          <label className="block font-semibold text-gray-700 mb-1">Select Role</label>
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="student">Student</option>
            <option value="professor">Professor</option>
            <option value="staff">Staff</option>
          </select>

          <label className="block font-semibold text-gray-700 mb-1">
            {role === 'student' ? 'Registration Number' : 'Email'}
          </label>
          <input
            type={role === "student" ? "text" : "email"}
            placeholder={role === 'student' ? 'e.g., 2025001' : 'Enter your Email'}
            value={emailOrReg}
            onChange={(e) => setEmailOrReg(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          <label className="block font-semibold text-gray-700 mb-1">Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md p-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
            required
          />

          {error && (
            <div className="mb-4 p-3 bg-red-100 border border-red-400 text-red-700 rounded">
              {error}
            </div>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-400 text-white py-2 rounded-md font-semibold transition duration-200"
          >
            {loading ? 'Logging in...' : 'Login'}
          </button>
        </form>

        <p className="text-center text-gray-600 mt-4">
          Don't have an account?{" "}
          <button
            onClick={() => navigate('/signin')}
            className="text-blue-600 hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default Login;





