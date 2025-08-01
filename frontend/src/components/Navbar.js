import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    {
      title: "discover_us",
      submenu: [
<<<<<<< HEAD
        { name: "Mission & Vision", path: "/discover/mission" },
        { name: "Legacy", path: "/discover/legacy" },
        { name: "VC's Message", path: "/discover/vc" },
        { name: "Director's Message", path: "/discover/director" },
        { name: "Department", path: "/discover/department" },
=======
        { name: "mission", path: "/discover/mission" },
        { name: "legacy", path: "/discover/legacy" },
        { name: "vc_message", path: "/discover/vc" },
        { name: "director_message", path: "/discover/director" },
        { name: "department", path: "/discover/department" },
>>>>>>> ada15781fa49f5588764edbb58ad3138a618432c
      ],
    },
    {
      title: "admission",
      submenu: [
        { name: "admission_process", path: "/admission/process" },
        { name: "fee_structure", path: "/admission/fee-structure" },
        { name: "eligibility", path: "/admission/eligibility" },
        { name: "entrance_exam", path: "/admission/entrance-exam" },
        { name: "brochure", path: "/admission/brochure" },
        { name: "reservation", path: "/admission/reservation" },
        { name: "counselling", path: "/admission/conselling" },
      ],
    },
    {
      title: "academics",
      submenu: [
        { name: "courses", path: "/academics/courses" },
        { name: "syllabus", path: "/academics/syllabus" },
        { name: "academic_policies", path: "/academics/academic-policies" },
        { name: "faculty", path: "/academics/faculty" },
      ],
    },
    {
      title: "facilities",
      submenu: [
        { name: "hostel", path: "/facilities/hostel" },
        { name: "library", path: "/facilities/library" },
        { name: "labs", path: "/facilities/labs" },
        { name: "sports", path: "/facilities/sports" },
        { name: "societies", path: "/facilities/societies" },
        { name: "cafeteria", path: "/facilities/cafeteria" },
        { name: "other", path: "/facilities/other" },
      ],
    },
    {
      title: "tp",
      submenu: [
        { name: "about_tp", path: "/tp/about" },
        { name: "alumni", path: "/tp/alumni" },
        { name: "placements", path: "/tp/placements" },
        { name: "tp_brochure", path: "/tp/brochure" },
        { name: "training", path: "/tp/training" },
        
        { name: "mou", path: "/tp/mou" },
      ],
    },
    {
      title: "student_life",
      submenu: [
        { name: "coding_club", path: "/student-life/coding-club" },
        { name: "cultural_cell", path: "/student-life/cultural-cell" },
        { name: "sports_club", path: "/student-life/sports-club" },
        { name: "fests", path: "/student-life/fests" },
        { name: "magazine", path: "/student-life/magazine" },
      ],
    },
  ];

  return (
<<<<<<< HEAD
    <nav className="navbar">
      <ul className="nav-list">
        <li className="nav-item">
          <Link to="/" className="nav-button home" style={{color : "white"}}>
            Home
          </Link>
        </li>
        {menuItems.map((item, index) => (
          <li
            key={index}
            className="nav-item"
            onMouseEnter={() => setDropdown(index)}
            onMouseLeave={() => setDropdown(null)}
          >
            {item.title}
            {dropdown === index && (
              <ul className="dropdown">
                {item.submenu.map((subItem, subIndex) => (
                  <li key={subIndex} className="dropdown-item">
                    <Link to={subItem.path}>{subItem.name}</Link>{" "}
                    {/* ✅ Link Added */}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        {/* NSS, Contact Us and Log In */}
        <li className="nav-item">
          <Link to="/nss" className="nav-button nss">
            NSS
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/contact" className="nav-button contact">
            Contact Us
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/login" className="nav-button sign-in">
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
=======
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
                {t("home")}
              </Link>
            </li>

            {menuItems.map((item, index) => (
              <li key={index} className="relative group">
                <span className="text-white font-bold text-[17px] px-4 py-2 cursor-pointer hover:bg-[#1B3B6F] rounded transition inline-block">
                  {t(item.title)}
                </span>
                <ul className="absolute hidden group-hover:flex flex-col top-full left-0 bg-white text-black rounded-md shadow-md min-w-[220px] z-[999]">
                  {item.submenu.map((sub, i) => (
                    <li key={i}>
                      <Link
                        to={sub.path}
                        className="block px-4 py-2 text-[15px] hover:bg-[#1B3B6F] hover:text-white transition whitespace-nowrap"
                      >
                        {t(sub.name)}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ))}

            <li>
              <Link to="/nss" className="text-white font-bold text-[17px] px-4 py-2 hover:text-[#FFD700] rounded transition">
                {t("nss")}
              </Link>
            </li>

            <li>
              <Link to="/contact" className="bg-[#2E8B57] text-white font-bold text-[17px] px-4 py-2 rounded hover:bg-[#5DADE2] transition">
                {t("contact_us")}
              </Link>
            </li>

            <li className="relative group">
              <div className="bg-white text-[#0A2647] font-bold text-[17px] px-4 py-2 rounded hover:bg-[#5DADE2] hover:text-white transition cursor-pointer">
                {t("sign_in")}
              </div>
              <div className="absolute hidden group-hover:flex flex-col top-full right-0 bg-white text-black rounded shadow-md min-w-[180px] z-[999]">
                <Link to="/login" className="px-4 py-2 hover:bg-[#1B3B6F] hover:text-white transition">
                  {t("login")}
                </Link>
                <Link to="/employer-login" className="px-4 py-2 hover:bg-[#1B3B6F] hover:text-white transition">
                  {t("login_employer")}
                </Link>
              </div>
            </li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {mobileMenu && (
          <div className="md:hidden px-4 pb-4">
            <ul className="flex flex-col gap-3 text-white">
              <li><Link to="/" onClick={() => setMobileMenu(false)}>{t("home")}</Link></li>
              {menuItems.map((item, index) => (
                <details key={index} className="bg-[#1B3B6F] rounded">
                  <summary className="cursor-pointer px-4 py-2 font-semibold">{t(item.title)}</summary>
                  <ul className="pl-4 pb-2">
                    {item.submenu.map((sub, i) => (
                      <li key={i}>
                        <Link to={sub.path} onClick={() => setMobileMenu(false)} className="block py-1 text-sm">{t(sub.name)}</Link>
                      </li>
                    ))}
                  </ul>
                </details>
              ))}
              <li><Link to="/nss" onClick={() => setMobileMenu(false)}>{t("nss")}</Link></li>
              <li><Link to="/contact" onClick={() => setMobileMenu(false)}>{t("contact_us")}</Link></li>
              <li><Link to="/login" onClick={() => setMobileMenu(false)}>{t("login")}</Link></li>
              <li><Link to="/employer-login" onClick={() => setMobileMenu(false)}>{t("login_employer")}</Link></li>
            </ul>
          </div>
        )}
      </nav>
    </>
>>>>>>> ada15781fa49f5588764edbb58ad3138a618432c
  );
};

export default Navbar;

