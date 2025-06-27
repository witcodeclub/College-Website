import React from "react";

const courses = [
  { name: "B.Tech - Computer Science & Engineering", dept: "CSE", duration: "4 Years", seats: 60 },
  { name: "B.Tech - Information Technology", dept: "IT", duration: "4 Years", seats: 30 },
  { name: "B.Tech - Bioinformatics", dept: "Bioinformatics", duration: "4 Years", seats: 30 },
  { name: "Master of Computer Application (MCA)", dept: "Computer Applications", duration: "3 Years", seats: 30 },
  { name: "Bachelor of Computer Application (BCA)", dept: "Computer Applications", duration: "3 Years", seats: 30 }
];

const Courses = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Courses Offered</h2>
      <p style={styles.description}>Explore the range of courses offered under different departments.</p>
      <div style={styles.grid}>
        {courses.map((course, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.icon}>🎓</div>
            <h3 style={styles.title}>{course.name}</h3>
            <p><strong>Department:</strong> {course.dept}</p>
            <p><strong>Duration:</strong> {course.duration}</p>
            <p><strong>No. of Seats:</strong> {course.seats}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

// Inline CSS styles
const styles = {
  container: {
    textAlign: "center",
    padding: "40px",
    background: "#fff"
  },
  heading: {
    fontSize: "30px",
    color: "green"
  },
  description: {
    fontSize: "16px",
    color: "#666"
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
    justifyContent: "center",
    paddingTop: "20px"
  },
  card: {
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    cursor: "pointer"
  },
  cardHover: {
    transform: "translateY(-10px)",
    boxShadow: "5px 5px 20px rgba(0, 0, 0, 0.3)"
  },
  icon: {
    fontSize: "30px"
  },
  title: {
    color: "#21618C",
    fontSize: "20px",
    fontWeight: "bold"
  }
};

export default Courses;
