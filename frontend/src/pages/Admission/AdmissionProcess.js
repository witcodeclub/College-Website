import React from 'react';

function AdmissionProcess() {
  return (
    <div className="bg-[#eef2f5] py-8 px-4 sm:px-10">
      <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-10">
        <h2 className="text-center text-xl sm:text-2xl font-bold text-[#2c3e50] mb-6">
          Admission Process
        </h2>

        <p className="text-sm sm:text-base text-gray-800 mb-4 text-justify">
          Dr. APJ Abdul Kalam Women’s Institute of Technology offers admission into its B.Tech programs through a structured and transparent process. Admissions are offered through:
        </p>

        <ul className="list-disc ml-6 text-sm sm:text-base text-gray-800 mb-6 space-y-1">
          <li><strong>BCECE Board</strong> (Government of Bihar)</li>
          <li><strong>Combined Admission Test (CAT)</strong> conducted by the Institute</li>
        </ul>

        <h3 className="text-base sm:text-lg font-semibold text-[#34495e] mt-4 mb-2">
          1. Admission through BCECE Board
        </h3>
        <p className="text-sm sm:text-base text-gray-800 mb-2 text-justify">
          The majority of the seats are filled through the <strong>BCECE Board</strong>, Patna. Candidates are required to register for counselling via the official BCECE website. Seat allotment is done based on JEE (Main) rank and category reservation guidelines set by the Government of Bihar.
        </p>
        <p className="text-sm sm:text-base text-gray-800 mb-4 text-justify">
          Once a seat is allotted, the candidate has to report to the college for further admission formalities, including branch confirmation and fee payment.
        </p>

        <h3 className="text-base sm:text-lg font-semibold text-[#34495e] mt-4 mb-2">
          2. Admission through CAT (Institute-Level)
        </h3>
        <p className="text-sm sm:text-base text-gray-800 mb-2 text-justify">
          The institute also conducts its own <strong>Combined Admission Test (CAT)</strong> to fill a limited number of seats. This is a separate entrance test conducted for eligible students seeking direct admission.
        </p>
        <p className="text-sm sm:text-base text-gray-800 mb-4 text-justify">
          The <strong>application form is available online</strong> on the official college website. Students must fill and submit the form before the deadline. Admit cards are issued digitally, and the examination is conducted at the college campus.
        </p>

        <h3 className="text-base sm:text-lg font-semibold text-[#34495e] mt-4 mb-2">
          3. Merit List & Result Publication
        </h3>
        <p className="text-sm sm:text-base text-gray-800 mb-4 text-justify">
          After the CAT exam, a <strong>merit list</strong> is prepared and published on the official website. Students can check their result and rank online. Shortlisted candidates are then invited for the counselling process.
        </p>

        <h3 className="text-base sm:text-lg font-semibold text-[#34495e] mt-4 mb-2">
          4. Counselling & Admission
        </h3>
        <p className="text-sm sm:text-base text-gray-800 mb-2 text-justify">
          Qualified candidates are called for an <strong>offline counselling session</strong> at the college. Here, verification of eligibility is done, branch preferences are recorded, and admission is confirmed based on merit and seat availability.
        </p>
        <p className="text-sm sm:text-base text-gray-800 mb-4 text-justify">
          After successful counselling, students proceed to complete admission by <strong>paying the required fees</strong>. Once the payment is verified, <strong>branch allocation</strong> is finalized and students receive their admission confirmation.
        </p>

        <h3 className="text-base sm:text-lg font-semibold text-[#34495e] mt-4 mb-2">
          Important Points
        </h3>
        <ul className="list-disc ml-6 text-sm sm:text-base text-gray-800 space-y-1">
          <li>All admission-related updates are published on the official website.</li>
          <li>The CAT application form and admit card are provided <strong>only online</strong>.</li>
          <li>Admission is strictly based on <strong>merit, eligibility, and availability</strong> of seats.</li>
        </ul>

        <p className="text-sm sm:text-base text-gray-800 mt-6 text-justify">
          For the latest notifications, eligibility details, and important dates, please visit the <strong>official website</strong> of the institute regularly or contact the admission cell.
        </p>
      </div>
    </div>
  );
}

export default AdmissionProcess;

