import React from "react";

function EntranceExam() {
  return (
    <div className="px-4 py-8 md:px-12 font-sans leading-relaxed">
      <h1 className="text-xl sm:text-2xl font-bold text-center text-gray-800 mb-6">
        Entrance Exam
      </h1>

      {/* Application Form Section */}
      <section className="mb-8 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
        <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">
          Application Form Availability & Submission
        </h2>
        <p className="text-sm md:text-base mb-2">
          Only through <strong>DD NEFT</strong> drawn in favor of WIT, LNMU payable at Darbhanga (including cost of Application form & Entrance Exam Fee).
        </p>
        <p className="text-sm md:text-base mb-2">
          2 pages of application form & Admit card in two copies, one for office use & another as admit card is attached with this Information Brochure.
        </p>
        <p className="text-sm md:text-base mb-2">
          On paying a <strong>DD of Rs. 500/-</strong>, Information Brochure with application form is available at: <strong>DR. APJ ABDUL KALAM WOMEN'S INSTITUTE OF TECHNOLOGY</strong>.
        </p>
        <p className="text-sm md:text-base mb-2">
          Candidates can also request an application form by post with a <strong>DD of Rs. 550/-</strong> and a complete mailing address.
        </p>
        <p className="text-sm md:text-base mb-2">
          The form can also be downloaded from{" "}
          <a
            href="http://www.witlnmu.ac.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:underline"
          >
            www.witlnmu.ac.in
          </a>{" "}
          (DD of Rs. 550/- required for submission).
        </p>

        <h3 className="text-md font-semibold text-[#2c3e50] mt-4 mb-1">
          Submission of Application Form
        </h3>
        <p className="text-sm md:text-base mb-2">
          The duly filled form, along with two copies of the admit card and proper enclosures, should be submitted by hand or by registered post before the deadline.
        </p>

        <h3 className="text-md font-semibold text-[#2c3e50] mt-4 mb-1">Admit Card</h3>
        <p className="text-sm md:text-base">
          Admit Cards will be sent by Registered/Speed Post. If not received, candidates must collect a duplicate Admit Card at APJAKWIT before the exam day.
        </p>
      </section>

      {/* Syllabus for B.Tech Entrance */}
      <section className="mb-8 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
        <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">
          Syllabus for B.Tech Entrance Test (CAT-2025)
        </h2>

        <h3 className="text-md font-semibold text-[#16a085] mt-3">Mathematics</h3>
        <ul className="list-disc ml-5 text-sm md:text-base space-y-1">
          <li>Sets and Functions</li>
          <li>Algebra, Coordinate Geometry, Calculus</li>
          <li>Mathematical Reasoning</li>
          <li>Statistics & Probability</li>
        </ul>

        <h3 className="text-md font-semibold text-[#16a085] mt-4">Physics</h3>
        <ul className="list-disc ml-5 text-sm md:text-base space-y-1">
          <li>Kinematics, Laws of Motion</li>
          <li>Work, Energy, and Power</li>
          <li>Electrostatics, Current Electricity</li>
          <li>Magnetic Effects of Current and Magnetism</li>
        </ul>

        <h3 className="text-md font-semibold text-[#16a085] mt-4">Chemistry</h3>
        <ul className="list-disc ml-5 text-sm md:text-base space-y-1">
          <li>Structure of Atom, Periodic Table</li>
          <li>Chemical Bonding & Molecular Structure</li>
          <li>Solid State, Solutions, Electrochemistry</li>
          <li>Biomolecules, Polymers</li>
        </ul>
      </section>

      {/* Syllabus for MCA */}
      <section className="mb-8 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
        <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">Syllabus for MCA Entrance Test</h2>

        <h3 className="text-md font-semibold text-[#16a085] mt-3">Mathematics (50 Questions)</h3>
        <ul className="list-disc ml-5 text-sm md:text-base space-y-1">
          <li>Set Theory</li>
          <li>Algebra & Probability</li>
          <li>Vectors & Calculus</li>
        </ul>

        <h3 className="text-md font-semibold text-[#16a085] mt-4">Computer Awareness (25 Questions)</h3>
        <ul className="list-disc ml-5 text-sm md:text-base space-y-1">
          <li>Computer Basics</li>
          <li>Data Representation</li>
          <li>Boolean Algebra</li>
        </ul>

        <h3 className="text-md font-semibold text-[#16a085] mt-4">General English (25 Questions)</h3>
        <ul className="list-disc ml-5 text-sm md:text-base space-y-1">
          <li>Comprehension</li>
          <li>Vocabulary</li>
          <li>Grammar</li>
        </ul>

        <h3 className="text-md font-semibold text-[#16a085] mt-4">
          Analytical Ability & Logical Reasoning (50 Questions)
        </h3>
      </section>

      {/* Syllabus for CAT */}
      <section className="mb-8 p-4 border border-gray-300 rounded-lg bg-white shadow-sm">
        <h2 className="text-lg font-semibold text-[#2c3e50] mb-2">Syllabus for CAT (Common Admission Test)</h2>

        <h3 className="text-md font-semibold text-[#16a085] mt-3">Quantitative Aptitude</h3>
        <ul className="list-disc ml-5 text-sm md:text-base space-y-1">
          <li>Number System</li>
          <li>Arithmetic (Percentages, Profit & Loss, Time & Work, etc.)</li>
          <li>Algebra</li>
          <li>Geometry & Mensuration</li>
          <li>Probability & Statistics</li>
        </ul>

        <h3 className="text-md font-semibold text-[#16a085] mt-4">Logical Reasoning & Data Interpretation</h3>
        <ul className="list-disc ml-5 text-sm md:text-base space-y-1">
          <li>Data Tables & Graphs</li>
          <li>Seating Arrangement</li>
          <li>Blood Relations</li>
          <li>Puzzles & Logical Sequences</li>
          <li>Syllogisms</li>
        </ul>

        <h3 className="text-md font-semibold text-[#16a085] mt-4">Verbal Ability & Reading Comprehension</h3>
        <ul className="list-disc ml-5 text-sm md:text-base space-y-1">
          <li>Reading Passages</li>
          <li>Para Jumbles</li>
          <li>Sentence Correction</li>
          <li>Vocabulary & Grammar</li>
        </ul>
      </section>
    </div>
  );
}

export default EntranceExam;

