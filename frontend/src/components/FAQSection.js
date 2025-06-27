import React, { useState } from "react";

const faqs = [
  {
    question: "How do I apply for admission?",
    answer: "You can apply for admission through our official portal. Visit the Admissions page for step-by-step instructions and required documents."
  },
  {
    question: "What courses are offered at Dr. APJAK Women's Institute of Technology?",
    answer: "We offer B.Tech, BCA, MCA, MBA, and various diploma programs. Check the Courses page for a full list."
  },
  {
    question: "How can I submit a complaint or feedback?",
    answer: "You can submit complaints or feedback online using the forms available on our website, or contact the relevant department directly."
  },
  {
    question: "Where can I find the fee structure?",
    answer: "Fee details for all courses are available on the Fee Structure page. Scholarships and payment plans are also listed there."
  },
  {
    question: "How do I contact the college?",
    answer: "You can reach us at info@apjakwit.edu or call 123-456-7890. Visit the Contact page for more details."
  }
];

function FAQSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section
      style={{
        background: "#E6F7E6",
        padding: "40px 20px",
        borderRadius: 15,
        margin: "40px auto 0 auto",
        maxWidth: 900,
        boxShadow: "4px 6px 15px rgba(5, 67, 44, 0.12)",
        border: "1px solid #b2dfdb"
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: 28,
          color: "#024E6F",
          fontWeight: "bold",
          fontSize: "2rem",
          fontFamily: "Poppins, sans-serif"
        }}
      >
        Frequently Asked Questions
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: 18 }}>
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            style={{
              background: "#fff",
              borderRadius: 12,
              marginBottom: 2,
              boxShadow: "0px 4px 10px rgba(2, 78, 111, 0.08)",
              border: "1px solid #c8e6c9",
              transition: "box-shadow 0.2s"
            }}
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                outline: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "18px 24px",
                cursor: "pointer",
                fontWeight: 600,
                color: "#024E6F",
                fontSize: "1.13rem",
                borderRadius: 12,
                fontFamily: "Poppins, sans-serif",
                textAlign: "left"
              }}
              aria-expanded={openIndex === idx}
            >
              <span style={{ display: "flex", alignItems: "center" }}>
                <span style={{ marginRight: 8, color: "#388e3c" }}>❓</span>
                {faq.question}
              </span>
              <span
                style={{
                  fontSize: "1.3rem",
                  color: "#388e3c",
                  transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)",
                  transition: "transform 0.2s"
                }}
              >
                ▼
              </span>
            </button>
            {openIndex === idx && (
              <div
                style={{
                  color: "#2E3A59",
                  lineHeight: 1.7,
                  padding: "0 24px 18px 40px",
                  fontSize: "1.05rem",
                  background: "#f8f9fa",
                  borderRadius: "0 0 12px 12px"
                }}
              >
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export default FAQSection; 