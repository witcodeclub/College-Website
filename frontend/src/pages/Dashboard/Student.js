import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from 'recharts';

const Student = () => {
  const attendanceData = [
    { subject: 'DSA', attendance: 85 },
    { subject: 'DBMS', attendance: 90 },
    { subject: 'OS', attendance: 78 },
    { subject: 'CN', attendance: 88 },
    { subject: 'AI', attendance: 70 },
  ];

  const timetable = [
    { day: 'Monday', periods: ['DSA', 'DBMS', 'OS', 'AI'] },
    { day: 'Tuesday', periods: ['CN', 'DBMS', 'DSA', 'AI'] },
    { day: 'Wednesday', periods: ['OS', 'AI', 'DSA', 'CN'] },
    { day: 'Thursday', periods: ['DBMS', 'OS', 'CN', 'DSA'] },
    { day: 'Friday', periods: ['AI', 'DBMS', 'OS', 'CN'] },
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
    <div style={{ padding: '30px', backgroundColor: '#f4f6fa', minHeight: '100vh', fontFamily: 'Arial, sans-serif' }}>

      {/* Logout Button (Right Top) */}
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button style={{
          backgroundColor: '#ff4c4c',
          color: 'white',
          border: 'none',
          padding: '8px 16px',
          cursor: 'pointer',
          borderRadius: '5px',
          marginBottom: '10px'
        }}>
          Logout
        </button>
      </div>

      <h1 style={{ color: '#2d2d39', marginBottom: '30px' }}>Welcome, Student!</h1>

      {/* Attendance */}
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}>
        <h3>Subject-wise Attendance</h3>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={attendanceData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="subject" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="attendance" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      {/* Timetable */}
      <div style={{
        backgroundColor: '#fff',
        padding: '20px',
        borderRadius: '10px',
        marginBottom: '30px',
        boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
      }}>
        <h3>Weekly Timetable</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: '15px' }}>
          <thead>
            <tr style={{ backgroundColor: '#ececec' }}>
              <th style={{ padding: '10px', textAlign: 'left' }}>Day</th>
              <th style={{ padding: '10px', textAlign: 'left' }}>Periods</th>
            </tr>
          </thead>
          <tbody>
            {timetable.map((item, index) => (
              <tr key={index}>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{item.day}</td>
                <td style={{ padding: '10px', borderBottom: '1px solid #ddd' }}>{item.periods.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Announcements + Leaves */}
      <div style={{ display: 'flex', gap: '20px', marginBottom: '30px' }}>
        <div style={{
          flex: 1,
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}>
          <h3>Announcements</h3>
          <ul>
            {announcements.map((note, idx) => (
              <li key={idx} style={{ marginBottom: '10px' }}>{note}</li>
            ))}
          </ul>
        </div>

        <div style={{
          flex: 1,
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}>
          <h3>Teachers on Leave</h3>
          <ul>
            {leaves.map((leave, idx) => (
              <li key={idx} style={{ marginBottom: '10px' }}>
                <strong>{leave.teacher}</strong> - {leave.reason}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* New Sections */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>

        {/* Exam Info */}
        <div style={{
          flex: '1 1 45%',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}>
          <h3>Upcoming Exams</h3>
          <p>Mid Semester Exams: 15th - 20th July 2025</p>
          <p>Venue: Main Academic Block</p>
        </div>

        {/* Admit Card */}
        <div style={{
          flex: '1 1 45%',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}>
          <h3>Admit Card</h3>
          <button style={{
            backgroundColor: '#4caf50',
            color: 'white',
            padding: '10px 20px',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer'
          }}>Download Admit Card</button>
        </div>

        {/* Notes */}
        <div style={{
          flex: '1 1 45%',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}>
          <h3>Notes</h3>
          <ul>
            <li><a href="#">DSA Notes (PDF)</a></li>
            <li><a href="#">DBMS Notes (PDF)</a></li>
            <li><a href="#">OS Notes (PDF)</a></li>
          </ul>
        </div>

        {/* Results */}
        <div style={{
          flex: '1 1 45%',
          backgroundColor: '#fff',
          padding: '20px',
          borderRadius: '10px',
          boxShadow: '0 2px 6px rgba(0,0,0,0.1)'
        }}>
          <h3>Result</h3>
          <p>Semester 4: <strong>Result Published</strong></p>
          <a href="#" style={{ color: '#007bff' }}>View/Download Result</a>
        </div>

      </div>
    </div>
  );
};

export default Student;
