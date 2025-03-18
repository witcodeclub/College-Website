import React, { useState } from "react";
import { FaRobot } from "react-icons/fa";

const ChatbotComponent = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            {/* Floating Chatbot Icon */}
            <button
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    backgroundColor: "#FFC107", // Yellow
                    color: "black",
                    border: "none",
                    borderRadius: "50%",
                    width: "55px",
                    height: "55px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                }}
                onClick={() => setIsOpen(!isOpen)}
            >
                <FaRobot size={30} />
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div
                    style={{
                        position: "fixed",
                        bottom: "80px",
                        right: "20px",
                        width: "320px",
                        background: "white",
                        borderRadius: "10px",
                        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
                        overflow: "hidden",
                    }}
                >
                    {/* Header */}
                    <div
                        style={{
                            background: "#FFC107",
                            color: "black",
                            padding: "10px",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                        }}
                    >
                        <h3 style={{ margin: "0", fontSize: "18px" }}>Let's Chat!</h3>
                        <button
                            style={{
                                background: "transparent",
                                border: "none",
                                color: "black",
                                fontSize: "18px",
                                cursor: "pointer",
                            }}
                            onClick={() => setIsOpen(false)}
                        >
                            ✖
                        </button>
                    </div>

                    {/* Chat Body */}
                    <div
                        style={{
                            padding: "15px",
                            height: "250px",
                            overflowY: "auto",
                            display: "flex",
                            flexDirection: "column",
                            gap: "10px",
                        }}
                    >
                        <p style={{ margin: 0, fontSize: "14px", color: "#333" }}>
                            Hi, Welcome to our Chatbot!
                        </p>
                        <p style={{ margin: 0, fontSize: "14px", color: "#333" }}>
                            Please select from one of the options below:
                        </p>
                        <div style={{ display: "flex", gap: "10px" }}>
                            <button
                                style={{
                                    background: "#007bff",
                                    color: "white",
                                    border: "none",
                                    padding: "8px 12px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Admissions
                            </button>
                            <button
                                style={{
                                    background: "#007bff",
                                    color: "white",
                                    border: "none",
                                    padding: "8px 12px",
                                    borderRadius: "5px",
                                    cursor: "pointer",
                                }}
                            >
                                Student Support
                            </button>
                        </div>
                    </div>

                    {/* Input Field */}
                    <div
                        style={{
                            display: "flex",
                            padding: "10px",
                            borderTop: "1px solid #ddd",
                        }}
                    >
                        <input
                            type="text"
                            placeholder="Type your message..."
                            style={{
                                flex: "1",
                                padding: "8px",
                                border: "1px solid #ddd",
                                borderRadius: "5px",
                            }}
                        />
                        <button
                            style={{
                                background: "#007bff",
                                color: "white",
                                border: "none",
                                padding: "8px 12px",
                                marginLeft: "5px",
                                cursor: "pointer",
                            }}
                        >
                            Send
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ChatbotComponent;
