import React, { useState } from "react";
import { Link } from "react-router-dom"; // ✅ Link import kiya
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const menuItems = [
    {
      title: "Discover Us",
      submenu: [
        { name: "Mission & Vision", path: "/discover/mission" },
        { name: "Legacy", path: "/discover/legacy" },
        { name: "VC's Message", path: "/discover/vc" },
        { name: "Director’s Message", path: "/discover/director-message" },
        { name: "Department", path: "/discover/department" },
      ],
    },
    {
      title: "Admission",
      submenu: [
        { name: "Admission Process", path: "/admission/process" },
        { name: "Fee Structure", path: "/admission/fee-structure" },
        { name: "Apply Now", path: "/admission/apply" },
        { name: "Eligibility Criteria", path: "/admission/eligibility" },
        { name: "Courses Offered", path: "/academics/courses" },
        { name: "Entrance Exam", path: "/admission/entrance-exam" },
        { name: "Contact Admission Info", path: "/admission/contact" },
        { name: "Download Brochure", path: "/admission/brochure" },
        { name: "Reservation", path: "/admission/reservation" },
      ],
    },
    {
      title: "Academics",
      submenu: [
        { name: "Courses", path: "/academics/courses" },
        { name: "Syllabus & Curriculum", path: "/academics/syllabus" },
        { name: "Academic Policies", path: "/academics/policies" },
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
        { name: "WiFi / Water Cooler", path: "/facilities/wifi" },
        { name: "Auditorium", path: "/facilities/auditorium" },
        { name: "Societies", path: "/facilities/societies" },
        { name: "Cafeteria", path: "/facilities/cafeteria" },
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
        { name: "Anti-ragging", path: "/student-life/anti-ragging" },
      ],
    },
  ];

  return (
    <nav className="navbar">
      <ul className="nav-list">
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
        {/* NSS, Contact Us and Sign In */}
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
          <Link to="/signin" className="nav-button sign-in">
            Sign In
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
