import React from "react";

const approvals = [
  { name: "AICTE", color: "#047857", logo: "🛡️" }, // Replace with actual logos if available
  { name: "DST, Bihar", color: "#1E3A8A", logo: "🎓" },
  { name: "Higher Education", color: "#6B7280", logo: "🏛️" },
];

const Approval = () => {
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "20px",
        borderRadius: "12px",
        boxShadow: "0px 4px 10px rgba(5, 67, 44, 0.2)",
        maxWidth: "1000px",
        margin: "auto",
        textAlign: "center",
        marginTop: "30px",
      }}
    >
      <h2
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "#1E3A8A",
          marginBottom: "10px",
          marginRight:"500px",
        }}
      >
        Accreditations & Recognitions
      </h2>

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "40px" }}>
        {approvals.map((approval, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "15px",
              width: "300px",
              textAlign: "left",
            }}
          >
            {/* Circular Icon */}
            <div
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "50%",
                backgroundColor: approval.color,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "28px",
                fontWeight: "bold",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              }}
            >
              {approval.logo}
            </div>

            {/* Text */}
            <p
              style={{
                fontSize: "18px",
                color: "#333",
                fontWeight: "500",
                maxWidth: "220px",
              }}
            >
              Accredited by {approval.name}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approval;
