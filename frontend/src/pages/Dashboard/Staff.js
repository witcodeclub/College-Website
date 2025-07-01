import React from 'react';

const Staff = () => {
  const officeModules = [
    { title: 'Finance Section', description: 'Manage fee records, salary processing, and budget reports.' },
    { title: 'Admission Desk', description: 'View application data, verify documents, and track new admissions.' },
    { title: 'Document Handling', description: 'Maintain student/staff records, generate certificates and ID cards.' },
    { title: 'Meeting Schedule', description: 'Upcoming office meetings and events in the academic calendar.' },
    { title: 'Fee Status Reports', description: 'Check fee payment statuses, dues and generate monthly reports.' },
    { title: 'Help Desk Queries', description: 'Respond to student queries and requests from the online help desk.' },
  ];

  return (
    <div style={mainContainer}>
      <div style={headerRow}>
        <h1 style={pageTitle}>Welcome, Office Staff!</h1>
        <button style={logoutBtn}>Logout</button>
      </div>

      <div style={cardRow}>
        {officeModules.map((module, idx) => (
          <div
            key={idx}
            style={{
              ...cardStyle,
              backgroundColor: cardColors[idx % cardColors.length]
            }}
          >
            <h3 style={cardTitle}>{module.title}</h3>
            <p style={{ color: '#eee', fontSize: '14px' }}>{module.description}</p>
            <button style={primaryBtn}>Open</button>
          </div>
        ))}
      </div>
    </div>
  );
};

const mainContainer = {
  padding: '20px 30px',
  backgroundColor: '#f0f2f5',
  minHeight: '100vh',
  fontFamily: 'Segoe UI, sans-serif',
  color: '#1d1d1f'
};

const headerRow = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: '20px'
};

const pageTitle = {
  color: '#1d1d1f',
  margin: 0,
  fontSize: '24px'
};

const cardRow = {
  display: 'flex',
  flexWrap: 'wrap',
  gap: '20px'
};

const cardStyle = {
  padding: '18px',
  borderRadius: '12px',
  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
  flex: '1 1 45%',
  minHeight: '160px',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: '0.3s ease'
};

const cardColors = [
  '#2c3e50', '#34495e', '#3b3b58', '#22313f', '#2f3640', '#3d3d5c'
];

const cardTitle = {
  marginBottom: '10px',
  color: '#ffffff',
  fontSize: '17px'
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
  padding: '6px 12px',
  border: 'none',
  borderRadius: '6px',
  cursor: 'pointer',
  marginTop: '10px',
  alignSelf: 'flex-start'
};

export default Staff;
