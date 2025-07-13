import React from "react";

const mentors = [
  {
    title: "VICE-CHANCELLOR",
    name: "Prof. Sanjay Kumar Choudhary",
    image: "/images/vc.jpeg",
  },
  {
    title: "DIRECTOR",
    name: "Dr. Ajay Nath Jha",
    image: "/images/director.jpeg",
  },
  {
    title: "REGISTRAR ,LNMU",
    name: "Dr. Divya Rani Hansda",
    image: "/images/registrar.jpeg",
  },
  {
    title: "DEPUTY REGISTRAR",
    name: "Priyanka Rai",
    image: "",
  },
  {
    title: "MENTOR",
    name: "Dr. Nirmal Kumar",
    image: "/images/nirmal.jpeg",
  },
];

const Mentor = () => {
  return (
    <div className="flex flex-col items-center px-2 py-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#2c3e50] mb-6">
        Our Mentors
      </h1>

      {/* Responsive grid with fixed card size */}
      <div className="w-full flex flex-wrap justify-center gap-4">
        {mentors.map((mentor, index) => (
          <div
            key={index}
            className="relative w-[120px] h-[180px] rounded-lg shadow-md overflow-hidden group"
          >
            <img
              src={mentor.image}
              alt={mentor.title}
              className="w-full h-full object-cover group-hover:brightness-50 transition duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col items-center justify-center text-white px-2 text-center">
              <h2 className="text-xs font-bold text-green-300 mb-1">{mentor.title}</h2>
              <p className="text-xs">{mentor.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mentor;


