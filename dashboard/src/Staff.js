import React from 'react';
import { Link } from 'react-router-dom'; // ✅ Imported Link

const Staff = () => {
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
    <div className="flex min-h-screen bg-gray-100 font-sans text-white">
      {/* Sidebar */}
      <aside className="w-56 bg-slate-800 h-screen p-6 fixed top-0 left-0 flex flex-col justify-between">
        <div>
          <h2 className="text-xl font-bold text-center mb-8">Staff Panel</h2>
          <nav className="space-y-4 text-sm">
            {navLinks.map((link, idx) => (
              <a key={idx} href={link.href} className="block hover:text-yellow-400">
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        {/* ✅ Linked Logout */}
        <Link
          to="/"
          className="bg-red-500 hover:bg-red-600 px-4 py-2 rounded text-white font-semibold text-center"
        >
          Logout
        </Link>
      </aside>

      {/* Main content */}
      <main className="ml-56 flex-1 p-6 space-y-6 text-gray-900">
        {/* Welcome Message */}
        <section className="bg-indigo-200 p-6 rounded shadow text-center text-gray-800">
          <h1 className="text-3xl font-bold mb-2">Welcome, Office Staff!</h1>
          <p className="text-lg">
            Dr. APJ Abdul Kalam Women's Institute of Technology
          </p>
        </section>

        {/* Cards Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {officeModules.map((module, idx) => (
            <div
              key={idx}
              id={module.id}
              className={`p-5 rounded-xl shadow-md ${cardColors[idx % cardColors.length]}`}
            >
              <h3 className="text-lg font-semibold mb-2 text-white">
                {module.title}
              </h3>
              <p className="text-sm text-gray-100 mb-4">{module.description}</p>
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
