import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";

const API_URL = 'http://localhost:3001/api/student';

const Student = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [studentData, setStudentData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    let redirectTimeout = null;
    let hasRedirected = false;

    // Check for token in URL hash (from login redirect)
    const hash = window.location.hash;
    if (hash && hash.includes('token=')) {
      const tokenFromHash = decodeURIComponent(hash.split('token=')[1].split('&')[0]);
      console.log('✅ Token found in URL hash, storing in localStorage');
      localStorage.setItem('token', tokenFromHash);
      // Clear the hash from URL
      window.history.replaceState(null, '', window.location.pathname);
    }

    const fetchStudentProfile = async () => {
      // Prevent multiple redirects
      if (hasRedirected) {
        console.log('Already redirected, skipping');
        return;
      }

      try {
        const token = localStorage.getItem('token');
        const userData = localStorage.getItem('user');
        
        console.log('=== Dashboard Load Debug ===');
        console.log('Token exists:', !!token);
        console.log('Token length:', token?.length);
        console.log('User data:', userData ? JSON.parse(userData) : 'No user data');
        console.log('API URL:', `${API_URL}/profile`);
        
        if (!token) {
          console.log('❌ No token found, redirecting to login');
          hasRedirected = true;
          if (isMounted) {
            redirectTimeout = setTimeout(() => {
              window.location.href = 'http://localhost:3000/login';
            }, 2000);
          }
          return;
        }

        // Verify token format
        if (token.length < 10) {
          console.error('❌ Invalid token format (too short)');
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          hasRedirected = true;
          if (isMounted) {
            redirectTimeout = setTimeout(() => {
              window.location.href = 'http://localhost:3000/login';
            }, 2000);
          }
          return;
        }

        console.log('✅ Token looks valid, making API call...');
        console.log('Request URL:', `${API_URL}/profile`);
        console.log('Request headers:', {
          'Authorization': `Bearer ${token.substring(0, 20)}...`
        });

        const response = await axios.get(`${API_URL}/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          timeout: 15000,
          withCredentials: false
        });

        console.log('✅ Profile response received:', response.data);
        if (isMounted && response.data.success) {
          console.log('✅ Setting student data:', response.data.student);
          setStudentData(response.data.student);
          setLoading(false);
        } else if (isMounted) {
          console.error('❌ Response not successful');
          setError('Failed to load student profile');
          setLoading(false);
        }
      } catch (err) {
        console.error('❌ Error fetching student profile:', err);
        console.error('Error type:', err.name);
        console.error('Error message:', err.message);
        console.error('Error response data:', err.response?.data);
        console.error('Error response status:', err.response?.status);
        console.error('Error request:', err.request);
        
        if (!isMounted || hasRedirected) return;
        
        // Only redirect on 401/403 (unauthorized), not on other errors
        if (err.response?.status === 401 || err.response?.status === 403) {
          console.log('❌ Unauthorized (401/403), clearing token and redirecting');
          console.log('Error details:', err.response?.data);
          localStorage.clear();
          hasRedirected = true;
          redirectTimeout = setTimeout(() => {
            window.location.href = 'http://localhost:3000/login';
          }, 2000);
        } else if (err.response?.status === 404) {
          console.error('❌ Student profile not found (404)');
          setError('Student profile not found. Please contact support.');
          setLoading(false);
        } else if (err.request) {
          // Network error - don't redirect, just show error
          console.error('❌ Network error - backend not reachable');
          console.error('Network error details:', {
            message: err.message,
            code: err.code,
            request: err.request
          });
          setError(`Cannot connect to server at ${API_URL}/profile. Please check if the backend is running on port 3001. Error: ${err.message}`);
          setLoading(false);
        } else {
          console.error('❌ Other error:', err.message);
          setError(`Failed to load student profile: ${err.message}`);
          setLoading(false);
        }
      }
    };

    fetchStudentProfile();

    // Cleanup function
    return () => {
      isMounted = false;
      if (redirectTimeout) {
        clearTimeout(redirectTimeout);
      }
    };
  }, []); // Empty dependency array - only run once on mount

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
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100">
      {/* Mobile Sidebar Toggle */}
      <div className="bg-slate-900 text-white p-4 md:hidden flex justify-between items-center">
        <h2 className="text-xl font-bold">Student Panel</h2>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`bg-slate-900 text-white w-full md:w-56 p-5 shadow-lg md:fixed md:top-0 md:bottom-0 md:left-0 z-10 transition-all duration-300 ${
          menuOpen ? "block" : "hidden"
        } md:block`}
      >
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
            localStorage.clear();
            window.location.href = "http://localhost:3000/login";
          }}
          className="bg-red-500 hover:bg-red-600 px-4 py-2 mt-6 rounded text-white w-full"
        >
          Logout
        </button>
      </aside>

      {/* Main Content */}
      <main className="md:ml-56 flex-1 p-4 sm:p-6 space-y-6 bg-emerald-to-br from emerald-50 to white min-h-screen overflow-y-auto">
        {loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-emerald-700 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading profile...</p>
            </div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        ) : (
          <>
            {/* Welcome */}
            <section id="welcome" className="bg-emerald-700 p-4 sm:p-6 rounded-xl shadow text-center">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-1 sm:mb-2">
                Hi {studentData?.name || 'Student'}!
              </h1>
              <p className="text-base sm:text-lg text-white">
                Dr. APJ Abdul Kalam Women's Institute of Technology
              </p>
            </section>

    <section id="profile" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
  {/* Profile */}
  <div className="bg-slate-200 p-4 sm:p-6 rounded shadow flex flex-col items-center text-center">
    <h2 className="text-lg sm:text-xl font-semibold text-slate-700 mb-3 sm:mb-4">Student Profile</h2>
    <div className="rounded-full p-1 bg-white mb-3 sm:mb-4">
      <img
        src="/images/student-avatar.png"
        alt="Profile"
        className="w-24 h-24 sm:w-28 sm:h-28 rounded-full object-cover"
      />
    </div>
    <div className="text-sm text-gray-800 space-y-1 text-left w-full max-w-[230px] sm:max-w-[250px]">
      <div className="flex justify-between"><span><strong>Name:</strong></span><span>{studentData?.name || 'N/A'}</span></div>
      <div className="flex justify-between"><span><strong>Registration Number:</strong></span><span>{studentData?.registrationNumber || 'N/A'}</span></div>
      <div className="flex justify-between"><span><strong>Roll Number:</strong></span><span>{studentData?.rollNumber || 'N/A'}</span></div>
      <div className="flex justify-between"><span><strong>Email:</strong></span><span className="text-xs">{studentData?.email || 'N/A'}</span></div>
      <div className="flex justify-between"><span><strong>Branch:</strong></span><span>__________</span></div>
      <div className="flex justify-between"><span><strong>Semester:</strong></span><span>__________</span></div>
    </div>
  </div>

  {/* Attendance */}
  <div id="attendance" className="bg-slate-200 p-6 sm:p-6 rounded-xl shadow-lg border border-slate-300 lg:col-span-2 w-full">
    <h3 className="text-base sm:text-lg font-semibold mb-4 text-slate-700">Subject-wise Attendance</h3>
    <div className="w-full h-52 sm:h-64">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={attendanceData}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="subject" />
          <YAxis />
          <Tooltip />
          <Bar dataKey="attendance" fill="#2563eb" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  </div>
</section>


        

        {/* Timetable + Announcements */}
        <section id="timetable" className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Timetable */}
          <div className="bg-slate-200 p-6 rounded shadow lg:col-span-2">
            <h3 className="text-lg font-semibold mb-4">Today's Timetable</h3>
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-300 text-left">
                  <th className="p-2">Time</th>
                  <th className="p-2">Room</th>
                  <th className="p-2">Subject</th>
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

          {/* Announcements + Leaves */}
          <div className="space-y-6">
            <div className="bg-slate-200 p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-3">Announcements</h3>
              <ul className="list-disc pl-5 text-sm text-gray-800">
                {announcements.map((note, idx) => (
                  <li key={idx}>{note}</li>
                ))}
              </ul>
            </div>
            <div className="bg-slate-200 p-6 rounded shadow">
              <h3 className="text-lg font-semibold mb-3">Teachers on Leave</h3>
              <ul className="text-sm text-gray-800">
                {leaves.map((leave, idx) => (
                  <li key={idx}><strong>{leave.teacher}</strong> - {leave.reason}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* Notes + Results */}
        <section id="notes" className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-slate-200 p-6 rounded shadow">
            <h3 className="text-lg font-semibold mb-3">Notes</h3>
            <ul className="list-disc pl-5 text-sm text-blue-700">
              <li><a href="#" className="underline">DSA Notes (PDF)</a></li>
              <li><a href="#" className="underline">DBMS Notes (PDF)</a></li>
              <li><a href="#" className="underline">OS Notes (PDF)</a></li>
            </ul>
          </div>

          <div className="bg-slate-200 p-6 rounded shadow" id="result">
            <h3 className="text-lg font-semibold mb-3">Result</h3>
            <p className="text-sm text-gray-800">
              Semester 4: <strong>Result Published</strong>
            </p>
            <a href="#" className="text-blue-700 underline text-sm">View/Download Result</a>
          </div>
        </section>
          </>
        )}
      </main>
    </div>
  );
};

export default Student;



