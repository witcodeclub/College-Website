import React from "react";

const Hostel = () => {
  return (
    <div
      style={{
        background: "#f8f8f8",
        padding: "50px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      {/* Main Card */}
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          maxWidth: "900px",
          width: "100%",
          textAlign: "center",
        }}
      >
        {/* Heading */}
        <h2
          style={{
            color: "green",
            fontSize: "32px",
            fontWeight: "bold",
            marginBottom: "20px",
          }}
        >
          Hostel
        </h2>

        {/* Description */}
        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#333",
            textAlign: "justify",
          }}
        >
          APJAKWIT has three safe and secure in-campus hostels with an
          approximate capacity of 200. Two hostels are located in the institute
          campus, while one is in the university campus, at a walking distance
          of approximately 300 meters.
        </p>

        <p
          style={{
            fontSize: "16px",
            lineHeight: "1.6",
            color: "#333",
            textAlign: "justify",
            marginBottom: "20px",
          }}
        >
          All hostels provide good lodging and boarding facilities, with
          round-the-clock power backup, ensuring a comfortable and secure living
          environment for students.
        </p>

        {/* Image Section */}
        <div
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginTop: "10px",
          }}
        >
          {/* Image 1 */}
          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
              maxWidth: "400px",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/hostel1.jpg"}
              alt="Hostel 1"
              style={{ width: "100%", height: "auto" }}
            />
          </div>

          {/* Image 2 */}
          <div
            style={{
              borderRadius: "10px",
              overflow: "hidden",
              boxShadow: "0px 3px 6px rgba(0, 0, 0, 0.2)",
              maxWidth: "400px",
            }}
          >
            <img
              src={process.env.PUBLIC_URL + "/images/hostel2.jpg"}
              alt="Hostel 2"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hostel;
