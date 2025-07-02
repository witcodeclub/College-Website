import React from 'react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from 'recharts';

const Student = () => {
  const attendanceData = [
    { subject: 'DSA', attendance: 85 },
    { subject: 'Computer Architecture', attendance: 92 },
    { subject: 'System Programming', attendance: 78 },
    { subject: 'Discrete Mathematics', attendance: 88 },
    { subject: 'EVS', attendance: 80 },
  ];

  const timetable = [
    { time: '10:30 AM', room: '02', subject: 'DSA' },
    { time: '11:20 AM', room: '02', subject: 'CA' },
    { time: '01 PM', room: '02', subject: 'DM' },
  ];

  const announcements = [
    'Hackathon registration extended to 5th July.',
    'AI Workshop next Wednesday.',
    'Mid-sem starts from 15th July.',
  ];

  const leaves = [
    { teacher: 'Mr. Sharma', reason: 'Medical Leave' },
    { teacher: 'Ms. Verma', reason: 'Personal Leave' },
  ];

  return (
    <div className="min-h-screen bg-gray-300 p-6 font-sans text-black">
      {/* Logout */}
      <div className="flex justify-end">
        <button className="bg-red-500 text-white px-4 py-2 rounded mb-4">Logout</button>
      </div>

      {/* Profile and Attendance Side-by-Side in Same Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        {/* Profile */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-1">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Student Profile</h2>
          <p><strong>Name:</strong>Riya</p>
          <p><strong>Roll No:</strong> 23CSE1234</p>
          <p><strong>Department:</strong> CSE</p>
          <p><strong>Semester:</strong> 4th</p>
          <p><strong>Your Subjects:</strong> DSA, Computer Architecture, System Programming, Discrete Mathematics, EVS</p>
        </div>

        {/* Attendance Chart - span 2 columns */}
        <div className="bg-white p-6 rounded-lg shadow-md col-span-1 lg:col-span-2">
          <h3 className="text-lg font-semibold mb-4">Subject-wise Attendance</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={attendanceData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="subject" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="attendance" fill="#4f46e5" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Timetable + Right Panel */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        {/* Timetable */}
        <div className="col-span-1 md:col-span-2 bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-4">Today's Timetable</h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-3 text-left">Time</th>
                <th className="p-3 text-left">Room No.</th>
                <th className="p-3 text-left">Subject</th>
              </tr>
            </thead>
            <tbody>
              {timetable.map((item, index) => (
                <tr key={index} className="border-t">
                  <td className="p-3">{item.time}</td>
                  <td className="p-3">{item.room}</td>
                  <td className="p-3">{item.subject}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Right Panel */}
        <div className="space-y-6">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Announcements</h3>
            <ul className="list-disc pl-5">
              {announcements.map((note, idx) => (
                <li key={idx} className="mb-2">{note}</li>
              ))}
            </ul>
          </div>

          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold mb-3">Teachers on Leave</h3>
            <ul>
              {leaves.map((leave, idx) => (
                <li key={idx} className="mb-2">
                  <strong>{leave.teacher}</strong> - {leave.reason}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Exam Info */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Upcoming Exams</h3>
          <p>Mid Semester Exams: 15th - 20th July 2025</p>
          <p>Venue: Main Academic Block</p>
        </div>

        {/* Admit Card */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Admit Card</h3>
          <button className="bg-green-600 text-white px-4 py-2 rounded">Download Admit Card</button>
        </div>

        {/* Notes */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Notes</h3>
          <ul className="list-disc pl-5">
            <li><a href="#" className="text-blue-600 underline">DSA Notes (PDF)</a></li>
            <li><a href="#" className="text-blue-600 underline">DBMS Notes (PDF)</a></li>
            <li><a href="#" className="text-blue-600 underline">OS Notes (PDF)</a></li>
          </ul>
        </div>

        {/* Results */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold mb-3">Result</h3>
          <p>Semester 4: <strong>Result Published</strong></p>
          <a href="#" className="text-blue-600 underline">View/Download Result</a>
        </div>
      </div>
    </div>
  );
};

export default Student;
