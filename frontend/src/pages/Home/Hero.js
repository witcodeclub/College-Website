import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from "react-router-dom";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Import icons

const Hero = () => {
  const navigate = useNavigate();

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true, // Arrows enable kiya
    prevArrow: <CustomPrevArrow />, // Custom prev arrow
    nextArrow: <CustomNextArrow />, // Custom next arrow
  };

  return (
    <div className="hero-section" style={styles.heroContainer}>
      <Slider {...settings}>
        <div style={styles.slide}>
          <img
            src="/images/slide1.jpg"
            alt="Slide 3"
            style={styles.heroImage}
          />
        </div>
        <div style={styles.slide}>
          <img
            src="/images/slide2.jpg"
            alt="Slide 1"
            style={styles.heroImage}
          />
        </div>
        <div style={styles.slide}>
          <img src="/images/slide4.jpg" alt="Slide 3" style={styles.heroImage} />
        </div>
      </Slider>

      {/* virtuaral-Tour */}
      <button
        style={styles.stepInsideButton}
        onMouseOver={(e) => {
          e.target.style.backgroundColor =
            styles.stepInsideButtonHover.backgroundColor;
          e.target.style.color = styles.stepInsideButtonHover.color;
        }}
        onMouseOut={(e) => {
          e.target.style.backgroundColor =
            styles.stepInsideButton.backgroundColor;
          e.target.style.color = styles.stepInsideButton.color;
        }}
      >
        Step Inside →
      </button>

      {/* Apply Now Button */}
      <button
        id="apply-btn"
        style={styles.applyButton}
        onClick={() => navigate("/admission/applynow")}
      >
        Apply Now
      </button>
    </div>
  );
};

// ✅ Custom Previous Arrow
const CustomPrevArrow = (props) => {
  const { onClick } = props;
  return (
    <FaChevronLeft
      style={{ ...styles.arrow, left: "10px" }}
      onClick={onClick}
    />
  );
};

// ✅ Custom Next Arrow
const CustomNextArrow = (props) => {
  const { onClick } = props;
  return (
    <FaChevronRight
      style={{ ...styles.arrow, right: "10px" }}
      onClick={onClick}
    />
  );
};

// ✅ Inline CSS Styles
const styles = {
  heroContainer: {
    width: "100%",
    maxWidth: "100vw",
    margin: "auto",
    overflow: "hidden",
    position: "relative",
    marginTop: "80px", // 👈 Navbar se overlap fix ✅
  },
  heroImage: {
    width: "100%",
    height: "500px",
    objectFit: "cover",
  },
  stepInsideButton: {
    position: "absolute",
    left: "30px", 
    top: "88%", 
    backgroundColor: "transparent",
    color: "#fff",
    border: "2px solid white",
    padding: "12px 24px",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background 0.3s ease-in-out, color 0.3s ease-in-out",
    display: "flex",
    alignItems: "center",
    gap: "10px", // 👈 Button aur arrow ke beech gap
},
stepInsideButtonHover: {
    backgroundColor: "#fff",
    color: "#000",
},

  applyButton: {
    position: "absolute",
    bottom: "10px",
    right: "10px",
    backgroundColor: "#28a745",
    color: "#fff",
    border: "none",
    padding: "12px 24px",
    fontSize: "18px",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background 0.3s ease-in-out",
  },
  applyButtonHover: {
    backgroundColor: "#32CD32",
  },
  slide: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  arrow: {
    position: "absolute",
    top: "50%",
    transform: "translateY(-50%)",
    fontSize: "30px",
    color: "#fff",
    cursor: "pointer",
    zIndex: 10,
    backgroundColor: "rgba(0,0,0,0.5)",
    padding: "10px",
    borderRadius: "50%",
  },
};

export default Hero;
