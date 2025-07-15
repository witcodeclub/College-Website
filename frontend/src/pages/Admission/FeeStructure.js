import React from "react";

function FeeStructure() {
  return (
    <div className="bg-green-50 p-4 sm:p-10 max-w-5xl mx-auto rounded-xl shadow-lg mt-12">
      <h1 className="bg-[#1B3B6F] text-white text-lg sm:text-2xl font-semibold text-center py-4 rounded-t-xl">
        Fee Structure
      </h1>

      {/* Academic Fee Table */}
      <div className="mt-6">
        <table className="w-full border border-gray-300 text-xs sm:text-sm table-fixed">
          <thead>
            <tr>
              <th className="bg-green-600 text-white py-2 px-1 sm:px-3 border break-words">S.No</th>
              <th className="bg-green-600 text-white py-2 px-1 sm:px-3 border break-words">Particulars</th>
              <th className="bg-green-600 text-white py-2 px-1 sm:px-3 border break-words">B.Tech (Annual)</th>
              <th className="bg-green-600 text-white py-2 px-1 sm:px-3 border break-words">MCA (Per Semester)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="text-center">
              <td className="border p-1 sm:p-2">1</td>
              <td className="border p-1 sm:p-2">Annual Fee</td>
              <td className="border p-1 sm:p-2">₹30,000/-</td>
              <td className="border p-1 sm:p-2">Annual Fee</td>
            </tr>
            <tr className="text-center">
              <td className="border p-1 sm:p-2">2</td>
              <td className="border p-1 sm:p-2">Tuition Fee</td>
              <td className="border p-1 sm:p-2">₹42,000/-</td>
              <td className="border p-1 sm:p-2">-</td>
            </tr>
            <tr className="text-center">
              <td className="border p-1 sm:p-2">3</td>
              <td className="border p-1 sm:p-2">Miscellaneous</td>
              <td className="border p-1 sm:p-2">₹8,000/-</td>
              <td className="border p-1 sm:p-2">₹20,000/-</td>
            </tr>
            <tr className="text-center">
              <td className="border p-1 sm:p-2">4</td>
              <td className="border p-1 sm:p-2">Examination Fee</td>
              <td className="border p-1 sm:p-2">₹1,000/-</td>
              <td className="border p-1 sm:p-2">-</td>
            </tr>
            <tr className="text-center font-semibold">
              <td className="border p-1 sm:p-2">Total</td>
              <td className="border p-1 sm:p-2"></td>
              <td className="border p-1 sm:p-2">₹81,000/-</td>
              <td className="border p-1 sm:p-2">₹20,000/-</td>
            </tr>
            <tr className="text-center">
              <td className="border p-1 sm:p-2">5</td>
              <td className="border p-1 sm:p-2">Caution Money (Refundable) (One-Time)</td>
              <td className="border p-1 sm:p-2">₹2,500/-</td>
              <td className="border p-1 sm:p-2">₹2,500/-</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Hostel Fee Section */}
      <h2 className="text-base sm:text-lg font-semibold text-[#1B3B6F] mt-6 mb-1">Hostel Fee</h2>
      <p className="text-gray-700 text-xs sm:text-sm mb-1">
        Lodging charges of <b>₹12,000/-</b> per annum for Institute Campus Hostel &{" "}
        <b>₹18,000/-</b> per annum for University Campus Hostel (400 meters away).
      </p>
      <p className="text-gray-700 text-xs sm:text-sm">
        Mess charges shall be borne by boarders on a monthly basis. Presently, it is <b>₹2,200/- per month</b> (subject to change as per inflation rate).
      </p>

      {/* Payment Details */}
      <h2 className="text-base sm:text-lg font-semibold text-[#1B3B6F] mt-6 mb-1">Payment Details</h2>
      <p className="text-gray-700 text-xs sm:text-sm mb-4">
        The institute accepts fees via <b>Demand Draft</b> in favor of{" "}
        <b>“W.I.T. LNMU Security Deposit”</b> payable at Darbhanga or through Electronic Fund Transfer
        (RTGS, NEFT, IMPS) as per the details below:
      </p>

      {/* Bank Details Table */}
      <table className="w-full border border-gray-300 text-xs sm:text-sm table-fixed">
        <thead>
          <tr>
            <th className="bg-green-600 text-white py-2 px-1 sm:px-3 border">S.No</th>
            <th className="bg-green-600 text-white py-2 px-1 sm:px-3 border">Particulars</th>
            <th className="bg-green-600 text-white py-2 px-1 sm:px-3 border">Details</th>
          </tr>
        </thead>
        <tbody>
          <tr className="text-center">
            <td className="border p-1 sm:p-2">1</td>
            <td className="border p-1 sm:p-2">Account Holder Name</td>
            <td className="border p-1 sm:p-2">W.I.T. LNMU Security Deposit</td>
          </tr>
          <tr className="text-center">
            <td className="border p-1 sm:p-2">2</td>
            <td className="border p-1 sm:p-2">Bank Name</td>
            <td className="border p-1 sm:p-2">Punjab National Bank</td>
          </tr>
          <tr className="text-center">
            <td className="border p-1 sm:p-2">3</td>
            <td className="border p-1 sm:p-2">Branch</td>
            <td className="border p-1 sm:p-2">LNMU Campus, Kameshwara Nagar, Darbhanga</td>
          </tr>
          <tr className="text-center">
            <td className="border p-1 sm:p-2">4</td>
            <td className="border p-1 sm:p-2">Account Number</td>
            <td className="border p-1 sm:p-2">0108032100000241</td>
          </tr>
          <tr className="text-center">
            <td className="border p-1 sm:p-2">5</td>
            <td className="border p-1 sm:p-2">IFSC Code</td>
            <td className="border p-1 sm:p-2">PUNB0622700</td>
          </tr>
        </tbody>
      </table>

      {/* Lateral Entry Info */}
      <h2 className="text-base sm:text-lg font-semibold text-[#1B3B6F] mt-6 mb-1">Lateral Entry</h2>
      <p className="text-gray-700 text-xs sm:text-sm">
        Admission through <b>Lateral Entry</b> in the <b>second year</b> of B.Tech (CSE & IT) is also allowed for <b>diploma holders</b> in relevant programs.
      </p>
    </div>
  );
}

export default FeeStructure;

