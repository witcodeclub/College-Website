import React from "react";

const Training = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Training Process</h1>
      <div style={styles.card}>
        <p style={styles.text}>
          Our Training & Placement Cell ensures students are well-prepared for the corporate world through
          structured training programs. These programs bridge the gap between academic curriculum and
          industry expectations.
        </p>
        <ul style={styles.list}>
          <li>Soft skills & communication training</li>
          <li>Aptitude & logical reasoning sessions</li>
          <li>Technical workshops and mock interviews</li>
          <li>Industry exposure through webinars and internships</li>
        </ul>
        <p style={styles.note}>
          Training is mandatory for pre-final year students across all departments.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#ffffff",
    minHeight: "100vh"
  },
  heading: {
    color: "#137333",
    fontSize: "36px",
    textAlign: "center",
    marginBottom: "30px",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)"
  },
  card: {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#f5f5f5", // light gray card
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.08)",
    transition: "transform 0.3s ease",
    animation: "fadeIn 0.8s ease-in-out"
  },
  text: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "15px",
    lineHeight: "1.6"
  },
  list: {
    paddingLeft: "20px",
    marginBottom: "15px",
    color: "#1b5e20",
    lineHeight: "1.8"
  },
  note: {
    fontStyle: "italic",
    color: "#555",
    fontSize: "15px"
  }
};

export default Training;
