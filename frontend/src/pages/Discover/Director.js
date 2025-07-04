import React, { useState } from "react";

function Director() {
  const [hover, setHover] = useState(false);

  return (
    <div className="bg-[#f4f6f9] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 bg-white rounded-2xl shadow-xl p-8">
        {/* Image Container */}
        <div
          className="relative w-full md:w-[280px] h-[360px] rounded-xl overflow-hidden shadow-md cursor-pointer"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          title="Hover to see name"
        >
          <img
            src="/images/director.jpeg"
            alt="Director"
            className="w-full h-full object-cover"
          />
          {/* Hover Info Overlay */}
          <div
            className={`absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-sm text-center py-2 transition-opacity duration-300 ${
              hover ? "opacity-100" : "opacity-0"
            }`}
          >
            <strong>Dr. Ajay Nath Jha</strong>
            <br />
            Director, APJAKWIT
          </div>
        </div>

        {/* Message Section */}
        <div className="text-gray-800 text-[15px] leading-relaxed text-justify flex-1">
          <p>
            Dr. APJ Abdul Kalam Women’s Institute of Technology (Formerly known
            as Women’s Institute of Technology) (APJAKWIT), a unit of L. N.
            Mithila University, Darbhanga is engaged in imparting Engineering
            and Technical education. It is a golden dream of the then president,
            Bharat Ratna, Dr. A. P. J. Abdul Kalam who inaugurated this
            institute on 30th of December 2005.
          </p>

          <p className="mt-3">
            It is a unique institution of North-East India exclusively for girls
            offering degree level B.Tech. courses in Information Technology and
            Computer Science Engineering and a Master’s degree in Computer
            Applications (MCA). Its well-equipped laboratories, Wi-Fi campus,
            automated library, dedicated faculty members, and availability of a
            girls’ hostel enable students to attain the highest level of
            academic excellence.
          </p>

          <p className="mt-3">
            A new Administrative cum Academic building is under construction.
            Its alumni are placed in multinational corporations in India and
            abroad. I wish a successful and bright technical career to students
            who succeed in getting admission to APJAKWIT.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Director;

