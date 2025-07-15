import React from "react";

const courses = [
  { name: "B.Tech - Computer Science & Engineering", dept: "CSE", duration: "4 Years", seats: 60 },
  { name: "B.Tech - Information Technology", dept: "IT", duration: "4 Years", seats: 30 },
  { name: "B.Tech - Bioinformatics", dept: "Bioinformatics", duration: "4 Years", seats: 30 },
  { name: "Master of Computer Application (MCA)", dept: "Computer Applications", duration: "3 Years", seats: 30 },
  { name: "Bachelor of Computer Application (BCA)", dept: "Computer Applications", duration: "3 Years", seats: 30 }
];

const Courses = () => {
  return (
    <div className="bg-white py-6 px-4 text-center">
      <h2 className="text-2xl sm:text-3xl font-bold text-emerald-700 mb-1 animate-fade-in-down">
        Courses Offered
      </h2>
      <p className="text-gray-600 mb-5 text-sm sm:text-base animate-fade-in-up">
        Explore the range of courses offered under different departments.
      </p>

      <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white w-full max-w-sm p-5 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 animate-slide-up"
          >
            <div className="text-3xl sm:text-4xl mb-2">🎓</div>
            <h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-1">{course.name}</h3>
            <p className="text-gray-700 text-sm sm:text-base"><strong>Department:</strong> {course.dept}</p>
            <p className="text-gray-700 text-sm sm:text-base"><strong>Duration:</strong> {course.duration}</p>
            <p className="text-gray-700 text-sm sm:text-base"><strong>No. of Seats:</strong> {course.seats}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;



