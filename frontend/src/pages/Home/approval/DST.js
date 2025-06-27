import React from "react";

const DSTCard = () => {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      borderRadius: "10px", 
      padding: "20px", 
      maxWidth: "1000px", 
      margin: "20px auto", 
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
    }}>
      <h2 style={{ textAlign: "center", color: "green" }}>DST, Bihar</h2>
      <p style={{ fontSize: "14px", color: "#7f8c8d" }}>
        📅 <strong>Established:</strong> 1978 | 🏛 <strong>Independent Since:</strong> 2007
      </p>
      <p style={{ lineHeight: "1.6", color: "#34495e" }}>
        This department was formerly known as <strong>‘Industry and Technical Education Department’</strong>
        as it was under the control of the Department of Industry. In 1978, it was separated and established as an 
        independent department named the <strong>Department of Science and Technology (DST).</strong> 
        In 2007, the Department of Information Technology was carved out from DST to function independently.
      </p>
      <div style={{ backgroundColor: "#ecf0f1", padding: "10px", borderRadius: "8px", marginTop: "15px" }}>
        <h3 style={{ color: "#2c3e50" }}>📜 Evolution of Technical Education in Bihar:</h3>
        <p style={{ color: "#34495e" }}>
          The journey of technical education in Bihar began with the establishment of 
          <strong>Bihar College of Engineering, Patna</strong> in 1924, now known as <strong>National Institute of Technology, Patna</strong>.
          This was the <strong>6th oldest engineering college in India</strong>.
          
          <br /><br />
          Post-independence, the need for technological manpower led to the founding of 
          <strong>Bihar Institute of Technology, Sindri</strong> in 1949 as the College of Mechanical and Electrical Engineering, 
          later relocated to Sindri in 1950. In 1954, <strong>Muzaffarpur Institute of Technology</strong> was also established.
          
          <br /><br />
          After the bifurcation of Bihar in 2000, Bihar Institute of Technology, Sindri became part of Jharkhand. 
          Currently, Bihar has <strong>sixteen engineering colleges</strong> and <strong>seventeen polytechnic institutions</strong> operating effectively.
          
          <br /><br />
          Since the academic year <strong>2004-05</strong>, <strong>Dr. APJ Abdul Kalam Women’s Institute of Technology, 
          L. N. Mithila University, Darbhanga</strong> has been dedicated to providing technical education exclusively to women,
          after receiving a No Objection Certificate (NOC) from the <strong>Department of Science and Technology (DST), Government of Bihar</strong>.
        </p>
      </div>
      <p style={{ textAlign: "center", fontWeight: "bold", marginTop: "15px", color: "#16a085" }}>
        📌 Strengthening Bihar’s Technical Education for a Brighter Future.
      </p>
    </div>
  );
};

export default DSTCard;
