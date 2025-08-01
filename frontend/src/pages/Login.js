import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [role, setRole] = useState('student');
  const [emailOrReg, setEmailOrReg] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (emailOrReg && password) {
      const baseURL = 'http://localhost:3001';

      if (role === 'student') {
        window.location.href = `${baseURL}/student`;
      } else if (role === 'professor') {
        window.location.href = `${baseURL}/professor`;
      } else if (role === 'staff') {
        window.location.href = `${baseURL}/staff`;
      }
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4 sm:px-6 md:px-10 py-10">
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
            type={role === 'student' ? 'text' : 'email'}
            placeholder={role === 'student' ? 'e.g., 23CSE1234' : 'Enter your email'}
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

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;

