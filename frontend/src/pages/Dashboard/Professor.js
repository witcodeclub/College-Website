import React from 'react';
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';

const Professor = () => {
  const chartData = [
    { name: 'Total Students', value: 120 },
    { name: 'Total Classes', value: 15 },
    { name: 'Assignments', value: 30 },
    { name: 'Lectures This Week', value: 22 },
  ];

  const COLORS = ['#4a90e2', '#50e3c2', '#f5a623', '#e94e77'];

  const schedule = [
    { day: 'Monday', subjects: ['DSA', 'OS'] },
    { day: 'Tuesday', subjects: ['DBMS', 'AI'] },
    { day: 'Wednesday', subjects: ['CS', 'DBMS'] },
    { day: 'Thursday', subjects: ['Maths', 'Set'] },
    { day: 'Friday', subjects: ['OS', 'AI'] },
    { day: 'Saturday', subjects: ['DSA', 'DBMS'] },
  ];

  const announcements = [
    'Submit internal marks by 10th July.',
    'Faculty meeting on 6th July at 11AM.',
  ];

  return (
    <div className="min-h-screen bg-gray-300 text-white p-6 font-sans">
      {/* Logout */}
      <div className="flex justify-end">
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded mb-6 font-semibold">
          Logout
        </button>
      </div>

      <h1 className="text-3xl font-bold mb-6">Welcome, Professor!</h1>

      {/* Profile + Overview Chart */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
        {/* Profile Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Professor Profile</h3>
          <p><strong>Name:</strong> Dr. A.K. Sinha</p>
          <p><strong>Department:</strong> Computer Science</p>
          <p><strong>Email:</strong> aksinha@college.edu.in</p>
          <p><strong>Courses Taught:</strong> DSA, DBMS, OS</p>
          <p><strong>Experience:</strong> 10+ years</p>
        </div>

        {/* Chart Section */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Overview</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={chartData} cx="50%" cy="50%" outerRadius={80} dataKey="value" label>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Schedule + Notices Side by Side */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {/* Your Schedule */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Your Schedule</h3>
          {schedule.map((item, index) => (
            <p key={index} className="mb-2">
              <strong>{item.day}:</strong> {item.subjects.join(', ')}
            </p>
          ))}
        </div>

        {/* Notices */}
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Faculty Notices</h3>
          <ul className="list-disc pl-6">
            {announcements.map((note, index) => (
              <li key={index} className="mb-2">{note}</li>
            ))}
          </ul>
        </div>
      </div>

      {/* Upload Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Upload Marks</h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold">
            Upload Internal Marks
          </button>
        </div>

        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold mb-4">Upload Notes</h3>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-semibold">
            Upload PDF Notes
          </button>
        </div>
      </div>
    </div>
  );
};

export default Professor;

