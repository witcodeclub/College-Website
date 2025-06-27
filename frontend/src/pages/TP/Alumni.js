import React from "react";

const alumniList = [
  {
    name: "Priya Sharma",
    year: "Batch 2019 - CS",
    current: "Software Engineer at Infosys",
    image: "/images/alumni1.jpg"
  },
  {
    name: "Rahul Verma",
    year: "Batch 2020 - IT",
    current: "Frontend Developer at TCS",
    image: "/images/alumni2.jpg"
  },
  {
    name: "Sneha Kumari",
    year: "Batch 2018 - MCA",
    current: "Tech Analyst at Wipro",
    image: "/images/alumni3.jpg"
  }
];

const alumniMessages = [
  {
    name: "Sneha Kumari",
    message:
      "The foundation I received at this college was instrumental in shaping my professional career. Forever grateful!",
    image: "/images/alumni3.jpg"
  },
  {
    name: "Rahul Verma",
    message:
      "The faculty, training programs, and project opportunities here gave me an edge in the corporate world.",
    image: "/images/alumni2.jpg"
  }
];

const Alumni = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Our Alumni</h1>

      {/* Alumni List Section */}
      <div style={styles.cardContainer}>
        {alumniList.map((alumni, idx) => (
          <div key={idx} style={styles.card} className="fade-in">
            <img src={alumni.image} alt={alumni.name} style={styles.image} />
            <h3 style={styles.name}>{alumni.name}</h3>
            <p style={styles.info}>{alumni.year}</p>
            <p style={styles.info}><em>{alumni.current}</em></p>
          </div>
        ))}
      </div>

      {/* Alumni Message Section */}
      <h2 style={styles.subheading}>Alumni Messages</h2>
      <div style={styles.messageContainer}>
        {alumniMessages.map((msg, idx) => (
          <div key={idx} style={styles.messageCard}>
            <img src={msg.image} alt={msg.name} style={styles.messageImage} />
            <p style={styles.messageText}>“{msg.message}”</p>
            <p style={styles.messageAuthor}>— {msg.name}</p>
          </div>
        ))}
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
    textAlign: "center",
    fontSize: "36px",
    marginBottom: "30px"
  },
  subheading: {
    fontSize: "28px",
    marginTop: "50px",
    color: "#137333",
    textAlign: "center",
    marginBottom: "20px"
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px"
  },
  card: {
    width: "230px",
    padding: "20px",
    backgroundColor: "#f1fdf4",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease"
  },
  image: {
    width: "100%",
    height: "220px",
    borderRadius: "8px",
    objectFit: "cover",
    marginBottom: "10px"
  },
  name: {
    fontSize: "18px",
    color: "#1b5e20",
    margin: "10px 0 5px 0"
  },
  info: {
    fontSize: "14px",
    color: "#555"
  },
  messageContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px",
    marginTop: "20px"
  },
  messageCard: {
    maxWidth: "400px",
    backgroundColor: "#f5f5f5",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    textAlign: "center"
  },
  messageImage: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    objectFit: "cover",
    marginBottom: "15px"
  },
  messageText: {
    fontStyle: "italic",
    fontSize: "15px",
    color: "#444",
    lineHeight: "1.6"
  },
  messageAuthor: {
    marginTop: "10px",
    fontWeight: "bold",
    color: "#137333"
  }
};

export default Alumni;
