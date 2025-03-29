import React from "react";

function NSS() {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", padding: "20px", backgroundColor: "#f8f9fa" }}>
      {/* Header Section */}
      <div style={{ textAlign: "center", padding: "20px", backgroundColor: "#004080", color: "white" }}>
        <h1 style={{ margin: "0" }}>National Service Scheme (NSS)</h1>
        <p style={{ fontSize: "18px" }}>Serving Society, Building the Nation</p>
      </div>

      {/* Introduction Section */}
      <div style={{ padding: "20px" }}>
        <p style={{ textAlign: "justify", lineHeight: "1.8", fontSize: "16px" }}>
          The **National Service Scheme (NSS)** at **Your College Name** is a platform for students to engage in 
          social service activities and contribute to the betterment of society. The motto of NSS, **"Not Me, But You,"** 
          reflects its commitment to selfless service. Through NSS, students develop leadership, teamwork, and a sense 
          of responsibility towards the community.
        </p>

        <p style={{ textAlign: "justify", lineHeight: "1.8", fontSize: "16px" }}>
          NSS volunteers actively participate in various outreach programs, including environmental conservation, 
          health and hygiene awareness, community service, and disaster relief efforts.
        </p>
      </div>

      {/* Activities Section */}
      <h2 style={{ textAlign: "center", color: "#004080", marginBottom: "10px" }}>Activities We Conduct</h2>
      <ul style={{ fontSize: "16px", lineHeight: "1.8", listStyleType: "none", paddingLeft: "20px" }}>
        <li>🌳 <strong>Tree Plantation Drives</strong> – Promoting a greener future.</li>
        <li>💉 <strong>Blood Donation Camps</strong> – Saving lives with voluntary blood donations.</li>
        <li>📢 <strong>Awareness Campaigns</strong> – Educating people on social and environmental issues.</li>
        <li>🚮 <strong>Cleanliness Drives</strong> – Supporting the **Swachh Bharat Abhiyan**.</li>
        <li>📖 <strong>Educational Support</strong> – Teaching underprivileged children.</li>
        <li>👴 <strong>Visits to Orphanages & Old Age Homes</strong> – Spreading love and care.</li>
        <li>🚑 <strong>Health Check-Up Camps</strong> – Organizing free medical check-ups.</li>
      </ul>

      {/* NSS Gallery */}
      <h2 style={{ textAlign: "center", color: "#004080", marginTop: "20px" }}>Gallery</h2>
      <div style={{ display: "flex", justifyContent: "center", gap: "15px", flexWrap: "wrap", padding: "10px" }}>
        <img src="/images/nss1.jpg" alt="NSS Event" style={{ width: "220px", height: "150px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }} />
        <img src="/images/nss2.jpg" alt="Tree Plantation" style={{ width: "220px", height: "150px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }} />
        <img src="/images/nss3.jpg" alt="Blood Donation" style={{ width: "220px", height: "150px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }} />
        <img src="/images/nss4.jpg" alt="Cleanliness Drive" style={{ width: "220px", height: "150px", borderRadius: "10px", boxShadow: "0 4px 8px rgba(0,0,0,0.2)" }} />
      </div>

      {/* Contact Section */}
      <h2 style={{ textAlign: "center", color: "#004080", marginTop: "20px" }}>Contact Us</h2>
      <div style={{ textAlign: "center", fontSize: "16px", lineHeight: "1.8" }}>
        <p>📞 <strong>NSS Coordinator:</strong> <span style={{ color: "#0066cc" }}>Dr. XYZ</span></p>
        <p>📧 Email: <a href="mailto:nss@yourcollege.edu" style={{ color: "#004080", textDecoration: "none" }}>nss@yourcollege.edu</a></p>
        <p>📍 Location: NSS Office, Your College Name</p>
      </div>

      {/* Footer
      <div style={{ textAlign: "center", padding: "10px", marginTop: "20px", backgroundColor: "#004080", color: "white" }}>
        <p>© {new Date().getFullYear()} NSS - Your College Name. All Rights Reserved.</p>
      </div> */}
    </div>
  );
}

export default NSS;
