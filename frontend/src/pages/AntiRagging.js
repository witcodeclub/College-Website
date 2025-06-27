import React from "react";

const AntiRagging = () => {
  return (
    <div style={{
      padding: "50px",
      backgroundColor: "#f5f5f5",
      minHeight: "100vh",
      color: "#333"
    }}>
      <h1 style={{
        textAlign: "center ",
        color: "#006400",
        fontSize: "50px",
        marginBottom: "30px",
        borderBottom: "2px solid #006400",
        display: "inline-block",
        paddingBottom: "8px"
      }}>
        Anti-Ragging Policy
      </h1>

      <div style={{ maxWidth: "900px", margin: "auto", fontSize: "18px", lineHeight: "1.7" }}>
        <p>
          At WIT Darbhanga, we maintain a strict zero-tolerance policy against ragging.
          We ensure a safe and supportive environment for all students, especially freshers.
        </p>
        <p>
          Ragging in any form—physical, verbal, or psychological—is strictly prohibited and punishable by law.
        </p>
        <p>
          <strong>Our preventive measures include:</strong>
          <ul style={{ marginTop: "10px" }}>
            <li>✔️ Dedicated anti-ragging committee & helpline</li>
            <li>✔️ Awareness programs and counseling</li>
            <li>✔️ Anonymous complaint submission system</li>
            <li>✔️ Monitoring through student volunteers and CCTV</li>
          </ul>
        </p>
        <div style={{
          marginTop: "30px",
          textAlign: "center",
        }}>
          <img
            src="/images/anti-ragging.jpg"
            alt="Anti Ragging Awareness"
            style={{ maxWidth: "100%", borderRadius: "12px", boxShadow: "0 4px 16px rgba(0,0,0,0.1)" }}
          />
        </div>
      </div>
    </div>
  );
};

export default AntiRagging;
