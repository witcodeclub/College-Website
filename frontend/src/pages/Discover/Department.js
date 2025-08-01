import React from "react";

const departments = [
  { name: "Computer Science & Engineering", icon: "💻" },
  { name: "Information Technology (IT)", icon: "📡" },
  { name: "Bioinformatics Engineering", icon: "🧬" },
  { name: "Bachelor of Computer Applications (BCA)", icon: "🖥️" },
  { name: "Master of Computer Applications (MCA)", icon: "🎓" },
];

function Department() {
  return (
    <div className="text-center px-4 py-8">
      <h1 className="text-2xl md:text-3xl font-bold text-green-700 mb-4">
        Departments
      </h1>
      <p className="text-sm md:text-base text-gray-600 max-w-4xl mx-auto leading-relaxed">
        Dr. APJ Abdul Kalam Women's Institute of Technology provides science-based engineering education to empower women in technology and research. The curriculum offers broad-based knowledge, fostering lifelong learning and exploration. The activities of departments include teaching at all levels and advanced research.
      </p>

      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-4 gap-x-4 place-items-center">
        {departments.map((dept, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-4 w-full max-w-xs hover:-translate-y-1 hover:shadow-lg hover:bg-green-100 transition-all duration-300 cursor-pointer text-center"
          >
            <div className="text-3xl mb-2">{dept.icon}</div>
            <h2 className="text-sm font-medium text-gray-800">{dept.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Department;

