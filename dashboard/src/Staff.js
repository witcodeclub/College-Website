import React, { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = 'http://localhost:3001/api/auth';

const Staff = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [staffData, setStaffData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    let redirectTimeout = null;

    // Check for token in URL hash (from login redirect)
    const hash = window.location.hash;
    if (hash && hash.includes('token=')) {
      const tokenFromHash = decodeURIComponent(hash.split('token=')[1].split('&')[0]);
      console.log('✅ Token found in URL hash, storing in localStorage');
      localStorage.setItem('token', tokenFromHash);
      // Clear the hash from URL
      window.history.replaceState(null, '', window.location.pathname);
    }

    const fetchStaffProfile = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('=== Staff Dashboard Load Debug ===');
        console.log('Token exists:', !!token);
        
        if (!token) {
          console.log('❌ No token found, redirecting to login');
          if (isMounted) {
            redirectTimeout = setTimeout(() => {
              window.location.href = 'http://localhost:3000/login';
            }, 2000);
          }
          return;
        }

        console.log('Fetching staff profile from:', `${API_URL}/profile`);
        console.log('Request headers:', {
          'Authorization': `Bearer ${token.substring(0, 20)}...`
        });
        
        const response = await axios.get(`${API_URL}/profile`, {
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
          timeout: 15000,
          withCredentials: false
        });

        console.log('Profile response:', response.data);
        if (isMounted && response.data.success) {
          setStaffData(response.data.user);
          setLoading(false);
        } else if (isMounted) {
          setError('Failed to load staff profile');
          setLoading(false);
        }
      } catch (err) {
        console.error('Error fetching staff profile:', err);
        console.error('Error response:', err.response?.data);
        console.error('Error status:', err.response?.status);
        
        if (!isMounted) return;
        
        if (err.response?.status === 401 || err.response?.status === 403) {
          console.log('❌ Unauthorized, clearing token and redirecting');
          localStorage.clear();
          redirectTimeout = setTimeout(() => {
            window.location.href = 'http://localhost:3000/login';
          }, 2000);
        } else if (err.request) {
          console.error('Network error details:', {
            message: err.message,
            code: err.code,
            request: err.request
          });
          setError(`Cannot connect to server at ${API_URL}/profile. Please check if the backend is running on port 3001. Error: ${err.message}`);
          setLoading(false);
        } else {
          setError(`Failed to load staff profile: ${err.message}`);
          setLoading(false);
        }
      }
    };

    fetchStaffProfile();

    return () => {
      isMounted = false;
      if (redirectTimeout) {
        clearTimeout(redirectTimeout);
      }
    };
  }, []);

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
        {loading ? (
          <div className="flex items-center justify-center min-h-screen">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading profile...</p>
            </div>
          </div>
        ) : error ? (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        ) : (
          <>
            {/* Welcome Message */}
            <section className="bg-indigo-200 p-4 sm:p-6 rounded-xl shadow text-center text-gray-800">
              <h1 className="text-2xl sm:text-3xl font-bold mb-2">
                Hi {staffData?.name || 'Staff'}!
              </h1>
              <p className="text-sm sm:text-base">
                Dr. APJ Abdul Kalam Women's Institute of Technology
              </p>
              {staffData && (
                <div className="mt-4 text-sm">
                  <p><strong>Email:</strong> {staffData.email}</p>
                  <p><strong>Role:</strong> {staffData.role}</p>
                </div>
              )}
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

          </>
        )}
      </main>
    </div>
  );
};

export default Staff;


