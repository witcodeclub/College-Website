import React from "react";

const AntiRagging = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-emerald-50 min-h-screen px-4 py-12">
      <div className="max-w-4xl mx-auto">
        {/* ======= Animated Professional Header ======= */}
        <div className="relative text-center mb-10">
          <h1 className="relative inline-block text-3xl sm:text-4xl md:text-5xl font-extrabold text-emerald-700 tracking-wide drop-shadow-lg">
            Anti-Ragging Policy
            <span className="absolute left-0 bottom-0 w-full h-1 bg-emerald-400 rounded-full animate-slide"></span>
          </h1>
        </div>

        {/* ======= Content Card ======= */}
        <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-10 text-gray-800 text-lg leading-relaxed transform hover:shadow-xl transition duration-300">
          <p className="mb-4">
            At <strong>Dr. APJ Abdul Kalam Women’s Institute Of Technology, Darbhanga</strong>, 
            we uphold a <span className="text-emerald-700 font-semibold">zero-tolerance policy</span> against ragging. 
            Our priority is to ensure a safe, supportive, and inclusive environment for all students, especially freshers.
          </p>

          <p className="mb-4">
            Ragging in any form—<span className="font-semibold">physical, verbal, or psychological</span>—is strictly prohibited 
            and is a punishable offense under law.
          </p>

          <p className="font-semibold mb-3 text-emerald-700">Our preventive measures include:</p>
          <ul className="list-disc pl-6 space-y-2 text-gray-700">
            <li>✅ Dedicated Anti-Ragging Committee & 24x7 Helpline</li>
            <li>✅ Awareness programs, workshops, and counseling sessions</li>
            <li>✅ Anonymous complaint submission system for students</li>
            <li>✅ Active monitoring through student volunteers and CCTV surveillance</li>
          </ul>

          {/* ======= Image Section ======= */}
          <div className="mt-8 text-center">
            <img
              src="/images/anti-ragging.jpg"
              alt="Anti Ragging Awareness"
              className="w-full max-w-xl mx-auto rounded-xl shadow-md hover:shadow-2xl transform hover:scale-105 transition duration-500"
            />
          </div>
        </div>
      </div>

      {/* ======= Custom Animation for Underline ======= */}
      <style>
        {`
          @keyframes slide {
            0% { transform: scaleX(0); opacity: 0; }
            50% { transform: scaleX(1.1); opacity: 1; }
            100% { transform: scaleX(1); opacity: 1; }
          }
          .animate-slide {
            animation: slide 1s ease forwards;
            transform-origin: left;
          }
        `}
      </style>
    </div>
  );
};

export default AntiRagging;


