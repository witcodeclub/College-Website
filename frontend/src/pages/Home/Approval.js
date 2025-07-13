import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronUp } from "lucide-react";

const approvals = [
  { name: "AICTE", image: "/images/aicte.jpeg", link: "/approval/aicte" },
  { name: "DST, Bihar", image: "/images/dst.png", link: "/approval/dst" },
  { name: "Higher Education", image: "/images/higher.png", link: "/approval/highereducation" },
  { name: "NAAC", image: "/images/naac.png", link: "/approval/naac" },
];

const CombinedComponent = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showApprovals, setShowApprovals] = useState(true);
  const [showNotices, setShowNotices] = useState(true);
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

  useEffect(() => {
    document.body.style.overflow = isPopupOpen ? "hidden" : "unset";
  }, [isPopupOpen]);

  return (
    <div className="w-full px-4 sm:px-6 lg:px-16 py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* APPROVAL SECTION */}
        {/* Mobile: Collapsible */}
        <div className="lg:hidden rounded-lg shadow-lg overflow-hidden">
          <div
            className="flex justify-between items-center bg-blue-900 text-white px-4 py-3 cursor-pointer"
            onClick={() => setShowApprovals(!showApprovals)}
          >
            <h2 className="text-lg font-bold font-poppins">Accreditations & Recognitions</h2>
            <span
              className={`transition-transform duration-300 ${
                showApprovals ? "rotate-180" : ""
              }`}
            >
              <ChevronUp size={22} />
            </span>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              showApprovals ? "max-h-[500px] p-6" : "max-h-0 p-0"
            } bg-gray-100`}
          >
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
        </div>

        {/* Desktop: Always Expanded */}
        <div className="hidden lg:block bg-gray-100 p-6 rounded-lg shadow-lg">
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

        {/* IMPORTANT NOTICES SECTION */}
        {/* Mobile: Collapsible */}
        <div className="lg:hidden rounded-lg shadow-lg overflow-hidden">
          <div
            className="flex justify-between items-center bg-orange-500 text-white px-4 py-3 cursor-pointer"
            onClick={() => setShowNotices(!showNotices)}
          >
            <h2 className="text-lg font-bold font-poppins">Important Notices</h2>
            <span
              className={`transition-transform duration-300 ${
                showNotices ? "rotate-180" : ""
              }`}
            >
              <ChevronUp size={22} />
            </span>
          </div>

          <div
            className={`overflow-hidden transition-all duration-500 ease-in-out ${
              showNotices ? "max-h-[500px] p-6" : "max-h-0 p-0"
            } bg-gray-100`}
          >
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
              <button className="bg-blue-900 text-white font-bold py-2 px-6 rounded-lg w-full sm:w-auto">
                📢 Notices
              </button>
              <button
                className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg w-full sm:w-auto"
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

        {/* Desktop: Always Expanded */}
        <div className="hidden lg:block bg-gray-100 p-6 rounded-lg shadow-lg">
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-6">
            <button className="bg-blue-900 text-white font-bold py-2 px-6 rounded-lg w-full sm:w-auto">
              📢 Notices
            </button>
            <button
              className="bg-orange-500 text-white font-bold py-2 px-6 rounded-lg w-full sm:w-auto"
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

      {/* CALENDAR POPUP */}
      {isPopupOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4 transition-opacity duration-300">
          <div className="bg-white p-6 rounded-lg shadow-xl relative w-full sm:w-[80%] md:w-[60%] lg:w-[40%] transform transition-transform duration-300 scale-100 sm:scale-105">
            <button
              className="absolute top-2 right-3 text-xl font-bold text-gray-700 hover:text-black"
              onClick={closePopup}
            >
              ❌
            </button>
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
        </div>
      )}
    </div>
  );
};

export default CombinedComponent;
