import React, { useState } from "react";

function Vc() {
  const [hover, setHover] = useState(false);

  return (
    <div className="bg-[#f4f6f9] py-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8 bg-white shadow-xl rounded-2xl p-6 md:p-10">
        
        {/* Image Block with Hover Info */}
        <div
          className="relative w-[150px] sm:w-[220px] md:w-[260px] h-[200px] sm:h-[300px] md:h-[340px] rounded-xl overflow-hidden shadow-md cursor-pointer flex-shrink-0"
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          title="Hover to see name"
        >
          <img
            src="/images/vc.jpeg"
            alt="Vice Chancellor"
            className="w-full h-full object-cover"
          />
          <div
            className={`absolute bottom-0 left-0 w-full bg-black bg-opacity-70 text-white text-sm text-center py-2 transition-opacity duration-300 ${
              hover ? "opacity-100" : "opacity-0"
            }`}
          >
            <strong>Prof. Sanjay Kumar Chaudhary</strong>
            <br />
            Vice Chancellor, LNMU
          </div>
        </div>

        {/* Message */}
        <div className="text-gray-800 text-sm sm:text-base leading-relaxed text-justify flex-1">
          <p>
            The establishment of APJAKWIT in this region is a step forward in
            the context of promoting technical education, especially for the
            upliftment of women of Mithila in particular and India in general.
            Students of this Institute have proven merit to excel in their
            field.
          </p>
          <p className="mt-3">
            We can’t negate that knowledge is the real power in the present age
            of knowledge technology and in the process, the women technocrats
            have a remarkable impact on the overall economic transformation of
            the country.
          </p>
          <p className="mt-3">
            The APJAKWIT has proved to be a unique Institute only for the girl
            students, aimed at empowering them to face the changes and
            challenges of the 21st century. I wish the upcoming and budding
            students enrolled in the institute a bright and prosperous career.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Vc;


