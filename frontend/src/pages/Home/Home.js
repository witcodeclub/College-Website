import React from "react";
import Hero from "./Hero";
import Aproval from "./Approval";
import Mentor from "./Mentor";
import Women from "./Women";
import Photos from "./Photos";
import FAQSection from "../../components/FAQSection";
import Campus from "./Campus";

const Home = () => {
  return (
    <div className="w-full max-w-[100vw] overflow-x-hidden mx-auto">
      {/* Hero Section */}
      <section className="w-full">
        <Hero />
      </section>

      {/* Campus Info */}
      <section className="w-full py-8 px-4 md:px-8 xl:px-16">
        <Campus />
      </section>

      {/* Approvals */}
      <section className="w-full py-8 px-4 md:px-8 xl:px-16 bg-gray-50">
        <Aproval />
      </section>

      {/* Mentors */}
      <section className="w-full py-8 px-4 md:px-8 xl:px-16">
        <Mentor />
      </section>

      {/* Women In Tech Section */}
      <section className="w-full py-8 px-4 md:px-8 xl:px-16 bg-gray-100">
        <Women />
      </section>

      {/* Photo Gallery */}
      <section className="w-full py-8 px-4 md:px-8 xl:px-16">
        <Photos />
      </section>

      {/* FAQ Section */}
      <section className="w-full py-8 px-4 md:px-8 xl:px-16 bg-gray-50">
        <FAQSection />
      </section>
    </div>
  );
};

export default Home;
