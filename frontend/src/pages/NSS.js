import React, { useEffect, useState } from "react";

function NSS() {
  const activities = [
    "🌱 Plantation programme in and around the campus",
    "🧨 Blood donation camp",
    "👧 Save girl child campaign",
    "🗳️ National Voters Day rally",
    "🎗️ International AIDS Day rally",
    "👁️ Eye camp and health check-up camp",
    "🏡 Adopted a village",
    "🥗 Health programme and 'Poshan Mah'",
    "🌍 Environmental programme - 7 Days Special Camp",
    "🧭 Orientation programme",
    "🧹 Swachh Bharat Abhiyan",
  ];

  const [visible, setVisible] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  useEffect(() => {
    setTimeout(() => setVisible(true), 100);
  }, []);

  return (
    <div className={`font-sans p-5 bg-gradient-to-br from-blue-50 to-blue-100 transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
      {/* Header */}
      <div className="text-center p-6 rounded-lg bg-blue-900 text-white shadow-xl">
        <h1 className="text-3xl font-bold">National Service Scheme (NSS)</h1>
        <p className="text-lg mt-2">Serving Society, Building the Nation</p>
      </div>

      {/* Intro */}
      <div className="px-6 py-5 leading-relaxed text-base">
        <p className="text-justify">
          <strong>National Service Scheme (NSS)</strong> is a Central Sector Scheme of the Government of India, under the Ministry of Youth Affairs & Sports. It was launched in 1969 to promote a spirit of voluntary community service among student youth. The scheme aims to develop the <strong>personality and character</strong> of students by involving them in activities that contribute positively to society.
        </p>
        <p className="text-justify mt-4">
          At <strong>Dr. APJ Abdul Kalam Women’s Institute of Technology</strong>, the NSS Unit actively engages students in community-oriented projects that build a sense of responsibility, teamwork, and compassion. Guided by the motto <strong>"Not Me, But You"</strong>, students participate in health awareness drives, environmental initiatives, rural outreach, disaster relief, and civic campaigns, contributing meaningfully while gaining leadership and real-world experience.
        </p>
      </div>

      {/* Activities */}
      <h2 className="text-center text-blue-900 text-2xl font-semibold mt-6">Activities We Conduct</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 p-5">
        {activities.map((act, index) => (
          <div
            key={index}
            className={`bg-white border-l-4 border-blue-900 p-4 rounded-md shadow-md transform transition-all duration-500 ease-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-5'}`}
            style={{ transitionDelay: `${index * 100}ms` }}
          >
            {act}
          </div>
        ))}
      </div>

      {/* Gallery */}
      <h2 className="text-center text-blue-900 text-2xl font-semibold mt-10">Gallery</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-5">
        {[...Array(12).keys()].map((num, index) => (
          <div
            key={num}
            onClick={() => setModalImage(`/images/nss${num + 1}.jpg`)}
            className={`cursor-pointer rounded-lg overflow-hidden bg-white shadow-md transform transition-transform duration-500 hover:scale-105 ${visible ? 'translate-y-0' : 'translate-y-6'}`}
            style={{ transitionDelay: `${index * 120 + 400}ms` }}
          >
            <img
              src={`/images/nss${num + 1}.jpg`}
              alt={`NSS ${num + 1}`}
              className="w-full h-40 object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {modalImage && (
        <div
          onClick={() => setModalImage(null)}
          className="fixed top-0 left-0 w-screen h-screen bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-zoom-out"
        >
          <img
            src={modalImage}
            alt="Preview"
            className="max-w-[90%] max-h-[90%] rounded-lg shadow-2xl"
          />
        </div>
      )}

      {/* Contact */}
      <h2 className="text-center text-blue-900 text-2xl font-semibold mt-10">Contact Us</h2>
      <div className="bg-white max-w-xl mx-auto rounded-xl p-6 shadow-lg text-center text-base leading-relaxed">
        <p>
          📍 NSS Office, Dr. APJ Abdul Kalam Women's Institute Of Technology
        </p>

        {/* Social Media Icons */}
        <div className="mt-6 flex justify-center gap-8">
          <a
            href="https://www.facebook.com/people/Nss-Wing-Wit/100085855867819/?rdid=rM5sCl0SOlj2spGs&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1ZCsgLqdTt%2F"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-blue-600 font-bold text-base hover:underline"
          >
            <span className="text-xl">🔵</span> Facebook
          </a>

          <a
            href="https://www.instagram.com/nsswing.wit/?igsh=ZGt4enRuZGpsNTRt#"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-pink-600 font-bold text-base hover:underline"
          >
            <span className="text-xl">📷</span> Instagram
          </a>
        </div>
      </div>
    </div>
  );
}

export default NSS;

