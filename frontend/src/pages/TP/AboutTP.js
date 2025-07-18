import React, { useEffect, useState } from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";
import { FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import CountUp from "react-countup";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend, ArcElement);

const barData = {
  labels: ["2017-18", "2018-19", "2019-20", "2020-21", "2021-22"],
  datasets: [
    {
      label: "Students Placed",
      data: [17, 21, 22, 21, 22],
      backgroundColor: "#4b55c0ff",
      borderRadius: 6,
    },
  ],
};

const barOptions = {
  responsive: true,
  plugins: {
    legend: { display: false },
    tooltip: {
      enabled: true,
    },
  },
  scales: {
    y: {
      beginAtZero: true,
      ticks: { stepSize: 5 },
    },
  },
};

const pieData = {
  labels: ["IT", "Core", "Consulting"],
  datasets: [
    {
      data: [50, 30, 20],
      backgroundColor: ["#FFA500", "#2020b2ff", "#72db70ff"],
      borderWidth: 1,
    },
  ],
};

const topRecruiters = [
  { name: "TCS", logo: "/images/tcs.png" },
  { name: "Wipro", logo: "/images/wipro.png" },
  { name: "Infosys", logo: "/images/infosys.png" },
  { name: "Capgemini", logo: "/images/cap.png" },
  { name: "Cognizant", logo: "/images/cognizant.png" },
];

export default function AboutTP() {
  return (
    <div className="px-4 md:px-20 py-10 bg-gray-50 min-h-screen">
      <h1 className="text-3xl md:text-5xl font-bold text-center mb-10 flex items-center justify-center gap-2">
        📊 Placement Dashboard
      </h1>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {[
          { title: "Total Companies", value: 20 },
          { title: "Total Offers", value: 45 },
          { title: "Highest Package (LPA)", value: 12 },
        ].map((card, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl py-6 px-4 flex flex-col items-center justify-center transition-transform hover:scale-105"
          >
            <h2 className="text-lg font-semibold text-gray-600 mb-2">
              {card.title}
            </h2>
            <p className="text-3xl font-bold text-indigo-600">
              <CountUp end={card.value} duration={2} suffix="+" />
            </p>
          </div>
        ))}
      </div>

{/* Charts */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14">
  {/* Bar Chart */}
  <div className="bg-white shadow rounded p-6 h-[300px]">
    <h2 className="text-center font-semibold mb-4 text-xl text-gray-700">
      Campus Placement Data
    </h2>
    <div className="h-[220px]">
      <Bar data={barData} options={barOptions} />
    </div>
  </div>

  {/* Pie Chart */}
  <div className="bg-white shadow rounded p-6 h-[300px]">
    <h2 className="text-center font-semibold mb-4 text-xl text-gray-700">
      Sector-wise Placements
    </h2>
    <div className="h-[220px]">
      <Pie data={pieData} />
    </div>
  </div>
</div>



      {/* Our Top Recruiters */}
      <div className="mb-20">
        <h2 className="text-2xl font-bold text-center mb-6">Our Top Recruiters</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {topRecruiters.map((company, index) => (
            <div
              key={index}
              className="w-36 h-20 flex items-center justify-center border bg-white shadow rounded-lg p-3 hover:scale-105 transition-transform"
            >
              <img
                src={company.logo}
                alt={company.name}
                className="h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>

      {/* Placed Students */}
      <div className="mb-14 text-center">
        <h2 className="text-2xl font-bold mb-4">Placed Students</h2>
        <p className="text-gray-700 max-w-xl mx-auto">
          List of placed students will be added here with names, branches and recruiters.
        </p>
      </div>

      {/* Contact Section */}
      <div className="bg-white shadow-lg rounded-xl py-10 px-6 text-center text-gray-700">
        <h2 className="text-2xl font-bold mb-6">📬 Contact Us</h2>
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center text-lg">
          <p className="flex items-center gap-2">
            <FaEnvelope className="text-indigo-600" /> placement@apjwits.in
          </p>
          <p className="flex items-center gap-2">
            <FaPhoneAlt className="text-indigo-600" /> +91 9876543210
          </p>
        </div>
      </div>
    </div>
  );
}



