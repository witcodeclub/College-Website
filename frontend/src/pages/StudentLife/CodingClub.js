import React, { useEffect, useState } from "react";
import { FaInstagram, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";

const events = [
  {
    title: "Coding Quest",
    desc: "A competitive coding challenge for all skill levels with exciting problems that test logic and speed. Participants solve multiple coding tasks to climb the leaderboard.",
    img: "/images/coding quest pic1.jpg"
  },
  {
    title: "Tech Seminar",
    desc: "Interactive sessions on AI, Web Development, and emerging tech trends delivered by industry experts and faculty to enhance knowledge.",
    img: "/images/events/tech_seminar.jpg"
  },
  {
    title: "Pair Programming Day",
    desc: "A fun collaborative coding event where seniors and juniors were randomly paired to solve challenges, promoting teamwork and learning.",
    img: "/images/pairprogram pic1.jpg"
  },
  {
    title: "Hackathons",
    desc: "Intense project-building competition where teams innovate and create solutions within a limited time frame.",
    img: "/images/events/hackathon.jpg"
  },
  {
    title: "Tech Fest",
    desc: "Annual inter-college technology festival that includes coding contests, project exhibitions, and workshops.",
    img: "/images/events/tech_fest.jpg"
  },
];

const mentors = [
  { name: "Mr. Santosh Kumar", role: "Mentor", img: "/images/members/santosh.jpg" },
  { name: "Mr. Ashish Mishra", role: "Mentor", img: "/images/members/ashish.jpg" },
  { name: "Mr. Amit Kumar Mishra", role: "Mentor", img: "/images/members/amit sir.jpg" },

];

const technicalTeam = [
  { name: "Anjali Raj", role: "Technical Member", img: "/images/members/anjali.jpg" },
  { name: "Payal Kumari", role: "Technical Member", img: "/images/members/payal.jpg" },
  { name: "Divya Kumari", role: "Technical Member", img: "/images/members/divya.jpg" },
  { name: "Kanchan Gupta", role: "Technical Member", img: "/images/members/kanchan.jpg" }
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
        <img src="/images/codingclub_logo.jpg" alt="Club Logo" className="w-16 h-16 rounded-full object-cover shadow-md" />
        <h1 className="text-4xl font-bold text-blue-900">WIT CODE</h1>
      </div>

      {/* Introduction */}
      <div
        className={`max-w-3xl mx-auto text-center transition-all duration-700 ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"}`}
        style={{ transitionDelay: "100ms" }}
      >
        <p className="text-lg text-gray-800 leading-relaxed">
          <strong>Coding Club</strong> is a <strong>student-led initiative</strong> started by passionate students of Dr. A.P.J. Abdul Kalam Women’s Institute of Technology. Our goal is to build real-world skills through coding, projects, and collaboration.
        </p>
      </div>

      {/* Events Section */}
      <Section title="✨ Events We Organize" show={show} delay="300">
        <div className="flex flex-wrap justify-center gap-6">
          {events.map((event, idx) => (
            <div key={idx} className="bg-white p-5 w-80 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
              <img src={event.img} alt={event.title} className="w-full h-40 object-cover rounded-lg mb-3" />
              <h3 className="text-blue-600 text-lg font-medium">{event.title}</h3>
              <p className="text-slate-600 text-sm mt-1">{event.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section title="💡 Our Projects" show={show} delay="500">
        <CardContainer items={projects} />
      </Section>

      {/* Mentors */}
      <Section title="👨‍🏫 Our Mentors" show={show} delay="600">
        <MemberCards members={mentors} />
      </Section>

      {/* Technical Team */}
      <Section title="🛠️ Technical Team & Senior Members" show={show} delay="700">
        <MemberCards members={technicalTeam} />
      </Section>

      {/* Event Type Distribution */}
      <Section title="📊 Event Type Distribution" show={show} delay="800">
        <div className="text-center">
          <img
  src="https://quickchart.io/chart?c=%7B%22type%22%3A%22pie%22%2C%22data%22%3A%7B%22labels%22%3A%5B%22Coding%20Quest%22%2C%22Workshops%22%2C%22Projects%22%2C%22Hackathons%22%2C%22Tech%20Fest%22%5D%2C%22datasets%22%3A%5B%7B%22data%22%3A%5B20%2C20%2C20%2C20%2C20%5D%2C%22backgroundColor%22%3A%5B%22%23FF6384%22%2C%22%2336A2EB%22%2C%22%23FFCE56%22%2C%22%234BC0C0%22%2C%22%239900FF%22%5D%7D%5D%7D%2C%22options%22%3A%7B%22plugins%22%3A%7B%22legend%22%3A%7B%22labels%22%3A%7B%22color%22%3A%22%23000%22%7D%7D%7D%7D%7D"
  alt="event distribution"
  className="max-w-sm sm:max-w-md lg:max-w-lg mx-auto mt-4 rounded-xl shadow-lg"
/>

        </div>
      </Section>

      {/* Glimpses */}
      <Section title="📷 Glimpses of Club Activities" show={show} delay="900">
        <div className="flex flex-wrap justify-center gap-6">
          {photos.map((src, idx) => (
            <img key={idx} src={src} alt={`club-img-${idx}`} className="w-72 h-44 object-cover rounded-xl shadow-lg hover:scale-105 transition-transform duration-300" />
          ))}
        </div>
      </Section>

      {/* Core Members */}
      <Section title="👩‍💻 Core Members" show={show} delay="1000">
        <MemberCards members={members} />
      </Section>

      {/* Contact */}
      <Section title="📬 Contact & Social Media" show={show} delay="1100">
        <div className="flex flex-col items-center text-base gap-4 text-center">
          <div>Email us at: <a href="mailto:witcodeclub@gmail.com" className="text-blue-800 underline">witcodingclub@gmail.com</a></div>
          <div className="flex gap-6 text-2xl">
            <a href="https://www.instagram.com/witcodeclub" target="_blank" rel="noreferrer"><FaInstagram className="text-pink-600 hover:scale-110 transition" /></a>
            <a href="https://www.linkedin.com/company/105056331/admin/dashboard/" target="_blank" rel="noreferrer"><FaLinkedin className="text-blue-700 hover:scale-110 transition" /></a>
            <a href="https://chat.whatsapp.com/LF1AimjQpdJ42mNdRw1nSr" target="_blank" rel="noreferrer"><FaWhatsapp className="text-green-500 hover:scale-110 transition" /></a>
            <a href="mailto:witcodingclub@gmail.com"><FaEnvelope className="text-gray-700 hover:scale-110 transition" /></a>
          </div>
        </div>
      </Section>
    </div>
  );
};

const Section = ({ title, children, show, delay }) => (
  <div className={`mt-12 transition-all duration-700 ${show ? "scale-100 opacity-100" : "scale-95 opacity-0"}`} style={{ transitionDelay: `${delay}ms` }}>
    <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">{title}</h2>
    {children}
  </div>
);

const CardContainer = ({ items }) => (
  <div className="flex flex-wrap justify-center gap-5">
    {items.map((item, idx) => (
      <div key={idx} className="bg-white p-5 w-72 rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
        <h3 className="text-blue-600 text-lg font-medium">{item.title}</h3>
        <p className="text-slate-600 text-sm mt-1">{item.desc}</p>
      </div>
    ))}
  </div>
);

const MemberCards = ({ members }) => (
  <div className="flex flex-wrap justify-center gap-6">
    {members.map((member, idx) => (
      <div key={idx} className="bg-white p-5 w-56 text-center rounded-xl shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-xl">
        <img src={member.img} alt={member.name} className="w-20 h-20 rounded-full object-cover mb-3 shadow" />
        <div className="text-blue-800 font-semibold text-lg">{member.name}</div>
        <div className="text-slate-600 text-sm">{member.role}</div>
      </div>
    ))}
  </div>
);

export default CodingClub;

