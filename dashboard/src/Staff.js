import React, { useState } from 'react';

const Staff = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const officeModules = [
    {
      id: 'finance',
      title: 'Finance Section',
      description: 'Manage fee records, salary processing, and budget reports.',
    },
    {
      id: 'admission',
      title: 'Admission Desk',
      description: 'View applications, verify documents, and track admissions.',
    },
    {
      id: 'documents',
      title: 'Document Handling',
      description: 'Maintain records, generate certificates, and ID cards.',
    },
    {
      id: 'meetings',
      title: 'Meeting Schedule',
      description: 'Track upcoming office meetings and events.',
    },
    {
      id: 'fee-status',
      title: 'Fee Status Reports',
      description: 'Check fee payments, dues, and generate reports.',
    },
    {
      id: 'help-desk',
      title: 'Help Desk Queries',
      description: 'Respond to student/staff queries and requests.',
    },
  ];

  const navLinks = [
    { href: '#finance', label: 'Finance' },
    { href: '#admission', label: 'Admission' },
    { href: '#documents', label: 'Documents' },
    { href: '#meetings', label: 'Meetings' },
    { href: '#fee-status', label: 'Fee Reports' },
    { href: '#help-desk', label: 'Help Desk' },
  ];

  const cardColors = [
    'bg-blue-600',
    'bg-green-600',
    'bg-indigo-600',
    'bg-purple-600',
    'bg-teal-600',
    'bg-rose-600',
  ];

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-gray-100 font-sans text-white">

      {/* 🔹 Top Navbar for Mobile */}
      <div className="bg-slate-800 text-white p-4 flex justify-between items-center md:hidden">
        <h2 className="text-lg font-bold">Staff Panel</h2>
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="text-white text-2xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* 🔹 Sidebar */}
      <aside
        className={`bg-slate-800 text-white w-full md:w-56 p-6 shadow-lg z-10 md:fixed md:top-0 md:bottom-0 md:left-0 ${
          menuOpen ? 'block' : 'hidden'
        } md:block`}
      >
        <div className="flex flex-col justify-between h-full">
          <div>
            <h2 className="text-xl font-bold text-center mb-8 hidden md:block">Staff Panel</h2>
            <nav className="space-y-4 text-sm">
              {navLinks.map((link, idx) => (
                <a key={idx} href={link.href} className="block hover:text-yellow-400">
                  {link.label}
                </a>
              ))}
            </nav>
          </div>
          <button
            onClick={() => {
              localStorage.clear();
              window.location.href = 'http://localhost:3000/login';
            }}
            className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white font-semibold w-full mt-6"
          >
            Logout
          </button>
        </div>
      </aside>

      {/* 🔹 Main Content */}
      <main className="md:ml-56 flex-1 p-4 sm:p-6 space-y-6 text-gray-900 mt-4 md:mt-0">
        {/* Welcome Message */}
        <section className="bg-indigo-200 p-4 sm:p-6 rounded-xl shadow text-center text-gray-800">
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">Welcome, Office Staff!</h1>
          <p className="text-sm sm:text-base">
            Dr. APJ Abdul Kalam Women's Institute of Technology
          </p>
        </section>

       {/* Cards Grid */}
<section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:min-h-[60vh]">
  {officeModules.map((module, idx) => (
    <div
      key={idx}
      id={module.id}
      className={`p-5 rounded-xl shadow-md ${cardColors[idx % cardColors.length]} transition-transform hover:scale-[1.02] duration-200 flex flex-col justify-between`}
    >
      <div>
        <h3 className="text-lg font-semibold mb-2 text-white">
          {module.title}
        </h3>
        <p className="text-sm text-gray-100 mb-4">{module.description}</p>
      </div>
      <button className="bg-white text-black px-4 py-2 rounded font-semibold hover:bg-gray-200">
        Open
      </button>
    </div>
  ))}
</section>

      </main>
    </div>
  );
};

export default Staff;


