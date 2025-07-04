import React from "react";
import { Link } from 'react-router-dom'; // ✅ Import Link
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const Student = () => {
  const attendanceData = [
    { subject: "DSA", attendance: 85 },
    { subject: "Computer Architecture", attendance: 92 },
    { subject: "System Programming", attendance: 78 },
    { subject: "Discrete Mathematics", attendance: 88 },
    { subject: "EVS", attendance: 80 },
  ];

  const timetable = [
    { time: "10:30 AM", room: "02", subject: "DSA" },
    { time: "11:20 AM", room: "02", subject: "CA" },
    { time: "01 PM", room: "02", subject: "DM" },
  ];

  const announcements = [
    "Hackathon registration extended to 5th July.",
    "AI Workshop next Wednesday.",
    "Mid-sem starts from 15th July.",
  ];

  const leaves = [
    { teacher: "Mr. Sharma", reason: "Medical Leave" },
    { teacher: "Ms. Verma", reason: "Personal Leave" },
  ];

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-56 bg-slate-900 text-white p-5 shadow-lg fixed top-0 bottom-0 left-0">
        <h2 className="text-2xl font-bold mb-6 text-center">Student Panel</h2>
        <ul className="space-y-4 text-sm">
          <li><a href="#welcome" className="hover:text-yellow-400 block">Dashboard</a></li>
          <li><a href="#profile" className="hover:text-yellow-400 block">Profile</a></li>
          <li><a href="#attendance" className="hover:text-yellow-400 block">Attendance</a></li>
          <li><a href="#timetable" className="hover:text-yellow-400 block">Timetable</a></li>
          <li><a href="#notes" className="hover:text-yellow-400 block">Notes</a></li>
          <li><a href="#result" className="hover:text-yellow-400 block">Results</a></li>
        </ul>
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
      <main className="ml-56 flex-1 p-6 space-y-6 overflow-y-auto">
        {/* Welcome Section */}
        <div id="welcome" className="bg-indigo-300 p-6 rounded shadow text-center">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            Welcome, Student!
          </h1>
          <p className="text-lg text-gray-700">
            Dr. APJ Abdul Kalam Women's Institute of Technology
          </p>
        </div>

        {/* Profile + Attendance */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="profile">
          {/* Profile */}
          <div className="bg-slate-100 p-6 rounded shadow flex flex-col items-center text-center">
            <h2 className="text-xl font-semibold mb-4">Student Profile</h2>
            <div className="border-4 border-gray-400 rounded-full p-1 bg-white mb-4">
              <img
                src="/images/student-avatar.png"
                alt="Profile"
                className="w-28 h-28 rounded-full object-cover"
              />
            </div>
            <div className="text-sm space-y-1 text-gray-800">
              <p><strong>Name:</strong> __________</p>
              <p><strong>University Roll:</strong> __________</p>
              <p><strong>Class Roll:</strong> __________</p>
              <p><strong>Branch:</strong> __________</p>
              <p><strong>Semester:</strong> __________</p>
              <p><strong>Session:</strong> __________</p>
            </div>
          </div>

          {/* Attendance */}
          <div
            id="attendance"
            className="bg-slate-100 p-6 rounded shadow col-span-1 lg:col-span-2"
          >
            <h3 className="text-lg font-semibold mb-4">Subject-wise Attendance</h3>
            <ResponsiveContainer width="100%" height={300}>
              <BarChart data={attendanceData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="subject" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="attendance" fill="#6366f1" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Timetable + Announcements */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6" id="timetable">
          <div className="bg-slate-100 p-6 rounded shadow lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Today's Timetable</h3>
            <table className="w-full">
              <thead>
                <tr className="bg-gray-200">
                  <th className="text-left p-2">Time</th>
                  <th className="text-left p-2">Room</th>
                  <th className="text-left p-2">Subject</th>
                </tr>
              </thead>
              <tbody>
                {timetable.map((item, index) => (
                  <tr key={index} className="border-t">
                    <td className="p-2">{item.time}</td>
                    <td className="p-2">{item.room}</td>
                    <td className="p-2">{item.subject}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="space-y-6">
            <div className="bg-slate-100 p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-3">Announcements</h3>
              <ul className="list-disc pl-5 text-sm text-gray-800">
                {announcements.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-100 p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-3">Teachers on Leave</h3>
              <ul className="text-sm text-gray-800">
                {leaves.map((leave, idx) => (
                  <li key={idx}>
                    <strong>{leave.teacher}</strong> - {leave.reason}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Notes + Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6" id="notes">
          <div className="bg-slate-100 p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-3">Notes</h3>
            <ul className="list-disc pl-5 text-sm text-blue-700">
              <li><a href="#" className="underline">DSA Notes (PDF)</a></li>
              <li><a href="#" className="underline">DBMS Notes (PDF)</a></li>
              <li><a href="#" className="underline">OS Notes (PDF)</a></li>
            </ul>
          </div>

          <div className="bg-slate-100 p-6 rounded shadow" id="result">
            <h3 className="text-lg font-semibold mb-3">Result</h3>
            <p className="text-sm text-gray-800">
              Semester 4: <strong>Result Published</strong>
            </p>
            <a href="#" className="text-blue-700 underline text-sm">View/Download Result</a>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Student;


