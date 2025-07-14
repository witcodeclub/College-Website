import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

const Professor = () => {
  const [menuOpen, setMenuOpen] = useState(false);

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
    { time: '10:30 AM - 11:20 AM', subject: 'DSA', semester: '4th', room: '102' },
    { time: '11:20 AM - 12:10 PM', subject: 'DBMS', semester: '5th', room: '203' },
    { time: '12:10 PM - 01:00 PM', subject: 'Break', semester: '', room: '' },
    { time: '01:00 PM - 01:50 PM', subject: 'OS', semester: '4th', room: '204' },
    { time: '01:50 PM - 02:40 PM', subject: 'AI', semester: '6th', room: '110' },
  ];

  const navLinks = [
    { href: '#welcome', label: 'Dashboard' },
    { href: '#profile', label: 'Profile' },
    { href: '#overview', label: 'Overview' },
    { href: '#schedule', label: 'Schedule' },
    { href: '#notices', label: 'Notices' },
    { href: '#upload', label: 'Upload' },
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white-700 font-sans">
      {/* Mobile Topbar */}
      <div className="bg-slate-800 text-white p-4 md:hidden flex justify-between items-center">
        <h2 className="text-xl font-bold">Professor Panel</h2>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white text-2xl">
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside className={`bg-slate-800 text-white w-full md:w-56 p-6 shadow-lg md:fixed md:top-0 md:bottom-0 md:left-0 z-10 transition-all duration-300 ${menuOpen ? 'block' : 'hidden'} md:block`}>
        <nav className="space-y-4 text-sm">
          {navLinks.map((link, idx) => (
            <a key={idx} href={link.href} className="block hover:text-yellow-400">{link.label}</a>
          ))}
        </nav>
        <button
          onClick={() => {
            localStorage.clear();
            window.location.href = "http://localhost:3000/login";
          }}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 mt-6 rounded text-white w-full font-semibold"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="md:ml-56 flex-1 p-4 sm:p-6 space-y-6">
        {/* Welcome */}
           <section id="welcome" className="bg-emerald-700 p-4 sm:p-6 rounded shadow text-center text-gray-800">
  <h1 className="text-xl sm:text-2xl font-bold mb-1 sm:mb-2">Welcome, Professor!</h1>
  <p className="text-sm sm:text-base">Dr. APJ Abdul Kalam Women's Institute of Technology</p>
</section>


        {/* Profile + Overview */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Profile */}
    <div id="profile" className="bg-slate-400 p-4 sm:p-6 rounded-lg sm:rounded-xl shadow flex flex-col items-center text-center">
  <h3 className="text-lg sm:text-xl font-semibold text-slate-700 mb-3 sm:mb-4">Professor Profile</h3>

  <div className="border-4 border-indigo-400 rounded-full p-1 bg-white mb-3 sm:mb-4">
    <img
      src="/images/professor-avatar.png"
      alt="Professor"
      className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover"
    />
  </div>

  <div className="text-sm text-gray-800 space-y-1 text-left w-full max-w-[230px] sm:max-w-[260px]">
    <div className="flex justify-between"><span><strong>Name:</strong></span><span>Dr. A.K. Sinha</span></div>
    <div className="flex justify-between"><span><strong>Department:</strong></span><span>Computer Science</span></div>
    <div className="flex justify-between"><span><strong>Email:</strong></span><span>aksinha@college.edu.in</span></div>
    <div className="flex justify-between"><span><strong>Experience:</strong></span><span>10+ years</span></div>
    <div className="flex justify-between"><span><strong>Courses:</strong></span><span>DSA, DBMS, OS</span></div>
  </div>
</div>



          {/* Overview */}
          <div id="overview" className="bg-slate-400 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Overview</h3>
            <ResponsiveContainer width="100%" height={200}>
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
       <section id="schedule" className="bg-slate-400 p-4 rounded shadow overflow-x-auto">
  <h3 className="text-lg font-semibold mb-4">Today's Teaching Schedule</h3>
  <table className="w-full text-sm text-gray-900 border border-gray-800">
    <thead className="bg-slate-100 text-gray-900">
      <tr>
        <th className="p-2 border">Time</th>
        <th className="p-2 border">Subject</th>
        <th className="p-2 border">Semester</th>
        <th className="p-2 border">Room</th>
      </tr>
    </thead>
    <tbody>
      {schedule.map((item, index) => (
        <tr key={index} className={item.subject === 'Break' ? 'bg-yellow-200 font-semibold' : ''}>
          <td className="p-2 border">{item.time}</td>
          <td className="p-2 border">{item.subject}</td>
          <td className="p-2 border">{item.semester || '-'}</td>
          <td className="p-2 border">{item.room || '-'}</td>
        </tr>
      ))}
    </tbody>
  </table>
</section>


        {/* Notices + Uploads */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6" id="notices">
          {/* Notices */}
          <div className="bg-slate-400 p-6 rounded shadow">
            <h3 className="text-xl font-semibold mb-4">Faculty Notices</h3>
            <ul className="list-disc pl-5 text-gray-800 text-sm">
              {announcements.map((note, index) => (
                <li key={index} className="mb-2">{note}</li>
              ))}
            </ul>
          </div>

          {/* Uploads */}
          <div id="upload" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="bg-slate-400 p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-3">Upload Marks</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold w-full">
                Upload Internal Marks
              </button>
            </div>
            <div className="bg-slate-400 p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-3">Upload Notes</h3>
              <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold w-full">
                Upload PDF Notes
              </button>
            </div>
            <div className="bg-slate-400 p-6 rounded shadow sm:col-span-2">
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


