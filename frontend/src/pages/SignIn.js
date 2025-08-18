import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SignIn = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState("student");
  const [formData, setFormData] = useState({
    regNo: "",
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Save new user in localStorage (for testing)
    const users = JSON.parse(localStorage.getItem("users")) || [];
    users.push({ ...formData, role });
    localStorage.setItem("users", JSON.stringify(users));

    alert("Account created successfully!");
    navigate("/login"); // Redirect to login page
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
          {/* Registration Number for Students */}
          {role === "student" && (
            <input
              type="text"
              name="regNo"
              placeholder="Registration Number"
              value={formData.regNo}
              onChange={handleChange}
              className="w-full border p-2 rounded"
              required
            />
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
          />

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
          >
            Sign Up
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





