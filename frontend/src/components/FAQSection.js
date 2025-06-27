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
    <div style={styles.sectionContainer}>
      <h2 style={styles.title}>Frequently Asked Questions</h2>
      
      <div style={styles.faqsContainer}>
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            style={styles.faqItem}
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              style={styles.faqButton}
            >
              <span style={styles.questionText}>
                <span style={styles.questionIcon}>❓</span>
                {faq.question}
              </span>
              <span
                style={{
                  ...styles.arrowIcon,
                  transform: openIndex === idx ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                ▼
              </span>
            </button>
            {openIndex === idx && (
              <div style={styles.answerContainer}>
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>
      
      <p style={styles.footerText}>
        📞 Need more help? Contact our support team or use our chatbot for instant assistance.
      </p>
    </div>
  );
}

const styles = {
  sectionContainer: {
    width: "100%",
    backgroundColor: "#E6F7E6",
    padding: "20px",
    borderRadius: "15px",
    boxShadow: "4px 6px 15px rgba(5, 67, 44, 0.2)",
    textAlign: "center",
    margin: "20px auto",
    maxWidth: "900px",
  },
  title: {
    fontSize: "30px",
    fontWeight: "bold",
    color: "#024E6F",
    marginBottom: "20px",
    fontFamily: "Poppins, sans-serif",
  },
  faqsContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
  },
  faqItem: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    overflow: "hidden",
    boxShadow: "0px 5px 12px rgba(0, 0, 0, 0.1)",
    border: "1px solid #c8e6c9",
  },
  faqButton: {
    width: "100%",
    background: "none",
    border: "none",
    outline: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "15px 20px",
    cursor: "pointer",
    fontWeight: "600",
    color: "#2E3A59",
    fontSize: "18px",
    textAlign: "left",
    fontFamily: "Poppins, sans-serif",
  },
  questionText: {
    display: "flex",
    alignItems: "center",
    flex: "1",
  },
  questionIcon: {
    marginRight: "15px",
    color: "#024E6F",
    fontSize: "20px",
  },
  arrowIcon: {
    fontSize: "18px",
    color: "#024E6F",
    transition: "transform 0.3s ease",
  },
  answerContainer: {
    color: "#2E3A59",
    lineHeight: "1.6",
    padding: "0 20px 15px 55px",
    fontSize: "16px",
    backgroundColor: "#f8f9fa",
    borderTop: "1px solid #c8e6c9",
    fontFamily: "Poppins, sans-serif",
  },
  footerText: {
    fontSize: "18px",
    color: "#2E3A59",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "20px",
    fontFamily: "Poppins, sans-serif",
  },
};

export default FAQSection; 