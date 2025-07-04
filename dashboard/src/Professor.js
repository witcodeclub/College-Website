import React from 'react';
import { Link } from 'react-router-dom';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Professor = () => {
  const chartData = [
    { name: 'Total Students', value: 120 },
    { name: 'Total Classes', value: 15 },
    { name: 'Assignments', value: 30 },
    { name: 'Lectures This Week', value: 22 },
  ];

  const COLORS = ['#4a90e2', '#50e3c2', '#f5a623', '#e94e77'];

  const announcements = [
    'Submit internal marks by 10th July.',
    'Faculty meeting on 6th July at 11AM.',
  ];

  const schedule = [
    {
      time: '10:30 AM - 11:20 AM',
      subject: 'DSA',
      semester: '4th',
      room: '102',
    },
    {
      time: '11:20 AM - 12:10 PM',
      subject: 'DBMS',
      semester: '5th',
      room: '203',
    },
    {
      time: '12:10 PM - 01:00 PM',
      subject: 'Break',
      semester: '',
      room: '',
    },
    {
      time: '01:00 PM - 01:50 PM',
      subject: 'OS',
      semester: '4th',
      room: '204',
    },
    {
      time: '01:50 PM - 02:40 PM',
      subject: 'AI',
      semester: '6th',
      room: '110',
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">
      {/* Sidebar */}
      <aside className="w-56 bg-slate-800 text-white p-6 h-screen fixed top-0 left-0">
        <h2 className="text-2xl font-bold mb-8 text-center">Professor Panel</h2>
        <nav className="space-y-4 text-sm">
          <a href="#welcome" className="block hover:text-yellow-400">Dashboard</a>
          <a href="#profile" className="block hover:text-yellow-400">Profile</a>
          <a href="#overview" className="block hover:text-yellow-400">Overview</a>
          <a href="#schedule" className="block hover:text-yellow-400">Schedule</a>
          <a href="#notices" className="block hover:text-yellow-400">Notices</a>
          <a href="#upload" className="block hover:text-yellow-400">Upload</a>
        </nav>
        <button
  onClick={() => {
    localStorage.clear(); // logout logic
    window.location.href = "http://localhost:3000/login"; // redirect to frontend login
  }}
  className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-center text-white font-semibold"
>
  Logout
</button>


      </aside>

      {/* Main Content */}
      <main className="ml-56 w-full p-6 space-y-6">
        {/* Welcome */}
        <section id="welcome" className="bg-indigo-200 p-6 rounded shadow text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">Welcome, Professor!</h1>
          <p className="text-lg text-gray-700">Dr. APJ Abdul Kalam Women's Institute of Technology</p>
        </section>

        {/* Profile + Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile */}
          <div id="profile" className="bg-slate-100 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Professor Profile</h3>
            <div className="flex items-center mb-4">
              <img
                src="/images/professor-avatar.png"
                alt="Professor"
                className="w-24 h-24 rounded-full border-4 border-gray-400 bg-white mr-4"
              />
              <div className="text-sm">
                <p><strong>Name:</strong> Dr. A.K. Sinha</p>
                <p><strong>Department:</strong> Computer Science</p>
                <p><strong>Email:</strong> aksinha@college.edu.in</p>
                <p><strong>Experience:</strong> 10+ years</p>
              </div>
            </div>
            <p><strong>Courses Taught:</strong> DSA, DBMS, OS</p>
          </div>

          {/* Overview Chart */}
          <div id="overview" className="bg-slate-100 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Overview</h3>
            <ResponsiveContainer width="100%" height={250}>
              <PieChart>
                <Pie
                  data={chartData}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label
                >
                  {chartData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Teaching Schedule */}
        <section id="schedule" className="bg-slate-100 p-6 rounded shadow">
          <h3 className="text-xl font-semibold mb-4">Today's Teaching Schedule</h3>
          <table className="w-full text-sm text-gray-800 border border-gray-300">
            <thead className="bg-slate-300 text-gray-900">
              <tr>
                <th className="p-2 border">Time</th>
                <th className="p-2 border">Subject</th>
                <th className="p-2 border">Semester</th>
                <th className="p-2 border">Room</th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((item, index) => (
                <tr
                  key={index}
                  className={item.subject === 'Break' ? 'bg-yellow-100 font-semibold' : ''}
                >
                  <td className="p-2 border">{item.time}</td>
                  <td className="p-2 border">{item.subject}</td>
                  <td className="p-2 border">{item.semester || '-'}</td>
                  <td className="p-2 border">{item.room || '-'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </section>

        {/* Notices + Upload */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Notices */}
          <div id="notices" className="bg-slate-100 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Faculty Notices</h3>
            <ul className="list-disc pl-5 text-gray-800">
              {announcements.map((note, index) => (
                <li key={index} className="mb-2">{note}</li>
              ))}
            </ul>
          </div>

          {/* Uploads */}
          <div id="upload" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-100 p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-3">Upload Marks</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold w-full">
                Upload Internal Marks
              </button>
            </div>
            <div className="bg-slate-100 p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-3">Upload Notes</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold w-full">
                Upload PDF Notes
              </button>
            </div>
            <div className="bg-slate-100 p-6 rounded shadow sm:col-span-2">
              <h3 className="text-lg font-semibold mb-3">Upload Assignment</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold w-full">
                Upload Assignment
              </button>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Professor;

