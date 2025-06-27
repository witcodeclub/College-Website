import React, { useState } from "react";

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Pop-up Window */}
      {isOpen && (
        <div
          style={{
            position: "fixed",
            bottom: "80px",
            right: "20px",
            width: "300px",
            height: "250px",
            backgroundColor: "#fff",
            border: "2px solid #333",
            borderRadius: "10px",
            padding: "16px",
            zIndex: 999999,
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <strong>College Chatbot</strong>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: "none",
                border: "none",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              ❌
            </button>
          </div>
          <p style={{ marginTop: "10px" }}>Hello! How can I help you?</p>
        </div>
      )}

      {/* Button */}
      <div
        style={{
          position: "fixed",
          bottom: "20px",
          right: "20px",
          zIndex: 999999,
        }}
      >
        <button
          onClick={() => setIsOpen(!isOpen)}
          style={{
            backgroundColor: "green",
            color: "white",
            border: "none",
            padding: "14px",
            borderRadius: "50%",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          💬
        </button>
      </div>
    </>
  );
}
