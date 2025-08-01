<<<<<<< HEAD

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
=======
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import Student from "./Student";
import Professor from "./Professor";
import Staff from "./Staff";
import Employer from "./Employer";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-100 to-purple-200 p-4">
        <Routes>

          {/* Main Landing Page */}
          <Route
            path="/"
            element={
              <div className="bg-white shadow-2xl rounded-2xl p-8 max-w-xl w-full text-center">
                <h1 className="text-3xl font-bold mb-6 text-gray-800">Login As</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <Link
                    to="/student"
                    className="bg-blue-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
                  >
                    Student
                  </Link>
                  <Link
                    to="/professor"
                    className="bg-green-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-green-600 transition duration-300"
                  >
                    Professor
                  </Link>
                  <Link
                    to="/staff"
                    className="bg-yellow-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300"
                  >
                    Staff
                  </Link>
                  <Link
                    to="/employer"
                    className="bg-purple-500 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-600 transition duration-300"
                  >
                    Employer
                  </Link>
                </div>
              </div>
            }
          />

          {/* Actual Dashboard Routes */}
          <Route path="/student" element={<Student />} />
          <Route path="/professor" element={<Professor />} />
          <Route path="/staff" element={<Staff />} />
          <Route path="/employer" element={<Employer />} />

        </Routes>
      </div>
    </Router>
>>>>>>> ada15781fa49f5588764edbb58ad3138a618432c
  );
}

export default App;

