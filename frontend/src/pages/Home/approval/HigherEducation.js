
import React from "react";

const HigherEducationCard = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8 bg-white rounded-xl shadow-md border border-gray-300 my-8">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-4">
        Higher Education
      </h2>

      {/* Meta Info */}
      <p className="text-sm sm:text-base text-gray-600 text-center mb-4">
        📅 <strong>RUSA Initiative:</strong> Since 12th and 13th Plans &nbsp;|&nbsp; 🏛{" "}
        <strong>Key Focus:</strong> State Higher Education Councils (SHEC)
      </p>

      {/* Description */}
      <p className="text-gray-800 leading-relaxed text-justify text-sm sm:text-base">
        One of the pre-requisites of the <strong>Rashtriya Uchchatar Shiksha Abhiyan (RUSA)</strong> Scheme is the
        formation of <strong>State Higher Education Councils (SHEC)</strong> in states. This marks a significant shift
        in India's higher education policy, recognizing states as primary units of planning and aligning multiple
        funding streams for educational development.
      </p>

      {/* Details Box */}
      <div className="bg-gray-100 p-4 sm:p-5 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          📜 Role of SHEC in RUSA Implementation:
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
          The <strong>State Higher Education Councils (SHECs)</strong> are central to the <strong>RUSA vision</strong>{" "}
          of enhancing access, equity, and excellence in higher education with better efficiency, transparency,
          accountability, and responsiveness.
          <br /><br />
          The RUSA scheme aims to deliver crucial academic, administrative, and governance reforms in state education
          systems. Among its sixteen listed objectives, the <strong>16th goal</strong> is to facilitate the creation of
          SHECs, while the other fifteen focus on long-term aspirational policy changes.
          <br /><br />
          In 2004, the <strong>Department of Higher Education, Government of Bihar</strong> issued a{" "}
          <strong>No Objection Certificate (NOC)</strong> to the <strong>Registrar, L. N. Mithila University,
          Darbhanga</strong>. Since then, <strong>Dr. APJ Abdul Kalam Women’s Institute of Technology</strong> has
          been dedicated to imparting technical education exclusively to women since the academic year 2004-05.
        </p>
      </div>

      {/* Footer Note */}
      <p className="text-center font-semibold text-teal-600 mt-6 text-sm sm:text-base">
        📌 Advancing Higher Education in Bihar for a Progressive Future.
      </p>
    </div>
  );
};

export default HigherEducationCard;
