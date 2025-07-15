import React from "react";

function Reservation() {
  return (
    <div className="bg-green-50 px-4 py-10 md:px-8 rounded-xl shadow-lg max-w-5xl mx-auto">
      <h1 className="text-white bg-[#1B3B6F] text-xl sm:text-2xl font-bold text-center py-4 rounded-t-lg">
        Reservation of Seats
      </h1>

      <p className="text-sm sm:text-base text-gray-700 mt-4">
        Reservation of seats for permanent resident/native/domicile of Bihar
        shall be made as per existing rules of Govt. of Bihar.
      </p>

      <div className="overflow-x-auto mt-6">
        <table className="w-full border border-gray-300 text-sm sm:text-base text-left">
          <thead>
            <tr>
              <th className="bg-green-600 text-white p-3 border border-gray-300">
                Category
              </th>
              <th className="bg-green-600 text-white p-3 border border-gray-300">
                Percentage
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-green-100">
              <td className="p-3 border border-gray-300">
                Economically Weaker Section (EWS)
              </td>
              <td className="p-3 border border-gray-300">10%</td>
            </tr>
            <tr className="hover:bg-green-100">
              <td className="p-3 border border-gray-300">Backward Class (BC)</td>
              <td className="p-3 border border-gray-300">15%</td>
            </tr>
            <tr className="hover:bg-green-100">
              <td className="p-3 border border-gray-300">
                Extremely Backward Class (EBC)
              </td>
              <td className="p-3 border border-gray-300">18%</td>
            </tr>
            <tr className="hover:bg-green-100">
              <td className="p-3 border border-gray-300">Scheduled Caste (SC)</td>
              <td className="p-3 border border-gray-300">16%</td>
            </tr>
            <tr className="hover:bg-green-100">
              <td className="p-3 border border-gray-300">Scheduled Tribes (ST)</td>
              <td className="p-3 border border-gray-300">1%</td>
            </tr>
            <tr className="hover:bg-green-100">
              <td className="p-3 border border-gray-300">
                NRI/Payment Quota Seats
              </td>
              <td className="p-3 border border-gray-300">10%</td>
            </tr>
            <tr className="hover:bg-green-100">
              <td className="p-3 border border-gray-300">
                Wards of Permanent Employees of LNMU
              </td>
              <td className="p-3 border border-gray-300">5%</td>
            </tr>
          </tbody>
        </table>
      </div>

      <p className="text-sm sm:text-base text-gray-700 mt-6">
        Candidates belonging to reserved category and selected under General
        category will not be treated/count under reserved quota.
      </p>
    </div>
  );
}

export default Reservation;
