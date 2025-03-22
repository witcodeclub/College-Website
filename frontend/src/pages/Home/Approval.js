import React, { useState } from "react";

const approvals = [
  { name: "AICTE", color: "#047857", logo: "🛡️" },
  { name: "DST, Bihar", color: "#1E3A8A", logo: "🎓" },
  { name: "Higher Education", color: "#6B7280", logo: "🏛️" },
];

const CombinedComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "20px"  , width: "1160px"}}>
      {/* Important Section */}
      <div style={{ width: "45%" }}>
        <div style={{ textAlign: "center", marginBottom: "15px" }}>
          <button style={styles.noticesButton}>📢 Notices</button>
          <button style={styles.holidayButton} onClick={openPopup}>📅 Holiday Calendar</button>
        </div>
        <div style={styles.contentBox} >
          <p>📜 Nostalgia 2025 Coming Soon</p>
          <hr />
          <p>🚀 Hackathon 2025</p>
        </div>
        {isPopupOpen && (
          <div style={styles.modal}>
            <div style={styles.modalContent}>
              <span style={styles.close} onClick={closePopup}>&times;</span>
              <img
                src="/images/holiday.jpg"
                alt="Holiday Calendar"
                style={{ width: "80%", maxWidth: "200px", borderRadius: "10px" }}
              />
            </div>
          </div>
        )}
      </div>

      {/* Approval Section */}
      <div
        style={{
          width: "45%",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "12px",
          boxShadow: "0px 4px 10px rgba(5, 67, 44, 0.2)",
          textAlign: "center",
        }}
      >
        <h2
          style={{
            fontSize: "28px",
            fontWeight: "bold",
            color: "#1E3A8A",
            marginBottom: "10px",
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
                width: "200px",
                textAlign: "left",
              }}
            >
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
              <p style={{ fontSize: "18px", color: "#333", fontWeight: "500", maxWidth: "220px" }}>
                Accredited by {approval.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  noticesButton: {
    padding: "9px 11p",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#0056b3",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "180px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    marginRight: "10px",
  },
  holidayButton: {
    padding: "9px 11px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#047857",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "200px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  contentBox: {
    backgroundColor: "#f8f9fa",
    marginLeft:"50px",
    padding: "10px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    textAlign: "left",
  },
  modal: {
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.3)",
    width: "40%",
    textAlign: "center",
    position: "relative",
  },
  close: {
    position: "absolute",
    top: "10px",
    right: "15px",
    fontSize: "24px",
    cursor: "pointer",
  },
};

export default CombinedComponent;
