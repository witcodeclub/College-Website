import React from "react";

function EntranceExam() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif", lineHeight: "1.6" , marginLeft: "30px"}}>
      <h1 style={{ textAlign: "center", color: "#333" }}>Entrance Exam</h1>

      {/* Application Form Section */}
      <section style={{ marginBottom: "30px" ,padding: "15px", border: "1px solid #ddd", borderRadius: "8px" }}>
        <h2 style={{ color: "#2c3e50" }}>Application Form Availability & Submission</h2>
        <p>
          Only through <strong>DD NEFT</strong> drawn in favor of WIT, LNMU payable at Darbhanga
          (including cost of Application form & Entrance Exam Fee).
        </p>
        <p>
          2 pages of application form & Admit card in two copies, one for office use & another as admit card
          is attached with this Information Brochure.
        </p>
        <p>
          On paying a <strong>DD of Rs. 500/-</strong>, Information Brochure with application form is available at:  
          <strong> DR. APJ ABDUL KALAM WOMEN'S INSTITUTE OF TECHNOLOGY</strong>.
        </p>
        <p>
          Candidates can also request an application form by post with a <strong>DD of Rs. 550/-</strong> and a complete mailing address.
        </p>
        <p>
          The form can also be downloaded from{" "}
          <a href="http://www.witlnmu.ac.in" target="_blank" rel="noopener noreferrer" style={{ color: "#007BFF", textDecoration: "none" }}>
            www.witlnmu.ac.in
          </a>{" "}
          (DD of Rs. 550/- required for submission).
        </p>
        <h3 style={{ color: "#2c3e50" }}>Submission of Application Form</h3>
        <p>
          The duly filled form, along with two copies of the admit card and proper enclosures,
          should be submitted by hand or by registered post before the deadline.
        </p>
        <h3 style={{ color: "#2c3e50" }}>Admit Card</h3>
        <p>
          Admit Cards will be sent by Registered/Speed Post. If not received, candidates must collect
          a duplicate Admit Card at APJAKWIT before the exam day.
        </p>
      </section>

      {/* Syllabus for B.Tech Entrance Exam */}
      <section style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "8px", marginBottom: "30px" }}>
        <h2 style={{ color: "#2c3e50" }}>Syllabus for B.Tech Entrance Test (CAT-2025)</h2>

        <h3 style={{ color: "#16a085" }}>Mathematics</h3>
        <ul>
          <li>Sets and Functions</li>
          <li>Algebra, Coordinate Geometry, Calculus</li>
          <li>Mathematical Reasoning</li>
          <li>Statistics & Probability</li>
        </ul>

        <h3 style={{ color: "#16a085" }}>Physics</h3>
        <ul>
          <li>Kinematics, Laws of Motion</li>
          <li>Work, Energy, and Power</li>
          <li>Electrostatics, Current Electricity</li>
          <li>Magnetic Effects of Current and Magnetism</li>
        </ul>

        <h3 style={{ color: "#16a085" }}>Chemistry</h3>
        <ul>
          <li>Structure of Atom, Periodic Table</li>
          <li>Chemical Bonding & Molecular Structure</li>
          <li>Solid State, Solutions, Electrochemistry</li>
          <li>Biomolecules, Polymers</li>
        </ul>
      </section>

      {/* Syllabus for MCA Entrance Exam */}
      <section style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "8px", marginBottom: "30px" }}>
        <h2 style={{ color: "#2c3e50" }}>Syllabus for MCA Entrance Test</h2>

        <h3 style={{ color: "#16a085" }}>Mathematics (50 Questions)</h3>
        <ul>
          <li>Set Theory</li>
          <li>Algebra & Probability</li>
          <li>Vectors & Calculus</li>
        </ul>

        <h3 style={{ color: "#16a085" }}>Computer Awareness (25 Questions)</h3>
        <ul>
          <li>Computer Basics</li>
          <li>Data Representation</li>
          <li>Boolean Algebra</li>
        </ul>

        <h3 style={{ color: "#16a085" }}>General English (25 Questions)</h3>
        <ul>
          <li>Comprehension</li>
          <li>Vocabulary</li>
          <li>Grammar</li>
        </ul>

        <h3 style={{ color: "#16a085" }}>Analytical Ability & Logical Reasoning (50 Questions)</h3>
      </section>

      {/* Syllabus for CAT (Common Admission Test) */}
      <section style={{ padding: "15px", border: "1px solid #ddd", borderRadius: "8px", marginBottom: "30px" }}>
        <h2 style={{ color: "#2c3e50" }}>Syllabus for CAT (Common Admission Test)</h2>

        <h3 style={{ color: "#16a085" }}>Quantitative Aptitude</h3>
        <ul>
          <li>Number System</li>
          <li>Arithmetic (Percentages, Profit & Loss, Time & Work, etc.)</li>
          <li>Algebra</li>
          <li>Geometry & Mensuration</li>
          <li>Probability & Statistics</li>
        </ul>

        <h3 style={{ color: "#16a085" }}>Logical Reasoning & Data Interpretation</h3>
        <ul>
          <li>Data Tables & Graphs</li>
          <li>Seating Arrangement</li>
          <li>Blood Relations</li>
          <li>Puzzles & Logical Sequences</li>
          <li>Syllogisms</li>
        </ul>

        <h3 style={{ color: "#16a085" }}>Verbal Ability & Reading Comprehension</h3>
        <ul>
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
