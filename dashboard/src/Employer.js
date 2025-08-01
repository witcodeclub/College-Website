import React, { useState } from "react";
import { Link } from "react-router-dom";

const Employer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 font-sans">
      {/* Mobile Header */}
      <div className="bg-slate-800 text-white p-4 md:hidden flex justify-between items-center">
        <h2 className="text-xl font-bold">Employer Panel</h2>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Sidebar / Navbar */}
      <aside
        className={`bg-slate-800 text-white w-full md:w-60 p-6 md:fixed md:h-screen top-0 left-0 z-20 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        } md:block`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl font-bold text-center mb-6 md:mb-8">Employer Panel</h2>
            <nav className="space-y-4 text-sm">
              <Link to="/student" className="block hover:text-yellow-400">Student Dashboard</Link>
              <Link to="/professor" className="block hover:text-yellow-400">Professor Dashboard</Link>
              <Link to="/staff" className="block hover:text-yellow-400">Staff Dashboard</Link>
            </nav>
          </div>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = "http://localhost:3000/employer-login";
            }}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white font-semibold mt-6 w-full"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="md:ml-60 flex-1 p-4 sm:p-6 space-y-6">
        {/* Welcome Section */}
        <section className="bg-emerald-600 p-6 rounded-xl shadow text-center">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-gray-800">
            Welcome, College Director!
          </h1>
          <p className="text-base sm:text-lg text-gray-700">
            Dr. APJ Abdul Kalam Women's Institute of Technology
          </p>
          <p className="mt-2 text-sm text-gray-600">
            You have full access to oversee student, faculty, and staff activities.
          </p>
        </section>

        {/* Dashboard Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-t-4 border-blue-500">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">
              Student Dashboard
            </h2>
            <p className="text-gray-600 mb-4">
              Track student performance, complaints, attendance, and academic reports.
            </p>
            <Link
              to="/student"
              className="inline-block bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            >
              Open
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-t-4 border-green-500">
            <h2 className="text-xl font-semibold mb-2 text-green-700">
              Professor Dashboard
            </h2>
            <p className="text-gray-600 mb-4">
              Review lecture schedules, subject performance, and faculty feedback.
            </p>
            <Link
              to="/professor"
              className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              Open
            </Link>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-t-4 border-yellow-500">
            <h2 className="text-xl font-semibold mb-2 text-yellow-700">
              Staff Dashboard
            </h2>
            <p className="text-gray-600 mb-4">
              Manage college infrastructure, documentation, and staff coordination.
            </p>
            <Link
              to="/staff"
              className="inline-block bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600"
            >
              Open
            </Link>
          </div>
        </section>

        {/* Admin Info */}
        <section className="bg-white p-6 rounded-xl shadow border-l-4 border-indigo-400">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Admin Access Features</h3>
          <ul className="list-disc pl-6 text-sm text-gray-700 space-y-1">
            <li>View academic reports across departments</li>
            <li>Monitor complaint resolution timelines</li>
            <li>Oversee lecture schedules and attendance analytics</li>
            <li>Manage college-wide announcements and notifications</li>
            <li>Export reports for meetings and audits</li>
          </ul>
        </section>
      </main>
    </div>
  );
};

export default Employer;



