import React from "react";
import Hero from "./Hero";
import Aproval from "./Approval";
import Mentor from "./Mentor";
import Women from "./Women";
import Photos from "./Photos";
import FAQSection from "../../components/FAQSection";
import Campus from "./Campus";
import NewsTicker from "./NewsTicker";

const Home = () => {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden mx-auto bg-white text-[#2c3e50]">
      
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* ✅ Scrolling News Strip (Just Below Banner) */}
      <section className="w-full">
        <NewsTicker />
      </section>

      {/* Campus Info */}
      <section className="w-full py-6 sm:py-8 px-4 sm:px-6 md:px-8 xl:px-16">
        <Campus />
      </section>

      {/* Approvals */}
      <section className="w-full py-6 sm:py-8 px-4 sm:px-6 md:px-8 xl:px-16 bg-gray-50">
        <Aproval />
      </section>

      {/* Mentors */}
      <section className="w-full py-6 sm:py-8 px-4 sm:px-6 md:px-8 xl:px-16">
        <Mentor />
      </section>

      {/* Women in Tech */}
      <section className="w-full py-6 sm:py-8 px-4 sm:px-6 md:px-8 xl:px-16 bg-gray-100">
        <Women />
      </section>

      {/* Photo Gallery */}
      <section className="w-full py-6 sm:py-8 px-4 sm:px-6 md:px-8 xl:px-16">
        <Photos />
      </section>

      {/* FAQ Section */}
      <section className="w-full py-6 sm:py-8 px-4 sm:px-6 md:px-8 xl:px-16 bg-gray-50">
        <FAQSection />
      </section>
    </div>
  );
};

export default Home;

