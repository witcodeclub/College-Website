import React from "react";

const Brochure = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Placement Brochure</h1>
      <div style={styles.card}>
        <p style={styles.text}>
          Our annual placement brochure highlights student achievements, placement statistics,
          recruiter testimonials, and academic excellence. It serves as a comprehensive document
          for companies to understand the talent pool at our college.
        </p>

        <p style={styles.text}>
          The brochure contains detailed information about departments, faculty, top recruiters,
          training modules, and student profiles.
        </p>

        <a
          href="/assets/brochure/placement_brochure.pdf"
          download
          style={styles.button}
        >
          📥 Download Brochure
        </a>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "40px 20px",
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#f5f5f5",
    minHeight: "100vh"
  },
  heading: {
    color: "#137333",
    fontSize: "32px",
    textAlign: "center",
    marginBottom: "30px"
  },
  card: {
    maxWidth: "750px",
    margin: "0 auto",
    backgroundColor: "#f1fdf4",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    animation: "fadeIn 1s ease-in"
  },
  text: {
    fontSize: "16px",
    color: "#333",
    marginBottom: "15px",
    lineHeight: "1.6"
  },
  button: {
    display: "inline-block",
    marginTop: "15px",
    padding: "12px 20px",
    backgroundColor: "#137333",
    color: "#fff",
    borderRadius: "8px",
    textDecoration: "none",
    fontWeight: "bold",
    transition: "all 0.3s ease"
  }
};

export default Brochure;
