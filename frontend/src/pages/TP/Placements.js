import React from "react";

const Placements = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Placement Process</h1>
      <div style={styles.card}>
        <h2 style={styles.subheading}>On-Campus Recruitment</h2>
        <p style={styles.text}>
          Our college follows a structured placement process to ensure maximum career opportunities
          for students. The Training & Placement Cell coordinates with top recruiters to invite them
          for on-campus hiring.
        </p>
        <ul style={styles.list}>
          <li>Pre-placement talks by companies</li>
          <li>Online/Offline aptitude and technical tests</li>
          <li>Group discussions & personal interviews</li>
          <li>Final offer and onboarding process</li>
        </ul>
        <p style={styles.note}>
          Many students from CS, IT, and MCA have secured positions in reputed companies like TCS,
          Infosys, Wipro, and more.
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#fffff",
    minHeight: "100vh"
  },
  heading: {
    color: "#137333",
    fontSize: "35px",
    textAlign: "center",
    marginBottom: "30px",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)"
  },
  card: {
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#f5f5f5",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    animation: "fadeIn 1s ease-in"
  },
  subheading: {
    fontSize: "24px",
    color: "#2e7d32",
    marginBottom: "10px"
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
    color: "#1b5e20"
  },
  note: {
    fontStyle: "italic",
    color: "#444",
    fontSize: "15px"
  }
};

// Optional CSS animation - add this in index.css or global style if needed
// @keyframes fadeIn {
//   from { opacity: 0; transform: translateY(20px); }
//   to { opacity: 1; transform: translateY(0); }
// }

export default Placements;
