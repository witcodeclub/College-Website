import React from "react";
import { Link } from "react-router-dom";

const Employer = () => {
  return (
    <div className="flex min-h-screen font-sans">
      {/* Fixed Sidebar */}
      <aside className="w-60 h-screen bg-slate-800 text-white p-6 fixed top-0 left-0 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-center mb-8">Employer Panel</h2>
          <nav className="space-y-4 text-sm">
            <Link to="/student" className="block hover:text-yellow-400">Student Dashboard</Link>
            <Link to="/professor" className="block hover:text-yellow-400">Professor Dashboard</Link>
            <Link to="/staff" className="block hover:text-yellow-400">Staff Dashboard</Link>
          </nav>
        </div>
        <button
  onClick={() => {
    localStorage.clear(); // logout logic
    window.location.href = "http://localhost:3000/employer-login"; // redirect to frontend login
  }}
  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-center text-white font-semibold"
>
  Logout
</button>

      </aside>

      {/* Main Content */}
      <main className="ml-60 flex-1 p-10 bg-gray-100 text-gray-900 space-y-8">
        {/* Welcome Section */}
        <section className="bg-indigo-100 p-6 rounded shadow text-center">
          <h1 className="text-3xl font-bold mb-2">Welcome, College Director!</h1>
          <p className="text-lg text-gray-700">
            Dr. APJ Abdul Kalam Women's Institute of Technology
          </p>
          <p className="mt-2 text-sm text-gray-600">
            You have full access to oversee student, faculty, and staff activities.
          </p>
        </section>

        {/* Functional Cards */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Student Dashboard */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-t-4 border-blue-500">
            <h2 className="text-xl font-semibold mb-2 text-blue-700">Student Dashboard</h2>
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

          {/* Professor Dashboard */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-t-4 border-green-500">
            <h2 className="text-xl font-semibold mb-2 text-green-700">Professor Dashboard</h2>
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

          {/* Staff Dashboard */}
          <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition border-t-4 border-yellow-500">
            <h2 className="text-xl font-semibold mb-2 text-yellow-700">Staff Dashboard</h2>
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

        {/* Additional Admin Role Info */}
        <section className="bg-white p-6 rounded shadow border-l-4 border-indigo-400">
          <h3 className="text-lg font-semibold mb-3 text-gray-800">Admin Access Features</h3>
          <ul className="list-disc pl-6 text-sm text-gray-700">
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

