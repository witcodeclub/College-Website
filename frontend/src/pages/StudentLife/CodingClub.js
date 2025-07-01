import React, { useEffect, useState } from "react";


const events = [
  { title: "Coding Quest", desc: "Competitive coding challenge for all skill levels." },
  { title: "Tech Seminar", desc: "Talks on AI, Web Dev, and new tech trends." },
  { title: "Pair Programming Day", desc: "Collaborative coding experience for peers." },
  { title: "Hackathons", desc: "Build innovative projects within limited time." },
  { title: "Tech Fest", desc: "Annual inter-college technology festival participation." },
];

const projects = [
  { title: "College Website", desc: "Official site with AI-integrated chatbot and info." },
  { title: "Quick Bytes", desc: "Mini content platform for coding tips and blogs." },
  { title: "Coding Club Website", desc: "Dedicated site for showcasing club events, members, and blogs." },
];

const members = [
  { name: "Rimjhim Jha", role: "President" },
  { name: "Shruti Riya", role: "Secretary" },
  { name: "Jaya", role: "Core Member" },
  { name: "More members coming soon...", role: "" },
];

const photos = [
  "/images/codin quest image cer.jpg",
  "/images/coding quest pic1.jpg",
  "/images/pairprogram pic1.jpg",
];

const CodingClub = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  return (
    <div style={{ fontFamily: "Segoe UI", background: "#f9fafb", padding: "30px" }}>
      {/* Heading with Logo */}
      <div
        style={{
          ...popStyle(show, 0),
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "20px",
          marginBottom: "20px",
        }}
      >
        <img
          src="\images\codingclub_logo.jpg" 
          alt="Club Logo"
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            objectFit: "cover",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        />
        <h1 style={{ fontSize: "2.8rem", color: "#1e3a8a", margin: 0 }}>WIT CODE</h1>
      </div>

      {/* Club Intro */}
      <div style={popStyle(show, 0.1)}>
        <p style={{ maxWidth: "800px", margin: "auto", fontSize: "1.1rem", textAlign: "center" }}>
          <strong>Coding Club</strong> is a <strong>student-led initiative</strong> started by passionate students of Dr. APJ Abdul Kalam Women’s Institute of Technology. The club was inaugurated by our Hon’ble VC Sir in the presence of our respected Director and faculty members. Our goal is to build real-world skills through coding, projects, and collaboration.
        </p>
      </div>

      {/* Events Section */}
      <Section title="✨ Events We Organize" show={show} delay={0.3}>
        <CardContainer items={events} />
      </Section>

      {/* Projects Section */}
      <Section title="💡 Our Projects" show={show} delay={0.5}>
        <CardContainer items={projects} />
      </Section>

      {/* Chart */}
      <Section title="📊 Event Type Distribution" show={show} delay={0.7}>
        <div style={{ textAlign: "center" }}>
          <img
            src="https://quickchart.io/chart?c={type:'pie',data:{labels:['Coding Quest','Workshops','Projects','Hackathons','Tech Fest'],datasets:[{data:[20,20,20,20,20]}]}}"
            alt="event distribution"
            style={{
              maxWidth: "350px",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              marginTop: "10px",
            }}
          />
        </div>
      </Section>

      {/* Photos */}
      <Section title="📷 Glimpses of Club Activities" show={show} delay={0.9}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {photos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`club-img-${idx}`}
              style={{
                width: "300px",
                height: "180px",
                objectFit: "cover",
                borderRadius: "12px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            />
          ))}
        </div>
      </Section>

      {/* Members Section */}
      <Section title="👩‍💻 Core Members" show={show} delay={1.1}>
        <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
          {members.map((member, idx) => (
            <div
              key={idx}
              style={{
                background: "#ffffff",
                padding: "20px",
                width: "230px",
                textAlign: "center",
                borderRadius: "12px",
                boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
              }}
            >
              <div style={{ fontSize: "1.1rem", fontWeight: "bold", color: "#1e40af" }}>{member.name}</div>
              <div style={{ color: "#475569", fontSize: "0.95rem", marginTop: "6px" }}>{member.role}</div>
            </div>
          ))}
        </div>
      </Section>
    </div>
  );
};

// Section Component with Pop-in
const Section = ({ title, children, show, delay = 0 }) => {
  return (
    <div style={popStyle(show, delay)}>
      <h2 style={{ color: "#0f172a", fontSize: "1.8rem", marginBottom: "15px", textAlign: "center" }}>{title}</h2>
      {children}
    </div>
  );
};

// Card container
const CardContainer = ({ items }) => (
  <div style={{ display: "flex", flexWrap: "wrap", gap: "20px", justifyContent: "center" }}>
    {items.map((item, idx) => (
      <div
        key={idx}
        style={{
          background: "#ffffff",
          padding: "20px",
          width: "280px",
          borderRadius: "12px",
          boxShadow: "0 6px 16px rgba(0,0,0,0.08)",
          transition: "transform 0.3s ease",
        }}
      >
        <h3 style={{ color: "#2563eb", fontSize: "1.2rem" }}>{item.title}</h3>
        <p style={{ fontSize: "0.95rem", color: "#4b5563" }}>{item.desc}</p>
      </div>
    ))}
  </div>
);

// Pop animation
const popStyle = (show, delaySec = 0) => ({
  transform: show ? "scale(1)" : "scale(0.95)",
  opacity: show ? 1 : 0,
  transition: `all 0.6s ease ${delaySec}s`,
  marginTop: "40px",
});

export default CodingClub;
