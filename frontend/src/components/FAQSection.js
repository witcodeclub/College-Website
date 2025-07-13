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
    <div className="w-full bg-green-50 p-5 md:p-8 rounded-xl shadow-lg text-center max-w-screen-md mx-auto">
      <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-[#024E6F] mb-5 font-[Poppins]">
        Frequently Asked Questions
      </h2>

      <div className="flex flex-col gap-4">
        {faqs.map((faq, idx) => (
          <div
            key={idx}
            className="bg-white rounded-lg border border-green-200 shadow-md overflow-hidden"
          >
            <button
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
              className="w-full flex justify-between items-center text-left px-5 py-4 font-semibold text-base sm:text-lg text-gray-800 hover:bg-green-50 transition duration-200 font-[Poppins]"
            >
              <span className="flex items-center gap-3">
                <span className="text-green-700 text-xl">❓</span>
                {faq.question}
              </span>
              <span
                className={`transform transition-transform duration-300 text-green-700 text-lg ${
                  openIndex === idx ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {openIndex === idx && (
              <div className="px-5 pb-4 pl-14 text-sm sm:text-base bg-gray-50 text-gray-700 border-t border-green-200 font-[Poppins]">
                {faq.answer}
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="text-sm sm:text-base mt-6 font-semibold text-gray-800 font-[Poppins]">
        📞 Need more help? Contact our support team or use our chatbot for instant assistance.
      </p>
    </div>
  );
}

export default FAQSection;
