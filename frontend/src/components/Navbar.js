import React, { useState } from "react";
import "./Navbar.css"; // Import CSS for styling

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);

  const menuItems = [
    {
      title: "About Us",
      submenu: [
        "Mission & Vision",
        "History",
        "About LNMU",
        "VC's Message",
        "Director’s Message",
        "Faculty & Staff",
        "Department",
        "Social Media",
      ],
    },
    {
      title: "Admission",
      submenu: [
        "Admission Process",
        "Fee Structure",
        "Apply Now",
        "Eligibility Criteria",
        "Courses Offered",
        "Entrance Exam",
        "Contact Admission Info",
        "Download Brochure",
        "Reservation",
      ],
    },
    {
      title: "Academics",
      submenu: ["Courses", "Syllabus & Curriculum", "Academic Policies"],
    },
    {
      title: "Facilities",
      submenu: [
        "Hostel & Accommodation",
        "Library",
        "Labs",
        "Sports",
        "WiFi / Water Cooler",
        "Auditorium",
        "Clubs",
        "Canteen",
        "NSS",
      ],
    },
    {
      title: "T&P",
      submenu: [
        "Alumni List / Message",
        "About Placements",
        "Placement Brochure",
        "Training Process",
        "T&P Contact Info",
        "MOU’s",
      ],
    },
    {
      title: "Student Life",
      submenu: [
        "Coding Club",
        "Cultural Cell",
        "Sports Club",
        "Fests",
        "Canteen",
        "NSS",
        "Magazine",
        "Anti-ragging",
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
                    {subItem}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
        {/* Contact Us and Sign In */}
        <li className="nav-item contact">Contact Us</li>
        <li className="nav-item sign-in">Sign In</li>
      </ul>
    </nav>
  );
};

export default Navbar;
