import React from 'react';

const NAAC = () => {
  return (
    <div className="bg-gray-100 px-4 sm:px-8 py-10 max-w-5xl mx-auto rounded-xl shadow-md my-8">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl font-bold text-center text-gray-800 mb-6">
        NAAC Accreditation
      </h2>

      {/* Description Paragraphs */}
      <div className="space-y-4 text-gray-700 text-sm sm:text-base leading-relaxed text-justify">
        <p>
          Dr. APJ Abdul Kalam Women’s Institute of Technology is proudly recognized by the{" "}
          <strong>National Assessment and Accreditation Council (NAAC)</strong>, an autonomous body established by the{" "}
          <strong>University Grants Commission (UGC)</strong> to ensure quality in higher education institutions across India.
        </p>

        <p>
          NAAC accreditation is a mark of excellence. It evaluates institutions on key parameters such as curriculum,
          teaching-learning processes, infrastructure, research, innovation, student support, and governance.
          The aim is to promote a culture of continuous improvement and accountability in education.
        </p>

        <p>
          To assess our college, a <strong>NAAC Peer Team</strong> visited the campus. The team consisted of senior
          academicians and experts from various institutions. During their visit, they interacted with faculty members,
          students, administrative staff, and management. They also inspected classrooms, laboratories, library, and other
          facilities to get a complete understanding of the academic environment.
        </p>

        <p>
          The peer team’s observations and evaluations played a vital role in the final accreditation status.
          Their visit reinforced our commitment to maintaining high academic standards and enhancing the overall
          quality of education for our students.
        </p>

        <p>
          NAAC recognition not only reflects our college's dedication to excellence but also motivates us to continuously
          strive for better outcomes in all aspects of higher education.
        </p>
      </div>
    </div>
  );
};

export default NAAC;

