import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";

const approvals = [
  { name: "AICTE", image: "/images/aicte.jpeg", link: "/approval/aicte" },
  { name: "DST, Bihar", image: "/images/dst.png", link: "/approval/dst" },
  { name: "Higher Education", image: "/images/higher.png", link: "/approval/highereducation" },
  { name: "NAAC", image: "/images/naac.png", link: "/approval/naac" },
];

const CombinedComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const calendarButtonRef = useRef(null);
  const [popupPosition, setPopupPosition] = useState({ top: 0, left: 0 });

  const openPopup = () => {
    const rect = calendarButtonRef.current?.getBoundingClientRect();
    setPopupPosition({
      top: rect?.top + window.scrollY + 50,
      left: rect?.left + window.scrollX,
    });
    setIsPopupOpen(true);
  };

  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="w-full px-4 md:px-8 xl:px-16 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Left Section - Accreditations */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-blue-900 mb-6 text-center font-poppins">
            Accreditations & Recognitions
          </h2>
          <div className="space-y-4">
            {approvals.map((approval, index) => (
              <Link
                to={approval.link}
                key={index}
                className="flex items-center gap-4 p-2 hover:scale-105 transition-transform"
              >
                <img
                  src={approval.image}
                  alt={approval.name}
                  className="w-12 h-12 rounded-full shadow-md"
                />
                <p className="text-lg text-blue-900 font-medium font-poppins">
                  Accredited by {approval.name}
                </p>
              </Link>
            ))}
          </div>
        </div>

        {/* Right Section - Notices & Calendar */}
        <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <button className="bg-blue-900 text-white font-bold py-2 px-6 rounded-lg">
              📢 Notices
            </button>
            <button
              className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg"
              onClick={openPopup}
              ref={calendarButtonRef}
            >
              📅 Calendar
            </button>
          </div>

          <div className="space-y-4 text-left">
            <p className="text-blue-900 text-base">* Nostalgia 2025 Coming Soon</p>
            <hr className="border border-cyan-900" />
            <p className="text-blue-900 text-base">* Hackathon 2025</p>
            <hr className="border border-cyan-900" />
            <p className="text-blue-900 text-base">* Inter-College Kho-Kho competition in WIT campus</p>
            <hr className="border border-cyan-900" />
          </div>
        </div>
      </div>

      {/* Calendar Popup */}
      {isPopupOpen && (
        <div
          className="fixed bg-white p-6 rounded-lg shadow-xl z-50 w-[90%] md:w-[400px]"
          style={{ top: popupPosition.top, left: popupPosition.left }}
        >
          <span
            className="absolute top-2 right-3 text-xl cursor-pointer"
            onClick={closePopup}
          >
            ❌
          </span>
          <h3 className="text-center font-semibold text-lg mb-4">Select a Calendar</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              { name: "Holiday Calendar", image: "/images/holiday.jpg" },
              { name: "Academic Calendar", image: "/images/academic.jpg" },
              { name: "Event Calendar", image: "/images/event.jpg" },
            ].map((calendar, index) => (
              <div key={index} className="flex flex-col items-center">
                <img
                  src={calendar.image}
                  alt={calendar.name}
                  className="w-28 rounded-lg shadow-md"
                />
                <p className="mt-2 text-sm font-semibold text-center font-poppins">
                  {calendar.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CombinedComponent;