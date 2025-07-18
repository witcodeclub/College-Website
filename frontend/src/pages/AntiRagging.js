import React from "react";

const AntiRagging = () => {
  return (
    <div className="bg-gray-100 min-h-screen px-4 py-10">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl md:text-5xl text-center text-green-800 font-bold border-b-4 border-green-700 inline-block pb-2 mb-8">
          Anti-Ragging Policy
        </h1>

        <div className="bg-white rounded-lg shadow-md p-6 sm:p-10 text-gray-800 text-lg leading-relaxed">
          <p className="mb-4">
            At <strong>Dr. APJ Abdul Kalam Women’s Institute Of Technology, Darbhanga</strong>, we maintain a strict zero-tolerance policy against ragging.
            We ensure a safe and supportive environment for all students, especially freshers.
          </p>
          <p className="mb-4">
            Ragging in any form—physical, verbal, or psychological—is strictly prohibited and punishable by law.
          </p>

          <p className="font-semibold mb-2">Our preventive measures include:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>✅ Dedicated anti-ragging committee & helpline</li>
            <li>✅ Awareness programs and counseling</li>
            <li>✅ Anonymous complaint submission system</li>
            <li>✅ Monitoring through student volunteers and CCTV</li>
          </ul>

          <div className="mt-8 text-center">
            <img
              src="/images/anti-ragging.jpg"
              alt="Anti Ragging Awareness"
              className="w-full max-w-xl mx-auto rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AntiRagging;

