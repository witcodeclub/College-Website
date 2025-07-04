import React, { useState, useRef } from "react";
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

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <div className="flex flex-col md:flex-row justify-center items-start gap-6 p-6 relative">
      {/* Left Section - Accreditations */}
      <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg text-center">
        <h2 className="text-2xl font-bold text-blue-900 mb-6 font-poppins">
          Accreditations & Recognitions
        </h2>
        <div className="flex flex-wrap justify-center gap-8">
          {approvals.map((approval, index) => (
            <Link to={approval.link} key={index} className="flex items-center gap-4 p-2 hover:scale-105 transition-transform">
              <img
                src={approval.image}
                alt={approval.name}
                className="w-16 h-16 rounded-full shadow-md"
              />
              <p className="text-lg text-blue-900 font-medium font-poppins">
                Accredited by {approval.name}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Right Section - Notices & Calendar */}
      <div className="w-full md:w-1/2 bg-gray-100 p-6 rounded-lg shadow-lg text-center relative">
        <div className="mb-4 space-x-4">
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

        <div className="text-left space-y-3">
          <h4 className="text-blue-900 text-lg">* Nostalgia 2025 Coming Soon</h4>
          <hr className="border border-cyan-900" />
          <h4 className="text-blue-900 text-lg">* Hackathon 2025</h4>
          <hr className="border border-cyan-900" />
          <h4 className="text-blue-900 text-lg">* Inter-College Kho-Kho competition in WIT campus</h4>
          <hr className="border border-cyan-900" />
        </div>

        {/* Calendar Popup */}
        {isPopupOpen && (
          <div
            className="absolute bg-white p-6 rounded-lg shadow-xl z-50 w-fit"
            style={{ top: calendarButtonRef.current?.offsetTop + 60, left: calendarButtonRef.current?.offsetLeft }}
          >
            <span
              className="absolute top-2 right-3 text-xl cursor-pointer"
              onClick={closePopup}
            >
              ❌
            </span>
            <h3 className="text-center font-semibold text-lg mb-4">Select a Calendar</h3>
            <div className="flex gap-4 justify-center">
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
    </div>
  );
};

export default CombinedComponent;