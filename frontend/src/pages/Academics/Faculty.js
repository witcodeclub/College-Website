import React from "react";

const facultyData = [
  {
    title: "Director (APJAKWIT)",
    name: "Member",
    department: "Director (APJAKWIT)",
    image: "/images/faculty1.jpg"
  },
  {
    title: "Assistant Professor (Regular)",
    name: "Mr. Brajesh Kumar",
    department: "ENGINEERING & TECHNOLOGY (CSE/IT/MCA)",
    image: "/images/faculty2.jpg"
  },
  {
    title: "Assistant Professor (Regular)",
    name: "Mr. Santosh Kumar",
    department: "ENGINEERING & TECHNOLOGY (CSE/IT/MCA)",
    image: "/images/faculty3.jpg"
  },
  {
    title: "Assistant Professor (Regular)",
    name: "Mr. Amit Kumar Mishra",
    department: "ENGINEERING & TECHNOLOGY (CSE/IT/MCA)",
    image: "/images/faculty4.jpg"
  },
  {
    title: "Assistant Professor (Regular)",
    name: "Mr. Asif Habibi",
    department: "ENGINEERING & TECHNOLOGY (CSE/IT/MCA)",
    image: "/images/faculty5.jpg"
  },

  {
    title: "Assistant Professor (Regular)",
    name: "Mrs. Rashmi ",
    department: "ENGINEERING & TECHNOLOGY (CSE/IT/MCA)",
    image: "/images/faculty6.jpg"
  }
  // Add more as needed
];

const Faculty = () => {
  return (
    <div style={styles.wrapper}>
      <h2 style={styles.heading}>Faculty Members</h2>
      <div style={styles.grid}>
        {facultyData.map((faculty, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.titleBar}>{faculty.title}</div>
            <img src={faculty.image} alt={faculty.name} style={styles.image} />
            <div style={styles.name}>{faculty.name}</div>
            <div style={styles.department}>{faculty.department}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  wrapper: {
    padding: "30px",
    fontFamily: "Arial"
  },
  heading: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "28px",
    color: "green",
    fontWeight: "bold"
  },
  grid: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "25px"
  },
  card: {
    width: "300px",
    border: "1px solid #ccc",
    backgroundColor: "#f0f0f0",
    textAlign: "center",
    borderRadius: "5px",
    overflow: "hidden",
    boxShadow: "0 2px 6px rgba(0,0,0,0.1)"
  },
  titleBar: {
    backgroundColor: "#3b1212",
    color: "#fff",
    padding: "6px 0",
    fontSize: "13px"
  },
  image: {
    width: "100%",
    height: "300px",
    objectFit: "cover"
  },
  name: {
    backgroundColor: "#d2d2d2",
    color: "green",
    fontWeight: "bold",
    padding: "6px",
    fontSize: "15px"
  },
  department: {
    padding: "6px",
    fontSize: "13px",
    backgroundColor: "#d2d2d2",
    borderTop: "1px solid #999"
  }
};

export default Faculty;
