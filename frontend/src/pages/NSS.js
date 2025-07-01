import React, { useEffect, useState } from "react";

function NSS() {
  const activities = [
    "🌱 Plantation programme in and around the campus",
    "🩸 Blood donation camp",
    "👧 Save girl child campaign",
    "🗳️ National Voters Day rally",
    "🎗️ International AIDS Day rally",
    "👁️ Eye camp and health check-up camp",
    "🏡 Adopted a village",
    "🥗 Health programme and 'Poshan Mah'",
    "🌍 Environmental programme - 7 Days Special Camp",
    "🧭 Orientation programme",
    "🧹 Swachh Bharat Abhiyan",
  ];

  const [visible, setVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div
      style={{
        fontFamily: "Segoe UI, sans-serif",
        padding: "20px",
        background: "linear-gradient(to bottom right, #f0f4ff, #eaf3ff)",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(40px)",
        transition: "all 0.8s ease",
      }}
    >
      {/* Header */}
      <div
        style={{
          textAlign: "center",
          padding: "25px",
          borderRadius: "12px",
          background: "#003366",
          color: "#fff",
          boxShadow: "0 4px 20px rgba(0,0,0,0.2)",
        }}
      >
        <h1 style={{ margin: 0 }}>National Service Scheme (NSS)</h1>
        <p style={{ fontSize: "18px", marginTop: "8px" }}>
          Serving Society, Building the Nation
        </p>
      </div>

   {/* Intro */}
<div style={{ padding: "25px", lineHeight: "1.8", fontSize: "16px" }}>
  <p style={{ textAlign: "justify" }}>
    <strong>National Service Scheme (NSS)</strong> is a Central Sector Scheme of the Government of India, under the Ministry of Youth Affairs & Sports. It was launched in 1969 to promote a spirit of voluntary community service among student youth. The scheme aims to develop the <strong>personality and character</strong> of students by involving them in activities that contribute positively to society.
  </p>

  <p style={{ textAlign: "justify" }}>
    At <strong>Dr. APJ Abdul Kalam Women’s Institute of Technology</strong>, the NSS Unit actively engages students in community-oriented projects that build a sense of responsibility, teamwork, and compassion. Guided by the motto <strong>"Not Me, But You"</strong>, students participate in health awareness drives, environmental initiatives, rural outreach, disaster relief, and civic campaigns, contributing meaningfully while gaining leadership and real-world experience.
  </p>
</div>


      {/* Activities */}
      <h2 style={{ textAlign: "center", color: "#003366" }}>Activities We Conduct</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "20px",
          padding: "20px",
        }}
      >
        {activities.map((act, index) => (
          <div
            key={index}
            style={{
              background: "#fff",
              borderLeft: "5px solid #003366",
              padding: "15px",
              borderRadius: "10px",
              boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)",
              opacity: visible ? 1 : 0,
              transform: visible ? "translateX(0)" : "translateX(-30px)",
              transition: `all 0.5s ease ${index * 0.1}s`,
            }}
          >
            {act}
          </div>
        ))}
      </div>

      {/* Gallery */}
      <h2 style={{ textAlign: "center", color: "#003366", marginTop: "30px" }}>
        Gallery
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
          gap: "15px",
          padding: "20px",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((num, index) => (
          <div
            key={num}
            onClick={() => setModalImage(`/images/nss${num}.jpg`)}
            style={{
              cursor: "pointer",
              borderRadius: "10px",
              overflow: "hidden",
              backgroundColor: "#fff",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              transform: visible ? "translateY(0)" : "translateY(30px)",
              transition: `all 0.4s ease ${index * 0.15 + 0.4}s`,
            }}
          >
            <img
              src={`/images/nss${num}.jpg`}
              alt={`NSS ${num}`}
              style={{
                width: "100%",
                height: "160px",
                objectFit: "cover",
                transition: "transform 0.3s ease",
              }}
              onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
              onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            backgroundColor: "rgba(0,0,0,0.8)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            zIndex: 999,
            cursor: "zoom-out",
          }}
        >
          <img
            src={modalImage}
            alt="Preview"
            style={{
              maxWidth: "90%",
              maxHeight: "90%",
              borderRadius: "10px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.5)",
            }}
          />
        </div>
      )}

      {/* Contact */}
      <h2 style={{ textAlign: "center", color: "#003366", marginTop: "30px" }}>
        Contact Us
      </h2>
      <div
        style={{
          backgroundColor: "#ffffff",
          maxWidth: "600px",
          margin: "0 auto",
          borderRadius: "12px",
          padding: "20px",
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
          fontSize: "16px",
          lineHeight: "1.8",
          textAlign: "center",
        }}
      >
        <p>
          📍 NSS Office, Dr. APJ Abdul Kalam Women's Institute Of Technology
        </p>

        {/* Social Media Icons */}
        <div style={{ marginTop: "20px", display: "flex", justifyContent: "center", gap: "20px" }}>
          <a
            href="https://www.facebook.com/people/Nss-Wing-Wit/100085855867819/?rdid=rM5sCl0SOlj2spGs&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ZCsgLqdTt%2F"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#3b5998",
              fontWeight: "bold",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            <span style={{ fontSize: "22px" }}>🔵</span> Facebook
          </a>

          <a
            href="https://www.instagram.com/nsswing.wit/?igsh=ZGt4enRuZGpsNTRt#"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              color: "#C13584",
              fontWeight: "bold",
              fontSize: "16px",
              textDecoration: "none",
            }}
          >
            <span style={{ fontSize: "22px" }}>📷</span> Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default NSS;
