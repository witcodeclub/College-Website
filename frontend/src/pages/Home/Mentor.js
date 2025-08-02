import React, { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

const mentors = [
  { title: "VICE-CHANCELLOR, LNMU", name: "Prof. Sanjay Kumar Chaudhary", image: "/images/vc.jpeg" },
  { title: "DIRECTOR, WIT", name: "Dr. Ajay Nath Jha", image: "/images/director.jpeg" },
  { title: "REGISTRAR, LNMU", name: "Dr. Divya Rani Hansda", image: "/images/registrar.jpeg" },
  { title: "DEPUTY REGISTRAR, WIT", name: "Priyanka Rai", image: "/images/priyanka mam.jpg" },
  { title: "MENTOR, WIT", name: "Prof. Nirmal Kumar", image: "/images/nirmal.jpeg" }
];

const Mentor = () => {
  const { t } = useTranslation();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in");
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="mentor-section w-full py-10 px-4 md:px-8 xl:px-16 opacity-0 transform translate-x-10 transition-all duration-1000 ease-out"
    >
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl font-bold text-center text-[#2c3e50] mb-8">
          {t("mentors_heading")}
        </h2>

        {/* Cards Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {mentors.map((mentor, index) => (
            <div
              key={index}
              className="relative w-full max-w-[160px] sm:max-w-[180px] md:max-w-[200px] mx-auto rounded-xl overflow-hidden shadow-md group transition-transform hover:scale-105 bg-white"
            >
              <img
                src={mentor.image}
                alt={mentor.title}
                className="w-full h-[200px] sm:h-[220px] md:h-[240px] object-cover"
              />
              {/* Hover Overlay */}
              <div className="absolute bottom-0 w-full bg-black bg-opacity-60 text-white text-center text-xs sm:text-sm font-medium px-2 py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div>{t(`mentor_titles.${index}`)}</div>
                <div className="text-[11px] sm:text-xs">{mentor.name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Animations */}
      <style>
        {`
          /* ✅ Slide-in Effect */
          .animate-slide-in {
            opacity: 1 !important;
            transform: translateX(0) !important;
          }

          /* ✅ Animated Subtle Gradient Background */
          .mentor-section {
            background: linear-gradient(120deg, #f3f4f6, #edfdf3, #f3f4f6);
            background-size: 400% 400%;
            animation: gradientMove 10s ease infinite;
          }

          @keyframes gradientMove {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }
        `}
      </style>
    </section>
  );
};

export default Mentor;









