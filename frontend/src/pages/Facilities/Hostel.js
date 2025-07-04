import React from "react";

const Hostel = () => {
  return (
    <div className="bg-gray-100 py-12 px-6 flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-8 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-green-700 mb-6">Hostel</h2>

        {/* Description */}
        <p className="text-base text-gray-700 leading-relaxed text-justify mb-4">
          APJAKWIT has three safe and secure in-campus hostels with an approximate capacity of 200.
          Two hostels are located in the institute campus, while one is in the university campus, 
          at a walking distance of approximately 300 meters.
        </p>

        <p className="text-base text-gray-700 leading-relaxed text-justify mb-6">
          All hostels provide good lodging and boarding facilities, with round-the-clock power backup,
          ensuring a comfortable and secure living environment for students.
        </p>

        {/* Image Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {["hostel1.jpg", "hostel2.jpg"].map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md max-w-sm w-full"
            >
              <img
                src={process.env.PUBLIC_URL + `/images/${img}`}
                alt={`Hostel ${index + 1}`}
                className="w-full h-auto"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hostel;
