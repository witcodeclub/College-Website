import React from 'react';

const CulturalCell = () => {
  const galleryImages = [
    { src: 'images/placeholder1.jpg', alt: 'Event Image 1', delay: 'delay-200' },
    { src: 'images/placeholder2.jpg', alt: 'Event Image 2', delay: 'delay-400' },
    { src: 'images/placeholder3.jpg', alt: 'Event Image 3', delay: 'delay-600' },
  ];

  return (
    <div className="font-sans bg-gray-100 text-gray-800">
      {/* Header */}
      <header className="text-center py-16 bg-emerald-500 text-white">
        <h1 className="text-4xl md:text-5xl font-bold animate-fade-in">Welcome to the Cultural Cell</h1>
        <p className="text-xl mt-4 animate-fade-in delay-200">Celebrating Art, Culture, and Creativity</p>
      </header>

      {/* About Section */}
      <section className="px-6 py-10 bg-white mx-4 md:mx-16 my-8 rounded-lg shadow-md">
        <h2 className="text-3xl text-yellow-900 font-semibold mb-6 animate-fade-in">About Us</h2>
        <p className="text-lg text-gray-700 mb-4 animate-fade-in delay-200">
          The Cultural Cell is the heartbeat of our campus, where students from all walks of life come together to celebrate their passion for art, culture, and creativity. We believe in the transformative power of the arts and strive to create an inclusive environment where students can learn, grow, and showcase their talents.
        </p>
        <h3 className="text-2xl text-green-800 font-semibold mt-6 mb-3 animate-fade-in delay-300">Our Mission</h3>
        <p className="text-base text-gray-700 mb-4 animate-fade-in delay-300">
          To foster creativity, organize cultural events, and provide a platform for students to express themselves through various artistic forms. We aim to create an environment that encourages collaboration, innovation, and cultural exchange.
        </p>
        <h3 className="text-2xl text-green-800 font-semibold mt-6 mb-3 animate-fade-in delay-400">Our Vision</h3>
        <p className="text-base text-gray-700 animate-fade-in delay-400">
          To be a hub of creativity where students can discover, nurture, and share their artistic talents. We aspire to build a community that values cultural diversity, artistic expression, and the power of creative collaboration.
        </p>
      </section>

      {/* Upcoming Events */}
      <section className="px-6 py-10 bg-white mx-4 md:mx-16 my-8 rounded-lg shadow-md">
        <h2 className="text-3xl text-green-900 font-semibold mb-4 animate-fade-in">Upcoming Events</h2>
        <p className="text-lg text-gray-700 animate-fade-in delay-500">
          Stay tuned for exciting events that bring the best of creativity and culture to life. We have workshops, performances, and competitions lined up to showcase the talents of our student community.
        </p>
      </section>

      {/* Gallery */}
      <section className="text-center py-12">
        <h2 className="text-3xl text-yellow-900 font-semibold mb-6 animate-fade-in">Our Gallery</h2>
        <div className="flex flex-wrap justify-center gap-6 px-4">
          {galleryImages.map((img, index) => (
            <img
              key={index}
              src={img.src}
              alt={img.alt}
              className={`w-[250px] h-[200px] object-cover rounded-md shadow-lg transform transition-transform duration-300 hover:scale-110 opacity-0 animate-fade-in ${img.delay}`}
            />
          ))}
        </div>
      </section>

      {/* Animations */}
      <style>
        {`
          .animate-fade-in {
            animation: fadeIn 1s ease forwards;
          }
          .delay-200 { animation-delay: 0.2s; }
          .delay-300 { animation-delay: 0.3s; }
          .delay-400 { animation-delay: 0.4s; }
          .delay-500 { animation-delay: 0.5s; }
          .delay-600 { animation-delay: 0.6s; }

          @keyframes fadeIn {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
          }
        `}
      </style>
    </div>
  );
};

export default CulturalCell;
