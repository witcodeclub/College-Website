import React, { useState, useRef } from "react";
import {Link} from "react-router-dom"


const approvals = [
  { name: "AICTE", image: "/images/aicte.jpeg", link : "/approval/aicte" },
  { name: "DST, Bihar", image: "/images/dst.png", link: "/approval/dst" },
  { name: "Higher Education", image: "/images/higher.png", link: "/approval/highereducation" },
  { name: "NAAC", image: "/images/naac.png", link: "/approval/naac" },
];

const CombinedComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const calendarButtonRef = useRef(null);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div style={{ display: "flex", justifyContent: "center", gap: "10px", padding: "20px" }}>
      <div style={styles.sectionContainer}>
        <h2 style={styles.title}>Accreditations & Recognitions</h2>
        <div style={styles.approvalsContainer}>
          {approvals.map((approval, index) => (
             <Link to={approval.link} key={index} style={styles.approvalLink}>
             <div style={styles.approvalItem}>
               <img src={approval.image} alt={approval.name} style={styles.approvalImage} />
               <p style={styles.approvalText}>Accredited by {approval.name}</p>
             </div>
           </Link>
          ))}
        </div>
      </div>

      <div style={styles.sectionContainer}>
        <div style={{ textAlign: "center", marginBottom: "15px" }}>
          <button style={styles.noticesButton}>📢 Notices</button>
          <button style={styles.calendarButton} ref={calendarButtonRef} onClick={openPopup}>
            📅 Calendar
          </button>
        </div>
        <h4 style={styles.noticeText}> * Nostalgia 2025 Coming Soon</h4>
        <hr style={styles.hrStyle} />
        <h4 style={styles.noticeText}> * Hackathon 2025</h4>
        <hr style={styles.hrStyle} />
        <h4 style={styles.noticeText}> * Inter-College Kho-Kho competition in WIT campus</h4>
        <hr style={styles.hrStyle} />
        

        {isPopupOpen && calendarButtonRef.current && (
          <div style={styles.popupBox(calendarButtonRef.current)}>
            <span style={styles.closeButton} onClick={closePopup}>❌</span>
            <h3 style={{ textAlign: "center" }}>Select a Calendar</h3>
            <div style={styles.calendarContainer}>
              {[
                { name: "Holiday Calendar", image: "/images/holiday.jpg" },
                { name: "Academic Calendar", image: "/images/academic.jpg" },
                { name: "Event Calendar", image: "/images/event.jpg" },
              ].map((calendar, index) => (
                <div key={index} style={styles.calendarItem}>
                  <img 
                  src={calendar.image} alt={calendar.name} style={styles.calendarImage} />
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
  sectionContainer: {
    width: "45%",
    height: "400px",
    backgroundColor: "#F5F5F5",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "4px 6px 15px rgba(5, 67, 44, 0.2)",
    textAlign: "center",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#2E3A59",
    
    marginBottom: "20px",
    fontFamily: "Poppins, sans-serif",
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
    padding: "10px",
  },
  approvalImage: {
    width: "70px",
    height: "70px",
    borderRadius: "50%",
    boxShadow: "0px 5px 12px rgba(0, 0, 0, 0.2)",
  },
  approvalText: {
    fontSize: "18px",
    color: "#2E3A59",
    fontWeight: "500",
    fontFamily: "Poppins, sans-serif",
    display: "inline-block",
  },
  noticesButton: {
    padding: "12px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#2E3A59",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
    width: "180px",
    
  },
  calendarButton: {
    padding: "12px 20px",
    fontSize: "18px",
    fontWeight: "bold",
    backgroundColor: "#FF8C00",
    color: "white",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "0.3s",
    width: "180px",
  },
  noticeText: {
    fontSize: "18px",
    color: "#2E3A59",
    textAlign: "left",
  },
  hrStyle: {
    margin: "12px 0",
    border: "1px solid #024E6F",
  },
  popupBox: (ref) => ({
    position: "absolute",
    top: ref.offsetTop + 50,
    left: ref.offsetLeft,
    background: "white",
    padding: "20px",
    borderRadius: "10px",
    boxShadow: "0px 5px 12px rgba(0, 0, 0, 0.15)",
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
    borderRadius: "8px",
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
  },
  calendarText: {
    marginTop: "8px",
    fontSize: "14px",
    fontWeight: "bold",
    textAlign: "center",
    fontFamily: "Poppins, sans-serif",
  },
};

export default CombinedComponent;
