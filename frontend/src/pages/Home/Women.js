import React, { useState, useRef } from "react";
import { useTranslation } from "react-i18next";

const Women = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [mutedStates, setMutedStates] = useState(Array(4).fill(true));
  const videoRefs = useRef([]);
  const { t } = useTranslation();

  const toggleMute = (index) => {
    const video = videoRefs.current[index];
    if (video) {
      const updatedMutedStates = [...mutedStates];
      updatedMutedStates[index] = !updatedMutedStates[index];
      setMutedStates(updatedMutedStates);
      video.muted = updatedMutedStates[index];
    }
  };

  const womenLeaders = [
    {
      name: "shahwaar_name",
      company: "shahwaar_role",
      image: "/images/Shahwaar.jpg",
      video: "/videos/Shahwaar.mp4",
    },
    {
      name: "gita_name",
      company: "gita_role",
      image: "/images/gita.jpg",
      video: "/videos/gita.mp4",
    },
    {
      name: "roshni_name",
      company: "roshni_role",
      image: "/images/roshni.jpg",
      video: "/videos/roshni.mp4",
    },
    {
      name: "kiran_name",
      company: "kiran_role",
      image: "/images/kiran.jpg",
      video: "/videos/kiran.mp4",
    },
  ];

  return (
    <div className="px-4 py-10 max-w-6xl mx-auto">
      <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#2c3e50] mb-8">
        {t("women_lead_title")}
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {womenLeaders.map((leader, index) => (
          <div
            key={index}
            className="relative w-[90%] sm:w-[80%] md:w-[200px] h-[260px] rounded-lg shadow-md overflow-hidden group"
            onMouseEnter={() => {
              setHoveredIndex(index);
              const video = videoRefs.current[index];
              if (video) {
                video.play().catch(() => {});
              }
            }}
            onMouseLeave={() => {
              setHoveredIndex(null);
              const video = videoRefs.current[index];
              if (video) {
                video.pause();
                video.currentTime = 0;
              }
            }}
          >
            {hoveredIndex === index ? (
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                src={leader.video}
                loop
                muted={mutedStates[index]}
                playsInline
                className="w-full h-full object-cover"
              />
            ) : (
              <img
                src={leader.image}
                alt={t(leader.name)}
                className="w-full h-full object-cover"
              />
            )}

            {hoveredIndex === index && (
              <button
                onClick={() => toggleMute(index)}
                className="absolute top-2 right-2 bg-black bg-opacity-60 rounded-full p-1 text-white text-xs"
              >
                {mutedStates[index] ? "🔇" : "🔊"}
              </button>
            )}

            <div className="absolute bottom-0 w-full bg-black bg-opacity-70 text-white text-center p-2">
              <h2 className="text-sm font-semibold truncate">
                {t(leader.name)}
              </h2>
              <p className="text-[11px]">{t(leader.company)}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Women;




