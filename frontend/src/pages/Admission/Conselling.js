import React from "react";

function Counselling() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-8 text-gray-800">
      <h1 className="text-center text-xl sm:text-2xl font-bold text-[#2c3e50] mb-6">
        Counselling & Admission
      </h1>

      {/* Overview Section */}
      <div className="bg-green-50 p-4 sm:p-6 mb-6 border-l-4 border-[#2c3e50] rounded-lg">
        <h2 className="text-[#2c3e50] text-lg sm:text-xl font-semibold mb-2">Overview</h2>
        <p className="text-sm sm:text-base mb-2 leading-relaxed">
          The counselling process is conducted for candidates who qualify for admission based on the entrance exam.
          It includes seat allocation, document verification, and final admission confirmation.
        </p>
        <p className="text-sm sm:text-base font-semibold">
          <strong>Venue:</strong> APJ Abdul Kalam Women's Institute of Technology
        </p>
      </div>

      {/* Admission Procedure */}
      <div className="bg-green-50 p-4 sm:p-6 mb-6 border-l-4 border-[#2c3e50] rounded-lg">
        <h2 className="text-[#2c3e50] text-lg sm:text-xl font-semibold mb-2">Admission Procedure</h2>
        <ol className="list-decimal ml-5 text-sm sm:text-base leading-relaxed space-y-2">
          <li><strong>Seat Allotment (Online):</strong> Conducted through the Bihar portal based on merit.</li>
          <li><strong>Document Verification:</strong> Candidates must present original documents for verification.</li>
          <li><strong>Fee Payment:</strong> Required fees must be paid to confirm admission.</li>
          <li><strong>Final Admission Confirmation:</strong> Once all steps are complete, admission is granted.</li>
        </ol>
      </div>

      {/* Required Documents */}
      <div className="bg-green-50 p-4 sm:p-6 mb-6 border-l-4 border-[#2c3e50] rounded-lg">
        <h2 className="text-[#2c3e50] text-lg sm:text-xl font-semibold mb-2">Required Documents</h2>
        <ul className="list-disc ml-5 text-sm sm:text-base leading-relaxed space-y-1">
          <li>CAT-2024 Admit Card (Original)</li>
          <li>Matriculation Mark Sheet & Certificate</li>
          <li>+2 / I.Sc. Mark Sheet, Certificate & Admit Card</li>
          <li>Migration Certificate (if applicable)</li>
          <li>College/School Leaving Certificate</li>
          <li>Character Certificate</li>
          <li>Caste Certificate (For reserved category candidates)</li>
          <li>Residential Certificate</li>
          <li>Photocopy of Certificate for University Ward / NRI Quota</li>
        </ul>
        <p className="text-red-600 text-sm mt-2 italic">
          <strong>Note:</strong> Original documents will be returned after verification.
        </p>
      </div>

      {/* Important Dates */}
      <div className="bg-green-50 p-4 sm:p-6 mb-6 border-l-4 border-[#2c3e50] rounded-lg">
        <h2 className="text-[#2c3e50] text-lg sm:text-xl font-semibold mb-2">Important Dates</h2>
        <ul className="list-disc ml-5 text-sm sm:text-base leading-relaxed space-y-1">
          <li><strong>Seat Allotment Result:</strong> [To be announced]</li>
          <li><strong>Document Verification:</strong> [To be announced]</li>
          <li><strong>Final Admission Confirmation:</strong> [To be announced]</li>
        </ul>
      </div>
    </div>
  );
}

export default Counselling;

