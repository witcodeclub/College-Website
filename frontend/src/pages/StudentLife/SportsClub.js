import React from "react";

const SportsClub = () => {
  return (
    <div className="min-h-screen p-6" style={{ background: "linear-gradient(to right, #d4edda, #a8df8e)" }}>
      <div className="max-w-4xl mx-auto bg-white p-6 rounded-2xl shadow-lg">
        <h1 className="text-3xl font-bold text-center text-green-700 mb-4">Sports Club</h1>
        
        <p className="text-gray-700 text-center mb-6">
          The Sports Club at APJAKWIT is dedicated to promote a culture of fitness, teamwork, sportsmanship and to achieve a healthy and active lifestyle among students by fostering a strong sporting culture. We encourage students to participate in various indoor and outdoor sports, enhancing teamwork, discipline, and sportsmanship.
        </p>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-green-800">🏆 Events</h2>
          <ul className="list-disc list-inside mt-2 text-gray-700">
            <li>Intercollege Kho-Kho Competition organized in college campus.</li>
            <li>WIT students participate in various sports events in other colleges and participates in University inter college games.</li>
            <li>Outdoor activities include Badminton, Kabaddi, Kho-Kho, Basketball, Volleyball, etc.</li>
          </ul>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-green-800">🏟️ Facilities</h2>
          <p className="text-gray-700 mt-2">"Our college provides well-maintained sports facilities, including a full-size playground/field available for sports like football, basketball court, etc, and badminton is also available and an indoor playroom designed for recreational and competitive indoor sports. The playroom is equipped with facilities for Table Tennis, Chess, Carrom, and Badminton, offering students a space to unwind and improve their skills. Additionally, we have a dedicated coaching staff for various sports, ensuring students receive proper guidance and training to excel in their chosen fields.

          </p>
        </section>
        
        <section className="mb-6">
          <h2 className="text-xl font-semibold text-green-800">📸 Image Gallery</h2>
          <div className="grid grid-cols-2 gap-4 mt-2">
            <div className="w-full h-32 bg-gray-300 flex items-center justify-center text-gray-500">Image 1</div>
            <div className="w-full h-32 bg-gray-300 flex items-center justify-center text-gray-500">Image 2</div>
            <div className="w-full h-32 bg-gray-300 flex items-center justify-center text-gray-500">Image 3</div>
            <div className="w-full h-32 bg-gray-300 flex items-center justify-center text-gray-500">Image 4</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SportsClub;
