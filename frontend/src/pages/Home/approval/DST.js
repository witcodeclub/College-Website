import React from "react";

const DSTCard = () => {
  return (
    <div className="max-w-5xl mx-auto p-6 sm:p-8 bg-white rounded-xl shadow-md border border-gray-300 my-8">
      {/* Title */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-green-700 mb-4">
        DST, Bihar
      </h2>

      {/* Meta Info */}
      <p className="text-sm sm:text-base text-gray-600 text-center mb-4">
        📅 <strong>Established:</strong> 1978 &nbsp;|&nbsp; 🏛 <strong>Independent Since:</strong> 2007
      </p>

      {/* Description */}
      <p className="text-gray-800 leading-relaxed text-justify text-sm sm:text-base">
        This department was formerly known as <strong>‘Industry and Technical Education Department’</strong> as it was
        under the control of the Department of Industry. In 1978, it was separated and established as an independent
        department named the <strong>Department of Science and Technology (DST).</strong> In 2007, the Department of
        Information Technology was carved out from DST to function independently.
      </p>

      {/* Timeline Info */}
      <div className="bg-gray-100 p-4 sm:p-5 rounded-lg mt-6">
        <h3 className="text-lg font-semibold text-gray-800 mb-2">
          📜 Evolution of Technical Education in Bihar:
        </h3>
        <p className="text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
          The journey of technical education in Bihar began with the establishment of{" "}
          <strong>Bihar College of Engineering, Patna</strong> in 1924, now known as{" "}
          <strong>National Institute of Technology, Patna</strong>. This was the{" "}
          <strong>6th oldest engineering college in India</strong>.
          <br /><br />
          Post-independence, the need for technological manpower led to the founding of{" "}
          <strong>Bihar Institute of Technology, Sindri</strong> in 1949 as the College of Mechanical and Electrical
          Engineering, later relocated to Sindri in 1950. In 1954,{" "}
          <strong>Muzaffarpur Institute of Technology</strong> was also established.
          <br /><br />
          After the bifurcation of Bihar in 2000, Bihar Institute of Technology, Sindri became part of Jharkhand.
          Currently, Bihar has <strong>sixteen engineering colleges</strong> and{" "}
          <strong>seventeen polytechnic institutions</strong> operating effectively.
          <br /><br />
          Since the academic year <strong>2004-05</strong>,{" "}
          <strong>
            Dr. APJ Abdul Kalam Women’s Institute of Technology, L. N. Mithila University, Darbhanga
          </strong>{" "}
          has been dedicated to providing technical education exclusively to women, after receiving a No Objection
          Certificate (NOC) from the <strong>Department of Science and Technology (DST), Government of Bihar</strong>.
        </p>
      </div>

      {/* Footer Note */}
      <p className="text-center font-semibold text-teal-600 mt-6 text-sm sm:text-base">
        📌 Strengthening Bihar’s Technical Education for a Brighter Future.
      </p>
    </div>
  );
};

export default DSTCard;
