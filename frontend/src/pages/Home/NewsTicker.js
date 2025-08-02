import React, { useEffect, useState } from "react";

const NewsTicker = () => {
  const [headlines, setHeadlines] = useState([]);

  useEffect(() => {
    setHeadlines([
      "🔥 Nostalgia 2025 Coming Soon",
      "💡 Hackathon 2025 – Get Ready!",
      "📰 Admission Notice",
      "📢 Shortlisted Applicants for the Interview for the Post of Assistant Professor in Subject Mathematics",
      "📢 Result of W.I.T 7th Semester (Session:2021–25)",
      "📰 Employment Notice and Application Form for Dr APJ Abdul Kalam Women's Institute of Technology",
    ]);
  }, []);

  return (
    <div className="relative w-full bg-[#0A2647] text-white overflow-hidden h-12 flex items-center">
      {/* ✅ Bold Green Announcement Label */}
      <div className="absolute left-0 top-0 bottom-0 bg-green-600 px-3 sm:px-4 flex items-center font-extrabold text-white shadow-md z-10">
        Announcement
      </div>

      {/* ✅ Scrolling Headlines with Pause on Hover */}
      <div
        className="pl-40 sm:pl-44 md:pl-52 whitespace-nowrap animate-marquee-right text-sm sm:text-base font-medium hover:[animation-play-state:paused] active:[animation-play-state:paused]"
      >
        {headlines.map((news, index) => (
          <span key={index} className="mx-6 sm:mx-10">{news}</span>
        ))}
      </div>

      {/* ✅ Custom Animation */}
      <style>
        {`
          @keyframes marquee-right {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
          }
          .animate-marquee-right {
            display: inline-block;
            animation: marquee-right 20s linear infinite;
          }
        `}
      </style>
    </div>
  );
};

export default NewsTicker;




