import React, { useState, useEffect } from "react";

const Counter = ({ target }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let interval = setInterval(() => {
      setCount((prev) => {
        if (prev >= target) {
          clearInterval(interval);
          return target;
        }
        return prev + Math.ceil(target / 100);
      });
    }, 60);

    return () => clearInterval(interval);
  }, [target]);

  return <span>{count}</span>;
};

const Campus = () => {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "50px",
        padding: "30px",
        border: "2px solid gray",
        maxWidth: "1000px",
        margin: "auto",
        borderRadius: "10px",
      }}
    >
      {/* About WIT Heading in Green */}
      <h1 style={{ fontSize: "42px", fontWeight: "bold", color: "green" }}>
        About WIT
      </h1>

      <p style={{ fontSize: "18px", color: "#444", margin: "20px 0" }}>
        In Engineering amongst all Government and Private Universities in India
      </p>

      {/* Numbers Section */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "40px",
          marginTop: "30px",
        }}
      >
        <div style={{ fontSize: "36px", fontWeight: "bold", color: "green" }}>
          <Counter target={20} />
          <span style={{ color: "maroon" }}> +</span>
          <div style={{ fontSize: "16px", color: "#333", marginTop: "5px" }}>
            Years Of Experience
          </div>
        </div>

        <div style={{ fontSize: "36px", fontWeight: "bold", color: "green" }}>
          <Counter target={1000} />
          <span style={{ color: "maroon" }}> +</span>
          <div style={{ fontSize: "16px", color: "#333", marginTop: "5px" }}>
            Students
          </div>
        </div>

        <div style={{ fontSize: "36px", fontWeight: "bold", color: "green" }}>
          <Counter target={18} />
          <span style={{ color: "maroon" }}> +</span>
          <div style={{ fontSize: "16px", color: "#333", marginTop: "5px" }}>
            Faculties
          </div>
        </div>
      </div>
    </div>
  );
};

export default Campus;
