import React, { useEffect } from "react";
import CountUp from "react-countup";
import { PieChart, Pie, Cell, Tooltip, BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";
import AOS from "aos";
import "aos/dist/aos.css";

const AboutTP = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

    // Define students array here
    const students = [
      {
        name: "Rahul Sharma",
        company: "Google",
        img: "https://via.placeholder.com/150"
      },
      {
        name: "Priya Verma",
        company: "Microsoft",
        img: "https://via.placeholder.com/150"
      },
      {
        name: "Amit Kumar",
        company: "Amazon",
        img: "https://via.placeholder.com/150"
      }
    ];

  // Placement Stats Data
  const placementData = [
    { name: "IT", value: 40, color: "#007bff" },
    { name: "Finance", value: 25, color: "#28a745" },
    { name: "Consulting", value: 20, color: "#ffc107" },
    { name: "Core", value: 15, color: "#dc3545" }
  ];

  const salaryData = [
    { range: "3-5 LPA", count: 50 },
    { range: "6-8 LPA", count: 35 },
    { range: "9-12 LPA", count: 25 },
    { range: "12+ LPA", count: 10 }
  ];

  return (
    <div style={{ padding: "20px", borderRadius: "10px", textAlign: "center" }}>
      <h2 style={{ color: "#333", fontSize: "24px", fontWeight: "bold" }}>📊 Placement Dashboard</h2>

      {/* Placement Stats */}
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "20px" }}>
        <div data-aos="fade-up" style={boxStyle}>
          <h3 style={titleStyle}>Total Offers</h3>
          <CountUp start={0} end={250} duration={2} style={countStyle("#28a745")} />
        </div>
        <div data-aos="fade-up" style={boxStyle}>
          <h3 style={titleStyle}>Highest Package</h3>
          <CountUp start={0} end={45} duration={2} suffix=" LPA" style={countStyle("#dc3545")} />
        </div>
        <div data-aos="fade-up" style={boxStyle}>
          <h3 style={titleStyle}>Companies Visited</h3>
          <CountUp start={0} end={120} duration={2} style={countStyle("#ffc107")} />
        </div>
      </div>

      {/* Graphs & Charts */}
      <div style={{ display: "flex", justifyContent: "space-around", marginTop: "40px" }}>
        <div data-aos="fade-left" style={graphStyle}>
          <h3 style={titleStyle}>Sector-wise Placements</h3>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={placementData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80}>
                {placementData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div data-aos="fade-right" style={graphStyle}>
          <h3 style={titleStyle}>Salary Range Distribution</h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={salaryData}>
              <XAxis dataKey="range" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="count" fill="#007bff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Recruiters Section */}
      <div style={{ marginTop: "40px", backgroundColor: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
        <h3 style={titleStyle}>🏢 Our Top Recruiters</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: "30px", marginTop: "20px" }}>
          <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" alt="Google" style={recruiterStyle} />
          <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" alt="Microsoft" style={recruiterStyle} />
        </div>
      </div>

      {/* Testimonials Section */}
      {/* Real Placement Photos Section */}
      <div style={{ marginTop: "40px", padding: "20px", borderRadius: "10px", }}>
        <h3 style={titleStyle}>🎓 Meet Our Placed Students</h3>
        <div style={gridStyle}>
          {students.map((student, index) => (
            <div key={index} data-aos="fade-up" style={studentCardStyle}>
              <div style={imageContainerStyle}>
                <img src={student.img} alt={student.name} style={studentImageStyle} />
                <div style={hoverOverlay}>
                  <p style={hoverText}>Placed at {student.company}</p>
                </div>
              </div>
              <h4 style={{ margin: "10px 0", color: "#333" }}>{student.name}</h4>
            </div>
          ))}
        </div>
        </div>

      {/* Contact Section */}
      <div style={{ marginTop: "40px", backgroundColor: "#fff", padding: "20px", borderRadius: "10px", boxShadow: "0 4px 6px rgba(0,0,0,0.1)" }}>
        <h3 style={titleStyle}>📞 Contact Us</h3>
        <p>📧 <a href="mailto:placement@college.edu" style={{ textDecoration: "none", color: "#007bff" }}>placement@college.edu</a></p>
        <p>📱 +91 XXXXXXXXXX</p>
      </div>
    </div>
  );
};

// Styles
const boxStyle = {
  padding: "10px",
  // backgroundColor: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  textAlign: "center",
  width: "200px"
};

const titleStyle = {  fontSize: "22px" };

const countStyle = (color) => ({
  fontSize: "30px",
  fontWeight: "bold",
  color: color
});

const graphStyle = {
  width: "45%",
  backgroundColor: "#fff",
  padding: "20px",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
};

const recruiterStyle = {
  width: "100px",
  height: "auto",
  transition: "transform 0.3s ease-in-out",
  cursor: "pointer"
};

// Hover Effect
document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach((img) => {
    img.addEventListener("mouseover", () => (img.style.transform = "scale(1.1)"));
    img.addEventListener("mouseout", () => (img.style.transform = "scale(1)"));
  });
});



const gridStyle = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
  justifyContent: "center",
  marginTop: "20px"
};

const studentCardStyle = {
  backgroundColor: "#fff",
  padding: "10px",
  borderRadius: "10px",
  boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
  textAlign: "center",
  transition: "transform 0.3s ease"
};

const imageContainerStyle = {
  position: "relative",
  width: "100%",
  overflow: "hidden",
  borderRadius: "10px"
};

const studentImageStyle = {
  width: "100%",
  borderRadius: "10px",
  transition: "transform 0.3s ease"
};

const hoverOverlay = {
  position: "absolute",
  top: "0",
  left: "0",
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.7)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  opacity: "0",
  transition: "opacity 0.3s ease"
};

const hoverText = {
  color: "#fff",
  fontSize: "16px",
  fontWeight: "bold"
};

// Hover Effects
studentCardStyle["&:hover"] = { transform: "scale(1.05)" };
studentImageStyle["&:hover"] = { transform: "scale(1.1)" };
hoverOverlay["&:hover"] = { opacity: "1" };


export default AboutTP;
