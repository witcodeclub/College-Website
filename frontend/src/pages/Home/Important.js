import React from "react";

const Important = () => {
  const openPopup = () => {
    document.getElementById("popup").style.display = "flex";
  };

  const closePopup = () => {
    document.getElementById("popup").style.display = "none";
  };

  return (
    <div style={styles.mainContainer}>
      {/* Box Container */}
      <div style={styles.box}>
        {/* Notices Button */}
        <button style={styles.noticesButton}>📢 Notices</button>

        {/* Holiday Calendar Button */}
        <button style={styles.holidayButton} onClick={openPopup}>
          📅 Holiday Calendar
        </button>
      </div>

      {/* Notices Section */}
      <div style={styles.contentBox}>
        <p>📝 Nostalgia 2025 Coming Soon</p>
        <hr />
        <p>🚀 Hackathon 2025</p>
      </div>

      {/* Popup Modal for Holiday Calendar */}
      <div id="popup" style={styles.modal}>
        <div style={styles.modalContent}>
          <span style={styles.close} onClick={closePopup}>
            &times;
          </span>
          <img
            src="/images/holiday-calendar.jpg"
            alt="Holiday Calendar"
            style={{ width: "100%", borderRadius: "10px" }}
          />
        </div>
      </div>
    </div>
  );
};

// Inline Styles
const styles = {
  mainContainer: {
    textAlign: "center",
    marginTop: "20px",
  },
  box: {
    display: "flex",
    justifyContent: "center",
    gap: "15px", // Reduced gap for better alignment
    marginBottom: "15px",
  },
  noticesButton: {
    padding: "12px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#0056b3", // Deep Blue
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "180px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  holidayButton: {
    padding: "12px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#047857",
    color: "black",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    width: "180px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
  },
  contentBox: {
    backgroundColor: "#f8f9fa",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
    width: "50%",
    margin: "auto",
    textAlign: "left",
  },
  modal: {
    display: "none", // Initially hidden
    position: "fixed",
    zIndex: 1,
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0,0,0,0.5)",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContent: {
    backgroundColor: "#fff",
    padding: "20px",
    width: "50%",
    borderRadius: "10px",
    textAlign: "center",
    position: "relative",
  },
  close: {
    color: "red",
    position: "absolute",
    top: "10px",
    right: "15px",
    fontSize: "28px",
    fontWeight: "bold",
    cursor: "pointer",
  },
};

export default Important;
