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
    <div style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "20px" }}>
      <div style={styles.boxContainer}>
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

      <div style={styles.boxContainer}>
        <div style={{ textAlign: "center", marginBottom: "15px" }}>
          <button style={styles.noticesButton}>📢 Notices</button>
          <button style={styles.calendarButton} ref={calendarButtonRef} onClick={openPopup}>
            📅 Calendar
          </button>
        </div>
        <div style={styles.contentBox}>
          <h4>📜 Nostalgia 2025 Coming Soon</h4>
          <hr />
          <h4>🚀 Hackathon 2025</h4>
        </div>

        {isPopupOpen && calendarButtonRef.current && (
          <div style={styles.popupBox(calendarButtonRef.current)}>
            <span style={styles.closeButton} onClick={closePopup}>❌</span>
            <h3 style={{ textAlign: "center" }}>Select a Calendar</h3>
            <div style={styles.calendarContainer}>
              {[
                { name: "Holiday Calendar", image: "/images/holiday.jpg" },
                { name: "Event Calendar", image: "/images/event_calendar.jpg" },
                { name: "Academic Calendar", image: "/images/academic_calendar.jpg" },
              ].map((calendar, index) => (
                <div key={index} style={styles.calendarItem}>
                  <img src={calendar.image} alt={calendar.name} style={styles.calendarImage} />
                  <p style={styles.calendarText}>{calendar.name}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const styles = {
  boxContainer: {
    width: "48%",
    backgroundColor: "#E3F2E6",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "4px 6px 10px #C8E6C9 (5, 67, 44, 0.2)",
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
    boxShadow: "2px 4px 6px rgba(0, 0, 0, 0.15)",
    borderRadius: "10px",
  },
  approvalItem: {
    display: "flex",
    borderRadius: "10px",
    alignItems: "center",
    gap: "30px",
    width: "300px",
    height: "80px",
    textAlign: "left",
    boorderTop: "1px solid black",
    
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
  contentBox: {
    padding: "30px",
    backgroundColor: "#D6EAD9",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    marginTop: "20px",
    textAlign: "left",
    color: "#003B73",
  },
  noticesButton: {
    padding: "12px 20px",
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
  calendarButton: {
    padding: "12px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#FF8C00",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "180px",
  },
  popupBox: (ref) => ({
    position: "absolute",
    top: ref.offsetTop + 50,
    left: ref.offsetLeft,
    background: "white",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
    width: "fit-content",
    zIndex: 1000,
  }),
  closeButton: {
    position: "absolute",
    top: "10px",
    right: "10px",
    cursor: "pointer",
    fontSize: "18px",
  },
  calendarContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
  },
  calendarItem: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  calendarImage: {
    width: "120px",
    height: "auto",
    borderRadius: "5px",
  },
  calendarText: {
    marginTop: "8px",
    fontSize: "14px",
    fontWeight: "bold",
    textAlign: "center",
  },
};

export default CombinedComponent;

