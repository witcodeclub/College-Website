import React from "react";

export default function ChatWindow({ closeChat }) {
  return (
    
    <div style={{ height: "100%", display: "flex", flexDirection: "column" }}>
      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #e5e5e5",
        paddingBottom: "8px",
        marginBottom: "8px"
      }}>
        
        <strong style={{ fontSize: "18px" }}>College Chatbot</strong>
        <button 
          onClick={closeChat} 
          style={{ 
            background: "none", 
            border: "none", 
            fontSize: "18px", 
            cursor: "pointer" 
          }}
        >
          ✖
        </button>
      </div>

      {/* Chat Content Area */}
      <div style={{
        flex: 1,
        overflowY: "auto",
        backgroundColor: "#f9f9f9",
        padding: "8px",
        borderRadius: "8px"
      }}>
        <p><strong>Bot:</strong> Hello! How can I assist you today?</p>
        {/* You can add more hardcoded or dynamic messages here */}
      </div>

      {/* Input Area */}
      <div style={{
        marginTop: "10px",
        display: "flex",
        gap: "8px"
      }}>
        <input 
          type="text" 
          placeholder="Type your message..." 
          style={{
            flex: 1,
            padding: "8px",
            borderRadius: "6px",
            border: "1px solid #ccc",
            fontSize: "14px"
          }}
        />
        <button 
          style={{
            padding: "8px 12px",
            backgroundColor: "#2563EB",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer"
          }}
        >
          Send
        </button>
      </div>
    </div>
  );
}
