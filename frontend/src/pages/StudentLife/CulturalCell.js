import React from 'react';

const CulturalCell = () => {
  const fadeInStyle = {
    animation: 'fadeIn 2s ease-out',
  };

  const fadeInDelayStyle = {
    ...fadeInStyle,
    animationDelay: '0.5s',
  };

  const fadeInDelayStyle2 = {
    ...fadeInStyle,
    animationDelay: '1s',
  };

  const galleryImageStyle = {
    width: '250px',
    height: '200px',
    objectFit: 'cover',
    borderRadius: '8px',
    opacity: 0,
    animation: 'fadeIn 1s forwards',
    transition: 'transform 0.3s ease',
  };

  const galleryImageHoverStyle = {
    transform: 'scale(1.1)',
  };

  const keyframes = `
    @keyframes fadeIn {
      0% {
        opacity: 0;
      }
      100% {
        opacity: 1;
      }
    }
  `;

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', backgroundColor: '#f4f4f9', color: '#333' }}>
      <style>{keyframes}</style>

      <header style={{ textAlign: 'center', padding: '60px 0', backgroundColor: '#2a5d84', color: 'white' }}>
        <h1 style={{ fontSize: '3.5em', marginBottom: '15px', ...fadeInStyle }}>
          Welcome to the Cultural Cell
        </h1>
        <p style={{ fontSize: '1.5em', color: '#ffffff', ...fadeInDelayStyle }}>
          Celebrating Art, Culture, and Creativity
        </p>
      </header>

      <section style={{ padding: '40px', margin: '30px 0', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '2.5em', marginBottom: '20px', color: '#2a5d84', ...fadeInStyle }}>
          About Us
        </h2>
        <p style={{ fontSize: '1.2em', color: '#555', marginBottom: '15px', ...fadeInDelayStyle }}>
          The Cultural Cell is the heartbeat of our campus, where students from all walks of life come together to celebrate their passion for art, culture, and creativity. We believe in the transformative power of the arts and strive to create an inclusive environment where students can learn, grow, and showcase their talents.
        </p>
        <h3 style={{ fontSize: '2em', marginBottom: '15px', color: '#2a5d84', ...fadeInDelayStyle }}>
          Our Mission
        </h3>
        <p style={{ fontSize: '1.1em', color: '#555', marginBottom: '15px', ...fadeInDelayStyle }}>
          To foster creativity, organize cultural events, and provide a platform for students to express themselves through various artistic forms. We aim to create an environment that encourages collaboration, innovation, and cultural exchange.
        </p>
        <h3 style={{ fontSize: '2em', marginBottom: '15px', color: '#2a5d84', ...fadeInDelayStyle }}>
          Our Vision
        </h3>
        <p style={{ fontSize: '1.1em', color: '#555', marginBottom: '15px', ...fadeInDelayStyle }}>
          To be a hub of creativity where students can discover, nurture, and share their artistic talents. We aspire to build a community that values cultural diversity, artistic expression, and the power of creative collaboration.
        </p>
      </section>

      <section style={{ padding: '40px', margin: '30px 0', backgroundColor: '#ffffff', borderRadius: '8px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)' }}>
        <h2 style={{ fontSize: '2.5em', marginBottom: '20px', color: '#2a5d84', ...fadeInStyle }}>
          Upcoming Events
        </h2>
        <p style={{ fontSize: '1.2em', color: '#555', ...fadeInDelayStyle2 }}>
          Stay tuned for exciting events that bring the best of creativity and culture to life. We have workshops, performances, and competitions lined up to showcase the talents of our student community.
        </p>
      </section>

      <section style={{ textAlign: 'center', padding: '40px 0' }}>
        <h2 style={{ fontSize: '2.5em', marginBottom: '20px', color: '#2a5d84', ...fadeInStyle }}>
          Our Gallery
        </h2>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '30px' }}>
          <img
            src="images/placeholder1.jpg"
            alt="Event Image 1"
            style={{ ...galleryImageStyle, animationDelay: '0.5s' }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          />
          <img
            src="images/placeholder2.jpg"
            alt="Event Image 2"
            style={{ ...galleryImageStyle, animationDelay: '1s' }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          />
          <img
            src="images/placeholder3.jpg"
            alt="Event Image 3"
            style={{ ...galleryImageStyle, animationDelay: '1.5s' }}
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1)')}
          />
        </div>
      </section>

      
    </div>
  );
};

export default CulturalCell;
