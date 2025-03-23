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
<<<<<<< Updated upstream
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
=======
    <div style={{ display: "flex", justifyContent: "space-around", padding: "20px" }}>
      <div style={styles.recognitionsBox}>
        <h2 style={styles.title}>Accreditations & Recognitions</h2>
        <div style={styles.approvalsContainer}>
          {approvals.map((approval, index) => (
            <div key={index} style={styles.approvalItem}>
              <img src={approval.image} alt={approval.name} style={styles.approvalImage} />
              <p style={styles.approvalText}>Accredited by {approval.name}</p>
>>>>>>> Stashed changes
            </div>
          ))}
        </div>
      </div>

      <div style={styles.noticesBox}>
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
    borderBottom: "1px solid black",
    alignItems: "center",
    gap: "15px",
    width: "300px",
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
  noticesBox: {
    width: "45%",
    background: "#F8FFF4",
    boxShadow: "2px 4px 10px rgba(5, 67, 44, 0.2)",
    borderRadius: "12px",
    padding: "20px",
    textAlign: "center",
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
    padding: "9px 11p",
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
<<<<<<< Updated upstream
  holidayButton: {
    padding: "9px 11px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#047857",
=======
  calendarButton: {
    padding: "12px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#FF8C00",
>>>>>>> Stashed changes
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
<<<<<<< Updated upstream
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
=======
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
>>>>>>> Stashed changes
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
