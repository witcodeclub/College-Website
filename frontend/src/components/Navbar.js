import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [dropdown, setDropdown] = useState(null);
  const [loginRole, setLoginRole] = useState(null);
  const [showModal, setShowModal] = useState(false);

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

  const handleLoginClick = (role) => {
    setLoginRole(role);
    setShowModal(true);
  };

  const handleSubmit = () => {
    if (loginRole) {
      window.location.href = `http://localhost:3001/${loginRole.toLowerCase()}`;
    }
  };

  return (
    <>
      <nav className="navbar">
        <ul className="nav-list">
          <li className="nav-item">
            <Link to="/" className="nav-button home" style={{ color: "white" }}>
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
                      <Link to={subItem.path}>{subItem.name}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

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

        {/* Dropdown with two login options */}
<li className="relative group nav-item">
  <button className="nav-button log-in">Sign In</button>
  <ul className="absolute hidden group-hover:block bg-white text-black mt-1 p-2 rounded shadow z-50 min-w-max">
    <li className="cursor-pointer hover:bg-gray-200 px-4 py-2">
      <Link to="/login">Login</Link>
    </li>
    <li className="cursor-pointer hover:bg-gray-200 px-4 py-2">
      <Link to="/employer-login">Login as Employer</Link>
    </li>
  </ul>
</li>


        </ul>
      </nav>

      {/* Login Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-xl shadow-lg w-96 relative">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-2 right-3 text-gray-600 hover:text-black text-xl"
            >
              &times;
            </button>
            <h2 className="text-xl font-semibold mb-4 text-center">
              {`Login as ${loginRole.charAt(0).toUpperCase() + loginRole.slice(1)}`}
            </h2>
            <input
              type="text"
              placeholder="Username"
              className="w-full border rounded px-3 py-2 mb-3"
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full border rounded px-3 py-2 mb-4"
            />
            <button
              className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
              onClick={handleSubmit}
            >
              Login
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
