// EmployerLogin.js
import React, { useState } from "react";
import {users} from "../data/user"; // Dummy users data file

const EmployerLogin = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [error, setError] = useState("");

  const handleAuth = () => {
    setError("");

    if (isSignup) {
      // SIGNUP (Only Director can signup)
      const directorExists = users.find(
        (u) => u.role === "director" && u.email === email
      );
      if (directorExists) {
        setError("Director already registered!");
        return;
      }

      if (email && password && name) {
        users.push({ id: Date.now(), name, email, password, role: "director" });
        alert("Director account created successfully!");
        setIsSignup(false); // Go back to login
      } else {
        setError("All fields are required!");
      }
    } else {
      // LOGIN (Only director can login)
      const director = users.find(
        (u) => u.role === "director" && u.email === email && u.password === password
      );

      if (director) {
        window.location.href = "http://localhost:3001/employer";
      } else {
        setError("Invalid credentials or not authorized!");
      }
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-6 sm:p-8 rounded shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-800">
          {isSignup ? "Employer Signup" : "Employer Login"}
        </h2>

        {isSignup && (
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        )}

        <input
          type="email"
          placeholder="Email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-4 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border border-gray-300 rounded-md px-3 py-2 mb-6 focus:outline-none focus:ring-2 focus:ring-blue-400"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-md font-semibold transition duration-200"
          onClick={handleAuth}
        >
          {isSignup ? "Signup" : "Login"}
        </button>

        <p className="mt-4 text-sm text-center text-gray-600">
          {isSignup ? "Already have an account?" : "Don’t have an account?"}{" "}
          <button
            className="text-blue-600 font-semibold hover:underline"
            onClick={() => setIsSignup(!isSignup)}
          >
            {isSignup ? "Login here" : "Signup here"}
          </button>
        </p>
      </div>
    </div>
  );
};

export default EmployerLogin;


