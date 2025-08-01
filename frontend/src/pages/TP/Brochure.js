import React from "react";

const Brochure = () => {
  return (
    <div className="min-screen overflow-hidden bg-gray-100 px-5 py-10 font-sans flex items-center justify-center">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-center text-green-800 mb-8">
          Placement Brochure
        </h1>

        <div className="max-w-3xl mx-auto bg-green-50 p-8 rounded-xl shadow-md animate-fade-in">
          <p className="text-base text-gray-800 mb-5 leading-relaxed">
            Our annual placement brochure highlights student achievements, placement statistics,
            recruiter testimonials, and academic excellence. It serves as a comprehensive document
            for companies to understand the talent pool at our college.
          </p>

          <p className="text-base text-gray-800 mb-5 leading-relaxed">
            The brochure contains detailed information about departments, faculty, top recruiters,
            training modules, and student profiles.
          </p>

          <a
            href="/assets/brochure/placement_brochure.pdf"
            download
            className="inline-block mt-4 px-6 py-3 bg-green-800 text-white rounded-md font-semibold hover:bg-green-700 transition duration-300"
          >
            📅 Download Brochure
          </a>
        </div>
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

export default Brochure;