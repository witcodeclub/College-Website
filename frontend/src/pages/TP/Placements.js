import React from "react";

const Placements = () => {
  return (
    <div className="min-h-screen bg-white px-5 py-10 font-sans">
      <h1 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-8 drop-shadow-sm">
        Placement Process
      </h1>

      <div className="max-w-3xl mx-auto bg-gray-100 p-8 rounded-xl shadow-md animate-fade-in">
        <h2 className="text-2xl text-green-700 font-semibold mb-4">
          On-Campus Recruitment
        </h2>

        <p className="text-base text-gray-800 mb-5 leading-relaxed">
          Our college follows a structured placement process to ensure maximum career opportunities
          for students. The Training & Placement Cell coordinates with top recruiters to invite them
          for on-campus hiring.
        </p>

        <ul className="list-disc list-inside mb-5 text-green-900">
          <li>Pre-placement talks by companies</li>
          <li>Online/Offline aptitude and technical tests</li>
          <li>Group discussions & personal interviews</li>
          <li>Final offer and onboarding process</li>
        </ul>

        <p className="italic text-sm text-gray-700">
          Many students from CS, IT, and MCA have secured positions in reputed companies like TCS,
          Infosys, Wipro, and more.
        </p>
      </div>

      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease-in;
          }

          @keyframes fadeIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
};

export default Placements;

