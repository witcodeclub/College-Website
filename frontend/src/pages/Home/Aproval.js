import React from "react";

const approvals = [
  { name: "AICTE", color: "#047857" }, // Emerald Green
  { name: "DST, Bihar", color: "#1E3A8A" }, // Deep Blue
  { name: "Higher Education", color: "#6B7280" }, // Light Grey
];

const Approval = () => {
  return (
    <div style={{ 
      backgroundColor: "white",
      padding: "20px",
      borderRadius: "12px",
      boxShadow: "0px 4px 10px rgba(5, 67, 44, 0.2)",
      maxWidth: "750px",
      margin: "auto",
      textAlign: "center",
      marginTop: "30px",
    }}
  >
    <h2
      style={{
        fontSize: "24px",
        fontWeight: "bold",
        color: "green",
        marginBottom: "20px",
      }}
    > 
        Approval
      </h2>

      <div style={{ display: "flex", justifyContent: "center", gap: "20px" }}>
        {approvals.map((approval, index) => (
          <div
            key={index}
            style={{
              width: "200px",
              height: "100px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: "10px",
              boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              color: "white",
              fontSize: "18px",
              fontWeight: "bold",
              transition: "0.3s ease-in-out",
              cursor: "pointer",
              textAlign: "center",
              backgroundColor: approval.color,
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "translateY(-5px)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "translateY(0)")}
          >
            {approval.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Approval;
