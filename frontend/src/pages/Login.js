import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [role, setRole] = useState('student');
  const [emailOrReg, setEmailOrReg] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    // Dummy condition — replace with real validation later
    if (emailOrReg && password) {
      if (role === 'student') navigate('/dashboard/student');
      else if (role === 'professor') navigate('/dashboard/professor');
      else if (role === 'staff') navigate('/dashboard/staff');
    } else {
      alert("Please enter valid credentials.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2 style={styles.heading}>Login</h2>
        <form onSubmit={handleLogin}>
          <label style={styles.label}>Select Role</label>
          <select value={role} onChange={(e) => setRole(e.target.value)} style={styles.input}>
            <option value="student">Student</option>
            <option value="professor">Professor</option>
            <option value="staff">Staff</option>
          </select>

          <label style={styles.label}>
            {role === 'student' ? 'Registration Number' : 'Email'}
          </label>
          <input
            type={role === 'student' ? 'text' : 'email'}
            placeholder={role === 'student' ? 'e.g., 23CSE1234' : 'Enter your email'}
            value={emailOrReg}
            onChange={(e) => setEmailOrReg(e.target.value)}
            style={styles.input}
            required
          />

          <label style={styles.label}>Password</label>
          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
            required
          />

          <button type="submit" style={styles.button}>Login</button>
        </form>
      </div>
    </div>
  );
}

// Styles (inline CSS)
const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f1f2f6',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    backgroundColor: '#fff',
    padding: '30px',
    borderRadius: '8px',
    boxShadow: '0px 2px 10px rgba(0,0,0,0.1)',
    width: '350px',
  },
  heading: {
    marginBottom: '20px',
    color: '#2c3e50',
    textAlign: 'center',
  },
  label: {
    marginTop: '10px',
    display: 'block',
    fontWeight: 'bold',
    color: '#2c3e50',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginTop: '5px',
    marginBottom: '15px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    fontSize: '14px',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#27ae60',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontWeight: 'bold',
    cursor: 'pointer',
  },
};

export default Login;
