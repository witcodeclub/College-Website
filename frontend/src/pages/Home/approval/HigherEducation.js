import React from "react";

const HigherEducationCard = () => {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      borderRadius: "10px", 
      padding: "20px", 
      maxWidth: "1000px", 
      margin: "20px auto", 
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
    }}>
      <h2 style={{ textAlign: "center", color: "green" }}>Higher Education</h2>
      <p style={{ fontSize: "14px", color: "#7f8c8d" }}>
        📅 <strong>RUSA Initiative:</strong> Since 12th and 13th Plans | 🏛 <strong>Key Focus:</strong> State Higher Education Councils (SHEC)
      </p>
      <p style={{ lineHeight: "1.6", color: "#34495e" }}>
        One of the pre-requisites of the <strong>Rashtriya Uchchatar Shiksha Abhiyan (RUSA)</strong> Scheme is the formation of
        <strong>State Higher Education Councils (SHEC)</strong> in states. This marks a significant shift in India's higher education policy,
        recognizing states as primary units of planning and aligning multiple funding streams for educational development.
      </p>
      <div style={{ backgroundColor: "#ecf0f1", padding: "10px", borderRadius: "8px", marginTop: "15px" }}>
        <h3 style={{ color: "#2c3e50" }}>📜 Role of SHEC in RUSA Implementation:</h3>
        <p style={{ color: "#34495e" }}>
          The <strong>State Higher Education Councils (SHECs)</strong> are central to the <strong>RUSA vision</strong> of enhancing access, equity, and excellence
          in higher education with better efficiency, transparency, accountability, and responsiveness.
          <br /><br />
          The RUSA scheme aims to deliver crucial academic, administrative, and governance reforms in state education systems.
          Among its sixteen listed objectives, the <strong>16th goal</strong> is to facilitate the creation of SHECs, while the other fifteen
          focus on long-term aspirational policy changes.
          <br /><br />
          In 2004, the <strong>Department of Higher Education, Government of Bihar</strong> issued a <strong>No Objection Certificate (NOC)</strong> to the
          <strong>Registrar, L. N. Mithila University, Darbhanga</strong>. Since then, <strong>Dr. APJ Abdul Kalam Women’s Institute of Technology</strong>
          has been dedicated to imparting technical education exclusively to women since the academic year 2004-05.
        </p>
      </div>
      <p style={{ textAlign: "center", fontWeight: "bold", marginTop: "15px", color: "#16a085" }}>
        📌 Advancing Higher Education in Bihar for a Progressive Future.
      </p>
    </div>
  );
};

export default HigherEducationCard;
