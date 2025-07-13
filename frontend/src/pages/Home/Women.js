import React, { useState, useRef } from "react";

const Women = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isMuted, setIsMuted] = useState(true);
  const videoRefs = useRef([]);

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      video.muted = !video.muted;
      setIsMuted(!video.muted);
    }
  };

  const womenLeaders = [
    {
      name: "Shahwaar Aafreen",
      company: "Infosys as a Java Full Stack Developer",
      image: "/images/Shahwaar.jpg",
      video: "/videos/Shahwaar.mp4",
    },
    {
      name: "Gita Gopinath",
      company: "IMF Deputy Director",
      image: "/images/gita.jpg",
      video: "/videos/gita.mp4",
    },
    {
      name: "Roshni Nadar",
      company: "Chairperson, HCL Tech",
      image: "/images/roshni.jpg",
      video: "/videos/roshni.mp4",
    },
    {
      name: "Kiran Mazumdar-Shaw",
      company: "Founder, Biocon",
      image: "/images/kiran.jpg",
      video: "/videos/kiran.mp4",
    },
  ];

  return (
    <div className="flex flex-col items-center px-4 py-8">
      <h1 className="text-2xl sm:text-3xl font-bold text-[#2c3e50] mb-6">
        Women Who Lead
      </h1>

      <div className="flex flex-wrap justify-center gap-4">
        {womenLeaders.map((leader, index) => (
          <div
            key={index}
            className="relative w-[130px] h-[200px] rounded-lg shadow-md overflow-hidden group"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {hoveredIndex === index ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={leader.video}
                autoPlay
                loop
                muted={isMuted}
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={leader.image}
                alt={leader.name}
                className="w-full h-full object-cover"
              />
            )}

            {/* Sound Toggle Icon */}
            {hoveredIndex === index && (
              <button
                onClick={() => toggleMute(index)}
                className="absolute top-2 right-2 bg-black bg-opacity-60 rounded-full p-1 text-white text-xs"
              >
                {isMuted ? "🔇" : "🔊"}
              </button>
            )}

            <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white text-center p-2">
              <h2 className="text-xs font-bold">{leader.name}</h2>
              <p className="text-[10px]">{leader.company}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;
