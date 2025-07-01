import React from "react";

const Other = () => {
  const facilities = [
    {
      title: "Campus Wi-Fi",
      description:
        "The campus is fully equipped with high-speed Wi-Fi access, available in academic blocks, library, and hostel areas to support digital learning and research.",
    },
    {
      title: "Water Coolers",
      description:
        "Cold and clean drinking water is available in the campus through well-maintained water coolers for students and staff.",
    },
    {
      title: "Smart Classrooms",
      description:
        "Digital board facility is available in the campus classroom and computer lab to enable e-learning and smart class learning.",
      image: "/images/smart-class.jpg", // You can add this image later
    },
  ];

  return (
    <div style={{ padding: "2rem", backgroundColor: "#f9f9f9", minHeight: "100vh" }}>
      <h1 style={{ textAlign: "center", color: "#2c3e50", marginBottom: "2rem" }}>
        Other Campus Facilities
      </h1>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "1.5rem",
        }}
      >
        {facilities.map((facility, index) => (
          <div
            key={index}
            style={{
              width: "300px",
              backgroundColor: "#fff",
              padding: "1.5rem",
              borderRadius: "12px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              textAlign: "left",
            }}
          >
            <h2 style={{ color: "#34495e", fontSize: "20px", marginBottom: "0.5rem" }}>
              {facility.title}
            </h2>
            {facility.image && (
              <img
                src={facility.image}
                alt={facility.title}
                style={{
                  width: "100%",
                  height: "160px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "0.8rem",
                }}
              />
            )}
            <p style={{ color: "#555", fontSize: "15px", lineHeight: "1.6" }}>
              {facility.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Other;
