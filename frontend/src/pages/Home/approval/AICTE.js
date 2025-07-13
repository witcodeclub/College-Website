import React from "react";

const AICTECard = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 sm:p-8 bg-white rounded-xl shadow-md border border-gray-300 my-8">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-4">
        All India Council for Technical Education (AICTE)
      </h2>

      {/* Basic Info */}
      <p className="text-sm sm:text-base text-gray-600 text-center mb-4">
        📅 <strong>Established:</strong> November 1945 &nbsp; | &nbsp; 🏛 <strong>Statutory Body Since:</strong> 1987
      </p>

      {/* About AICTE */}
      <p className="text-gray-800 leading-relaxed text-justify text-sm sm:text-base">
        The <strong>AICTE</strong> serves as the national-level Apex Advisory Body for the promotion and development of
        quality <strong>Technical Education</strong> in India. With a mission to foster innovation, research, and
        meaningful collaboration between education and industry, AICTE plays a crucial role in shaping the nation's
        technical landscape.
      </p>

      {/* Approval Section */}
      <div className="bg-gray-100 p-4 sm:p-5 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">📜 Approval Status:</h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
          The All India Council for Technical Education (AICTE) has been in existence since November 1945 as a national
          Level Apex Advisory Body and as a statutory body through an Act of Parliament in 1987 with its mission of
          developing and promoting quality Technical Education in the Country in a coordinated and integrated manner.
          The Council’s constant endeavour is to encourage a meaningful association between the Technical Education
          system and research and development activities in a concerted effort aimed at nation building. <br /><br />
          AICTE has been <strong>continuously granting the Extension of Approval (EoA) since 2005</strong> to{" "}
          <strong>
            Dr. APJ Abdul Kalam Women’s Institute of Technology, L. N. Mithila University, Darbhanga
          </strong>
          , following its <strong>first Letter of Approval (LoA) issued in 2004</strong>.
        </p>
      </div>

      {/* Footer Note */}
      <p className="text-center font-semibold text-teal-600 mt-6 text-sm sm:text-base">
        📌 Committed to Excellence in Technical Education & Nation Building.
      </p>
    </div>
  );
};

export default AICTECard;

