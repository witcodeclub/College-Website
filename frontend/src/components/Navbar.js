import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "./LanguageSwitcher";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);
  const { t } = useTranslation();

  const menuItems = [
    {
      title: "discover_us",
      submenu: [
        { name: "Mission & Vision", path: "/discover/mission" },
        { name: "Legacy", path: "/discover/legacy" },
        { name: "VC's Message", path: "/discover/vc" },
        { name: "Director's Message", path: "/discover/director" },
        { name: "Department", path: "/discover/department" },
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
    <nav className="bg-[#0A2647] text-white shadow-md relative z-[999]">
      <div className="max-w-[1200px] mx-auto px-4 py-3 flex justify-between items-center flex-nowrap">
        {/* ✅ Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={() => setMobileMenu(!mobileMenu)}>
            {mobileMenu ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* ✅ Desktop Menu */}
        <ul className="hidden md:flex items-center justify-between w-full space-x-5 flex-nowrap">
          {/* Home */}
          <li>
            <Link to="/" className="font-bold text-[16px] px-3 py-2 whitespace-nowrap rounded hover:bg-[#1B3B6F] transition">
              {t("home")}
            </Link>
          </li>

          {/* Dropdown Menus */}
          {menuItems.map((item, index) => (
            <li key={index} className="relative group whitespace-nowrap">
              <span className="font-bold text-[16px] px-3 py-2 cursor-pointer whitespace-nowrap rounded hover:bg-[#1B3B6F] transition">
                {t(item.title)}
              </span>
              <ul className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out flex-col top-full left-0 bg-white text-black rounded-md shadow-md min-w-[220px] z-[999]">
                {item.submenu.map((sub, i) => (
                  <li key={i}>
                    <Link to={sub.path} className="block px-4 py-2 text-[15px] hover:bg-[#1B3B6F] hover:text-white transition whitespace-nowrap">
                      {t(sub.name)}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          ))}

          {/* NSS */}
          <li>
            <Link to="/nss" className="font-bold text-[16px] px-3 py-2 whitespace-nowrap rounded hover:text-[#FFD700] transition">
              {t("nss")}
            </Link>
          </li>

          {/* Contact Us */}
          <li>
            <Link to="/contact" className="bg-[#2E8B57] text-white font-bold text-[16px] px-3 py-2 whitespace-nowrap rounded hover:bg-[#5DADE2] transition">
              {t("contact_us")}
            </Link>
          </li>

          {/* Sign In Dropdown */}
          <li className="relative group ml-2 whitespace-nowrap">
            <div className="bg-white text-[#0A2647] font-bold text-[16px] px-3 py-2 rounded hover:bg-[#5DADE2] hover:text-white transition cursor-pointer">
              {t("sign_in")}
            </div>
            <div className="absolute opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out flex flex-col top-full right-0 bg-white text-black rounded shadow-md min-w-[200px] z-[999]">
              <Link to="/login" className="block px-4 py-2 whitespace-nowrap hover:bg-[#1B3B6F] hover:text-white transition">
                {t("login")}
              </Link>
              <Link to="/employer-login" className="block px-4 py-2 whitespace-nowrap hover:bg-[#1B3B6F] hover:text-white transition">
                {t("login_employer")}
              </Link>
            </div>
          </li>

          {/* 🌐 Language Switcher */}
          <li className="ml-3 whitespace-nowrap">
            <LanguageSwitcher />
          </li>
        </ul>
      </div>

      {/* ✅ Mobile Menu */}
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
            <li><LanguageSwitcher /></li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;






