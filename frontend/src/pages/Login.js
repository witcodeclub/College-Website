import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { users as defaultUsers } from '../data/user';

function Login() {
  const [role, setRole] = useState('student');
  const [emailOrReg, setEmailOrReg] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Merge localStorage users + default dummy users
    const localUsers = JSON.parse(localStorage.getItem("users")) || [];
    const allUsers = [...defaultUsers, ...localUsers];

    let matchedUser;
    if (role === 'student') {
      matchedUser = allUsers.find(
        (u) => u.role === 'student' && u.regNo === emailOrReg && u.password === password
      );
    } else {
      matchedUser = allUsers.find(
        (u) => u.role === role && u.email === emailOrReg && u.password === password
      );
    }

    if (matchedUser) {
      const baseURL = 'http://localhost:3001'; 
      window.location.href = `${baseURL}/${role}`;
    } else {
      alert("Invalid credentials. Please try again or Sign Up.");
      navigate("/signin"); // redirect to signup if not found
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

          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-2 rounded-md font-semibold transition duration-200"
          >
            Login
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





