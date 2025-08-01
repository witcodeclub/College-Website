import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const events = [
  { title: "Coding Quest", desc: "Competitive coding challenge for all skill levels." },
  { title: "Tech Seminar", desc: "Talks on AI, Web Dev, and new tech trends." },
  { title: "Pair Programming Day", desc: "Collaborative coding experience for peers." },
  { title: "Hackathons", desc: "Build innovative projects within limited time." },
  { title: "Tech Fest", desc: "Annual inter-college technology festival participation." },
];

const projects = [
  { title: "College Website", desc: "Official site with AI-integrated chatbot and info." },
  { title: "Quick Bytes", desc: "Mini content platform for coding tips and blogs." },
  { title: "Coding Club Website", desc: "Dedicated site for showcasing club events, members, and blogs." },
];

const members = [
  { name: "Rimjhim Jha", role: "President", img: "/images/members/rimjhim.jpg" },
  { name: "Shruti Riya", role: "Secretary", img: "/images/members/shruti.jpg" },
  { name: "Jaya", role: "Core Member", img: "/images/members/jaya.jpg" },
  { name: "More members coming soon...", role: "", img: "/images/members/default.jpg" },
];

const photos = [
  "/images/codin quest image cer.jpg",
  "/images/coding quest pic1.jpg",
  "/images/pairprogram pic1.jpg",
  "/images/code club.jpg",
];

const CodingClub = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    setTimeout(() => setShow(true), 300);
  }, []);

  return (
    <div className="font-sans bg-gray-50 px-4 py-10 md:px-10 lg:px-20">
      {/* Logo and Title */}
      <div
        className={`flex items-center justify-center gap-4 mb-10 transform transition-all duration-700 ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
      >
        <img
          src="/images/codingclub_logo.jpg"
          alt="Club Logo"
          className="w-16 h-16 rounded-full object-cover shadow-md"
        />
        <h1 className="text-4xl font-bold text-blue-900">WIT CODE</h1>
      </div>

      {/* Club Introduction */}
      <div
        className={`max-w-3xl mx-auto text-center transition-all duration-700 ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        style={{ transitionDelay: "100ms" }}
      >
        <p className="text-lg text-gray-800 leading-relaxed">
          <strong>Coding Club</strong> is a <strong>student-led initiative</strong> started by passionate students of Dr. A.P.J. Abdul Kalam Women’s Institute of Technology. The club was inaugurated by our Hon’ble VC Sir in the presence of our respected Director and faculty members. Our goal is to build real-world skills through coding, projects, and collaboration.
        </p>
      </div>

      <Section title="✨ Events We Organize" show={show} delay="300">
        <CardContainer items={events} />
      </Section>

      <Section title="💡 Our Projects" show={show} delay="500">
        <CardContainer items={projects} />
      </Section>

      <Section title="📊 Event Type Distribution" show={show} delay="700">
        <div className="text-center">
          <img
            src="https://quickchart.io/chart?c={type:'pie',data:{labels:['Coding Quest','Workshops','Projects','Hackathons','Tech Fest'],datasets:[{data:[20,20,20,20,20]}]}}"
            alt="event distribution"
            className="max-w-xs mx-auto mt-4 rounded-xl shadow-lg"
          />
        </div>
      </Section>

      <Section title="📷 Glimpses of Club Activities" show={show} delay="900">
        <div className="flex flex-wrap justify-center gap-6">
          {photos.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`club-img-${idx}`}
              className="w-72 h-44 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
            />
          ))}
        </div>
      </Section>

      <Section title="👩‍💻 Core Members" show={show} delay="1100">
        <div className="flex flex-wrap justify-center gap-6">
          {members.map((member, idx) => (
            <div
              key={idx}
              className="bg-white p-5 w-56 text-center rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-20 h-20 rounded-full object-cover mb-3 shadow"
              />
              <div className="text-blue-800 font-semibold text-lg">{member.name}</div>
              <div className="text-slate-600 text-sm">{member.role}</div>
            </div>
          ))}
        </div>
      </Section>

      <Section title="📬 Contact & Social Media" show={show} delay="1300">
        <div className="flex flex-col items-center text-base gap-4 text-center">
          <div>Email us at: <a href="mailto:witcodeclub@gmail.com" className="text-blue-800 underline">witcodingclub@gmail.com</a></div>
          <div className="flex gap-6 text-2xl">
            <a href="https://www.instagram.com/witcodeclub?utm_source=qr&igsh=MWtsand0dTFlMWp0eA==" target="_blank" rel="noreferrer" title="Instagram">
              <FaInstagram className="text-pink-600 hover:scale-110 transition" />
            </a>
            <a href="https://www.linkedin.com/company/105056331/admin/dashboard/" target="_blank" rel="noreferrer" title="LinkedIn">
              <FaLinkedin className="text-blue-700 hover:scale-110 transition" />
            </a>
            <a href="https://chat.whatsapp.com/LF1AimjQpdJ42mNdRw1nSr" target="_blank" rel="noreferrer" title="WhatsApp">
              <FaWhatsapp className="text-green-500 hover:scale-110 transition" />
            </a>
            <a href="mailto:witcodingclub@gmail.com" title="Email">
              <FaEnvelope className="text-gray-700 hover:scale-110 transition" />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
};

const Section = ({ title, children, show, delay }) => (
  <div
    className={`mt-12 transition-all duration-700 ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">{title}</h2>
    {children}
  </div>
);

const CardContainer = ({ items }) => (
  <div className="flex flex-wrap justify-center gap-5">
    {items.map((item, idx) => (
      <div
        key={idx}
        className="bg-white p-5 w-72 rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
      >
        <h3 className="text-blue-600 text-lg font-medium">{item.title}</h3>
        <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
      </div>
    ))}
  </div>
);

export default CodingClub;
