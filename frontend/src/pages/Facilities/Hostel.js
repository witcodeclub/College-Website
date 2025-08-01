import React from "react";

const Hostel = () => {
  return (
    <div className="bg-gray-100 py-12 px-4 md:px-6 flex justify-center">
      <div className="bg-white rounded-2xl shadow-lg max-w-4xl w-full p-4 sm:p-8">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-green-700 mb-6 text-center">Hostel</h2>

        {/* Description */}
        <p className="text-base text-gray-700 leading-relaxed mb-4 text-center sm:text-justify">
          APJAKWIT has three safe and secure in-campus hostels with an approximate capacity of 200.
          Two hostels are located in the institute campus, while one is in the university campus,
          at a walking distance of approximately 300 meters.
        </p>

        <p className="text-base text-gray-700 leading-relaxed mb-6 text-center sm:text-justify">
          All hostels provide good lodging and boarding facilities, with round-the-clock power backup,
          ensuring a comfortable and secure living environment for students.
        </p>

        {/* Image Section */}
        <div className="flex flex-wrap justify-center gap-6 mt-4">
          {["hostel1.jpg", "hostel2.jpg"].map((img, index) => (
            <div
              key={index}
              className="rounded-xl overflow-hidden shadow-md w-full sm:w-72"
            >
              <img
                src={process.env.PUBLIC_URL + `/images/${img}`}
                alt={`Hostel ${index + 1}`}
                className="w-full h-48 sm:h-56 object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Hostel;

