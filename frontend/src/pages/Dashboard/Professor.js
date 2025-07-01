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
    { day: 'Wednesday', subjects: ['DSA', 'DBMS'] },
  ];

  const announcements = [
    'Submit internal marks by 10th July.',
    'Faculty meeting on 6th July at 11AM.',
  ];

  return (
    <div style={mainContainer}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <button style={logoutBtn}>Logout</button>
      </div>

      <h1 style={pageTitle}>Welcome, Professor!</h1>

      <div style={cardRow}>
        <div style={chartCard}>
          <h3 style={cardTitle}>Overview</h3>
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

        <div style={cardStyle}>
          <h3 style={cardTitle}>Weekly Schedule</h3>
          {schedule.map((s, i) => (
            <p key={i}><strong>{s.day}:</strong> {s.subjects.join(', ')}</p>
          ))}
        </div>
      </div>

      <div style={cardRow}>
        <div style={cardStyle}>
          <h3 style={cardTitle}>Upload Marks</h3>
          <button style={primaryBtn}>Upload Internal Marks</button>
        </div>

        <div style={cardStyle}>
          <h3 style={cardTitle}>Upload Notes</h3>
          <button style={primaryBtn}>Upload PDF Notes</button>
        </div>
      </div>

      <div style={cardRow}>
        <div style={{ ...cardStyle, flex: '1 1 100%' }}>
          <h3 style={cardTitle}>Faculty Notices</h3>
          <ul>
            {announcements.map((note, idx) => (
              <li key={idx} style={{ marginBottom: '8px' }}>{note}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

const mainContainer = {
  padding: '30px',
  backgroundColor: '#f4f6fa',
  minHeight: '100vh',
  fontFamily: 'Arial, sans-serif'
};

const pageTitle = {
  color: '#2d2d39',
  marginBottom: '30px'
};

const cardRow = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px',
  marginBottom: '30px'
};

const cardStyle = {
  backgroundColor: '#fff',
  padding: '20px',
  borderRadius: '10px',
  boxShadow: '0 2px 6px rgba(0,0,0,0.1)',
  flex: '1 1 45%'
};

const chartCard = {
  ...cardStyle,
  flex: '1 1 45%',
  height: '320px'
};

const cardTitle = {
  marginBottom: '15px',
  color: '#1e1e2f'
};

const logoutBtn = {
  backgroundColor: '#ff4c4c',
  color: 'white',
  border: 'none',
  padding: '8px 16px',
  cursor: 'pointer',
  borderRadius: '6px',
  fontWeight: 'bold'
};

const primaryBtn = {
  backgroundColor: '#4a90e2',
  color: 'white',
  padding: '10px 20px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  fontWeight: 'bold'
};

export default Professor;
