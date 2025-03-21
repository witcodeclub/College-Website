import React, { useState } from "react";
import Approval from "./Approval";

const Important = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const openPopup = () => {
        setIsPopupOpen(true);
    };

    const closePopup = () => {
        setIsPopupOpen(false);
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
                <p>📜 Nostalgia 2025 Coming Soon</p>
                <hr />
                <p>🚀 Hackathon 2025</p>
            </div>

            {/* Popup Modal for Holiday Calendar */}
            {isPopupOpen && (
                <div style={styles.modal}>
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
            )}
        </div>
    );
};

const styles = {
    mainContainer: {
        textAlign: "center",
        marginTop: "20px",
    },
    box: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
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
    },
    close: {
        position: "absolute",
        top: "10px",
        right: "15px",
        fontSize: "24px",
        cursor: "pointer",
    },
};

export default Important;
