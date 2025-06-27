import React from "react";

export default function MessageBubble({ from, text }) {
  const isBot = from === "bot";
  return (
    <div
      style={{
        display: "flex",
        justifyContent: isBot ? "flex-start" : "flex-end",
        marginBottom: "5px",
      }}
    >
      <div
        style={{
          backgroundColor: isBot ? "#eee" : "#2563EB",
          color: isBot ? "#000" : "#fff",
          padding: "8px 12px",
          borderRadius: "12px",
          maxWidth: "80%",
          fontSize: "14px",
        }}
      >
        {text}
      </div>
    </div>
  );
}
