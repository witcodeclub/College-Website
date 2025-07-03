// EmployerLogin.js
import React, { useState } from "react";

const EmployerLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    // You can add real auth here
    if (username && password) {
      window.location.href = "http://localhost:3001/employer";
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded shadow-lg w-full max-w-sm">
        <h2 className="text-2xl font-bold text-center mb-4">Employer Login</h2>
        <input
          type="text"
          placeholder="Username"
          className="w-full border rounded px-3 py-2 mb-3"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full border rounded px-3 py-2 mb-4"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default EmployerLogin;
