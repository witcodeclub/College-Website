
import React from "react";

const AICTECard = () => {
  return (
    <div style={{ 
      border: "1px solid #ccc", 
      borderRadius: "10px", 
      padding: "20px", 
      maxWidth: "900px", 
      margin: "20px auto", 
      boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)"
    }}>
      <h2 style={{ textAlign: "center", color: "green" }}>All India Council for Technical Education (AICTE)</h2>
      <p style={{ fontSize: "14px", color: "#7f8c8d" }}>
        📅 <strong>Established:</strong> November 1945 | 🏛 <strong>Statutory Body Since:</strong> 1987
      </p>
      <p style={{ lineHeight: "1.6", color: "#34495e" }}>
        The <strong>AICTE</strong> serves as the national-level Apex Advisory Body for the
        promotion and development of quality <strong>Technical Education</strong> in India.
        With a mission to foster innovation, research, and meaningful collaboration
        between education and industry, AICTE plays a crucial role in shaping the nation's technical landscape.
      </p>
      <div style={{ backgroundColor: "#ecf0f1", padding: "10px", borderRadius: "8px", marginTop: "15px" }}>
        <h3 style={{ color: "#2c3e50" }}>📜 Approval Status:</h3>
        <p style={{ color: "#34495e" }}>
          The All India Council for Technical Education (AICTE) has been in existence since November 1945 as a national Level Apex Advisory Body and as a statutory body through an Act of Parliament in 1987 with its mission of developing and promoting quality Technical Education in the Country in a coordinated and integrated manner. The Council’s constant endeavour is to encourage a meaningful association between the Technical Education system and research and development activities in a concerted effort aimed at nation building. 
          <br /><br />
          AICTE has been <strong>continuously granting the Extension of Approval (EoA) since 2005</strong>
          to <strong>Dr. APJ Abdul Kalam Women’s Institute of Technology, L. N. Mithila University, Darbhanga</strong>,
          following its <strong>first Letter of Approval (LoA) issued in 2004</strong>.
        </p>
      </div>
      <p style={{ textAlign: "center", fontWeight: "bold", marginTop: "15px", color: "#16a085" }}>
        📌 Committed to Excellence in Technical Education & Nation Building.
      </p>
    </div>
  );
};

export default AICTECard;
