import React from 'react';

const Staff = () => {
  const officeModules = [
    { title: 'Finance Section', description: 'Manage fee records, salary processing, and budget reports.' },
    { title: 'Admission Desk', description: 'View application data, verify documents, and track new admissions.' },
    { title: 'Document Handling', description: 'Maintain student/staff records, generate certificates and ID cards.' },
    { title: 'Meeting Schedule', description: 'Upcoming office meetings and events in the academic calendar.' },
    { title: 'Fee Status Reports', description: 'Check fee payment statuses, dues and generate monthly reports.' },
    { title: 'Help Desk Queries', description: 'Respond to student queries and requests from the online help desk.' },
  ];

  const cardColors = [
    'bg-[#2c3e50]',
    'bg-[#34495e]',
    'bg-[#3b3b58]',
    'bg-[#22313f]',
    'bg-[#2f3640]',
    'bg-[#3d3d5c]',
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-6 text-gray-900 font-sans">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Welcome, Office Staff!</h1>
        <button className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded font-bold">
          Logout
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6">
        {officeModules.map((module, idx) => (
          <div
            key={idx}
            className={`w-full sm:w-[47%] p-5 rounded-xl shadow-md text-white flex flex-col justify-between ${cardColors[idx % cardColors.length]}`}
          >
            <div>
              <h3 className="text-lg font-semibold mb-2">{module.title}</h3>
              <p className="text-sm text-gray-200">{module.description}</p>
            </div>
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded font-semibold w-fit">
              Open
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Staff;
