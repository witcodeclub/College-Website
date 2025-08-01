import React from "react";

function Eligibility() {
  return (
    <div className="bg-[#e6f2e6] px-4 py-8 sm:p-10 max-w-4xl mx-auto rounded-xl shadow-md mt-6">
      <h1 className="text-xl sm:text-3xl font-bold text-center text-[#1B3B6F] mb-6">
        Eligibility Criteria
      </h1>

      <p className="text-sm sm:text-base text-gray-800 leading-relaxed mb-4 text-justify">
        Admission to the four-year B.Tech course in IT and CS Engineering for the Academic Session is open to all girls, women, and students who have passed one of the following:
      </p>

      <ul className="list-disc ml-6 text-sm sm:text-base text-gray-800 space-y-4">
        <li>
          <b>Academic Requirements:</b> Must have passed either 10+2 or an equivalent exam from a recognized university, board, or council with:
          <ul className="list-disc ml-6 mt-2 space-y-1">
            <li>Physics, Chemistry, Mathematics, and English (PCMD)</li>
            <li>Physics, Chemistry, Mathematics, Biology, and English (PCMDE)</li>
          </ul>
        </li>

        <li>
          <b>Minimum Marks Requirement:</b> Candidates must have at least <b>45% aggregate marks</b> in PCM (Physics, Chemistry, and Mathematics) together. <br />
          <b>Reserved category candidates</b> must have at least <b>40%</b> in PCM.
        </li>

        <li>
          <b>English Requirement:</b> Students should have passed English at the 10+2 level.
        </li>

        <li>
          <b>Eligibility for Entrance Exam:</b> Candidates appearing in the qualifying exam are eligible to appear in the <b>Combined Admission Test (CAT 2022)</b>.
        </li>
      </ul>
    </div>
  );
}

export default Eligibility;
