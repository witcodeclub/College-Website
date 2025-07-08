import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuItems = [
    {
      title: "Discover Us",
      submenu: [
        { name: "Mission & Vision", path: "/discover/mission" },
        { name: "Legacy", path: "/discover/legacy" },
        { name: "VC's Message", path: "/discover/vc" },
        { name: "Director’s Message", path: "/discover/director" },
        { name: "Department", path: "/discover/department" },
      ],
    },
    {
      title: "Admission",
      submenu: [
        { name: "Admission Process", path: "/admission/process" },
        { name: "Fee Structure", path: "/admission/fee-structure" },
        { name: "Eligibility Criteria", path: "/admission/eligibility" },
        { name: "Entrance Exam", path: "/admission/entrance-exam" },
        { name: "Download Brochure", path: "/admission/brochure" },
        { name: "Reservation", path: "/admission/reservation" },
        { name: "Conselling & Admission", path: "/admission/Conselling" },
      ],
    },
    {
      title: "Academics",
      submenu: [
        { name: "Courses", path: "/academics/courses" },
        { name: "Syllabus & Curriculum", path: "/academics/syllabus" },
        { name: "Academic Policies", path: "/academics/academic-policies" },
        { name: "Faculty", path: "/academics/faculty" },
      ],
    },
    {
      title: "Facilities",
      submenu: [
        { name: "Hostel", path: "/facilities/hostel" },
        { name: "Library", path: "/facilities/library" },
        { name: "Labs", path: "/facilities/labs" },
        { name: "Sports", path: "/facilities/sports" },
        { name: "Societies", path: "/facilities/societies" },
        { name: "Cafeteria", path: "/facilities/cafeteria" },
        { name: "Other", path: "facilities/other" },
      ],
    },
    {
      title: "T&P",
      submenu: [
        { name: "About T&P", path: "/tp/about" },
        { name: "Alumni List / Message", path: "/tp/alumni" },
        { name: "About Placements", path: "/tp/placements" },
        { name: "Placement Brochure", path: "/tp/brochure" },
        { name: "Training Process", path: "/tp/training" },
        { name: "T&P Contact", path: "/tp/contact" },
        { name: "MOU's", path: "/tp/mou" },
      ],
    },
    {
      title: "Student Life",
      submenu: [
        { name: "Coding Club", path: "/student-life/coding-club" },
        { name: "Cultural Cell", path: "/student-life/cultural-cell" },
        { name: "Sports Club", path: "/student-life/sports-club" },
        { name: "Fests", path: "/student-life/fests" },
        { name: "Magazine", path: "/student-life/magazine" },
      ],
    },
  ];

  return (
    <>
      <nav className="bg-[#0A2647] text-white shadow-md relative z-[999]">
        <div className="max-w-[1200px] mx-auto px-4 py-3 flex justify-between items-center">
          {/* Hamburger - Mobile */}
          <div className="md:hidden">
            <button onClick={() => setMobileMenu(!mobileMenu)}>
              {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex gap-4 items-center whitespace-nowrap">
            <li>
              <Link to="/" className="text-white font-bold text-[17px] px-4 py-2 hover:bg-[#1B3B6F] rounded transition">
                Home
              </Link>
            </li>

            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <span className="text-white font-bold text-[17px] px-4 py-2 cursor-pointer hover:bg-[#1B3B6F] rounded transition inline-block">
                  {item.title}
                </span>
                <ul className="absolute hidden group-hover:flex flex-col top-full left-0 bg-white text-black rounded-md shadow-md min-w-[220px] z-[999]">
                  {item.submenu.map((sub, i) => (
                    <li key={i}>
                      <Link
                        to={sub.path}
                        className="block px-4 py-2 text-[15px] hover:bg-[#1B3B6F] hover:text-white transition whitespace-nowrap"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li>
              <Link to="/nss" className="text-white font-bold text-[17px] px-4 py-2 hover:text-[#FFD700] rounded transition">
                NSS
              </Link>
            </li>

            <li>
              <Link to="/contact" className="bg-[#2E8B57] text-white font-bold text-[17px] px-4 py-2 rounded hover:bg-[#5DADE2] transition">
                Contact Us
              </Link>
            </li>

            <li className="relative group">
              <div className="bg-white text-[#0A2647] font-bold text-[17px] px-4 py-2 rounded hover:bg-[#5DADE2] hover:text-white transition cursor-pointer">
                Sign In
              </div>
              <div className="absolute hidden group-hover:flex flex-col top-full right-0 bg-white text-black rounded shadow-md min-w-[180px] z-[999]">
                <Link to="/login" className="px-4 py-2 hover:bg-[#1B3B6F] hover:text-white transition">
                  Login
                </Link>
                <Link to="/employer-login" className="px-4 py-2 hover:bg-[#1B3B6F] hover:text-white transition">
                  Login as Employer
                </Link>
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col gap-3 text-white">
              <li><Link to="/" onClick={() => setMobileMenu(false)}>Home</Link></li>
              {menuItems.map((item, index) => (
                <details key={index} className="bg-[#1B3B6F] rounded">
                  <summary className="cursor-pointer px-4 py-2 font-semibold">{item.title}</summary>
                  <ul className="pl-4 pb-2">
                    {item.submenu.map((sub, i) => (
                      <li key={i}>
                        <Link to={sub.path} onClick={() => setMobileMenu(false)} className="block py-1 text-sm">{sub.name}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
              <li><Link to="/nss" onClick={() => setMobileMenu(false)}>NSS</Link></li>
              <li><Link to="/contact" onClick={() => setMobileMenu(false)}>Contact Us</Link></li>
              <li><Link to="/login" onClick={() => setMobileMenu(false)}>Login</Link></li>
              <li><Link to="/employer-login" onClick={() => setMobileMenu(false)}>Login as Employer</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;