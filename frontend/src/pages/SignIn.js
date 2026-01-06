import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const API_URL = 'http://localhost:3001/api';
const STUDENT_API_URL = `${API_URL}/student`;
const AUTH_API_URL = `${API_URL}/auth`;

const SignIn = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({
    name: "",
    regNo: "",
    email: "",
    password: ""
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      if (role === "student") {
        // Use student registration endpoint
        const response = await axios.post(`${STUDENT_API_URL}/register`, {
          name: formData.name.trim(),
          email: formData.email.trim(),
          registrationNumber: formData.regNo.trim(),
          password: formData.password,
        });

        if (response.data.success) {
          // Store token and user info
          const token = response.data.token;
          const userData = response.data.user;
          
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(userData));
          
          alert("Account created successfully!");
          // Redirect to dashboard with token in URL hash (different port)
          const redirectURL = `http://localhost:3003/student#token=${encodeURIComponent(token)}`;
          window.location.href = redirectURL;
        }
      } else {
        // Use general registration endpoint for staff/professor
        const response = await axios.post(`${AUTH_API_URL}/register`, {
          role,
          email: formData.email.trim(),
          password: formData.password,
          name: formData.name.trim() || formData.email.split('@')[0],
        });

        if (response.data.success) {
          // Store token and user info
          const token = response.data.token;
          const userData = response.data.user;
          
          localStorage.setItem('token', token);
          localStorage.setItem('user', JSON.stringify(userData));
          
          console.log('Registration successful, token received:', token ? 'Token exists' : 'No token');
          console.log('User data:', userData);
          
          alert("Account created successfully!");
          // Redirect to dashboard with token in URL hash (different port)
          const baseURL = 'http://localhost:3003';
          const redirectURL = `${baseURL}/${role}#token=${encodeURIComponent(token)}`;
          console.log('Redirecting to dashboard with token in URL hash');
          window.location.href = redirectURL;
        }
      }
    } catch (err) {
      console.error('Registration error:', err);
      if (err.response) {
        setError(err.response.data?.message || 'Registration failed. Please try again.');
      } else if (err.request) {
        setError('Cannot connect to server. Please make sure the backend is running on port 3001.');
      } else {
        setError('An error occurred. Please try again.');
      }
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-4 text-center">Create Account</h2>

        {/* Role Selection */}
        <select
          className="w-full border p-2 rounded mb-4"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option value="student">Student</option>
          <option value="staff">Staff</option>
          <option value="professor">Professor</option>
        </select>

        <form onSubmit={handleSubmit} className="space-y-3">
          {/* Name field for all roles */}
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
          />

          {/* Registration Number for Students */}
          {role === "student" && (
            <>
              <input
                type="text"
                name="regNo"
                placeholder="Registration Number"
                value={formData.regNo}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
                required
              />
            </>
          )}

          {/* Email for Staff & Professor */}
          {(role === "staff" || role === "professor") && (
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
          )}

          {/* Password */}
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            className="w-full border p-2 rounded"
            required
            minLength={4}
          />

          {error && (
            <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded text-sm">
              {error}
            </div>
          )}

          {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700 disabled:bg-gray-400"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-3 text-sm text-center">
          Already have an account?{" "}
          <span
            onClick={() => navigate("/login")}
            className="text-blue-600 cursor-pointer hover:underline"
          >
            Log In
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignIn;





