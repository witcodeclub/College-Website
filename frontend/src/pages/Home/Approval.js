import React, { useState, useRef } from "react";

const approvals = [
  { name: "AICTE", image: "/images/aicte.jpeg" },
  { name: "DST, Bihar", image: "/images/dst.png" },
  { name: "Higher Education", image: "/images/higher.png" },
  { name: "NAAC", image: "/images/naac.png" },
];

const CombinedComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const calendarButtonRef = useRef(null);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div style={{ display: "flex", justifyContent: "space-around", padding: "20px", width: "1160px" }}>
      {/* Important Notices Section */}
      <div style={{ width: "45%" }}>
        <div style={{ textAlign: "center", marginBottom: "15px" }}>
          <button style={styles.noticesButton}>📢 Notices</button>
          <button style={styles.holidayButton} onClick={openPopup}>📅 Holiday Calendar</button>
        </div>
        <div style={styles.contentBox}>
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

      {/* Accreditations & Recognitions Section */}
      <div style={styles.recognitionsBox}>
        <h2 style={styles.title}>Accreditations & Recognitions</h2>
        <div style={styles.approvalsContainer}>
          {approvals.map((approval, index) => (
            <div key={index} style={styles.approvalItem}>
              <img src={approval.image} alt={approval.name} style={styles.approvalImage} />
              <p style={styles.approvalText}>Accredited by {approval.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const styles = {
  recognitionsBox: {
    width: "45%",
    backgroundColor: "#E3F2E6",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "2px 4px 10px rgba(5, 67, 44, 0.2)",
    textAlign: "center",
  },
  title: {
    fontSize: "28px",
    fontWeight: "bold",
    color: "#003B73",
    marginBottom: "10px",
  },
  approvalsContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    gap: "40px",
  },
  approvalItem: {
    display: "flex",
    alignItems: "center",
    gap: "15px",
    width: "200px",
    textAlign: "left",
  },
  approvalImage: {
    width: "60px",
    height: "60px",
    borderRadius: "50%",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
  },
  approvalText: {
    fontSize: "18px",
    color: "#333",
    fontWeight: "500",
    maxWidth: "220px",
  },
  noticesButton: {
    padding: "9px 11px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#034078",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "180px",
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
    right: "10px",
    cursor: "pointer",
    fontSize: "18px",
  },
};

export default CombinedComponent;
