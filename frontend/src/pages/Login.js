import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/auth';

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

      const response = await axios.post(`${API_URL}/login`, {
        role,
        emailOrReg: trimmedEmailOrReg,
        password: trimmedPassword,
      });

      if (response.data.success) {
        // Store token and user info
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('user', JSON.stringify(response.data.user));
        
        // Redirect to dashboard
        const baseURL = 'http://localhost:3003'; 
        window.location.href = `${baseURL}/${role}`;
      } else {
        setError('Login failed. Please try again.');
        setLoading(false);
      }
    } catch (err) {
      console.error('Login error:', err);
      if (err.response) {
        // Server responded with error
        setError(err.response.data?.message || 'Invalid credentials. Please try again.');
      } else if (err.request) {
        // Request made but no response (backend might be down)
        setError('Cannot connect to server. Please make sure the backend is running on port 3001.');
      } else {
        // Something else happened
        setError('An error occurred. Please try again.');
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





