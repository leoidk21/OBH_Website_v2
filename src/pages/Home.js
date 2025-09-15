import React, { useRef, useState } from "react";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Gallery from "../components/Gallery";
import AboutUs from "../components/About-us";
import Review from "../components/Review";
import FAQs from "../components/FAQs";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Venue from "../components/Venue";

function Home() {
  const servicesRef = useRef(null);
  const scrollToServices = () => {
    const offset = 100;
    const top = servicesRef.current.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: "smooth" });
  };

  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Hero scrollToServices={scrollToServices} />
      <div ref={servicesRef} id="services">
        <Services />
      </div>
      <Gallery openModal={() => setIsOpen(true)} />
      <Venue />
      <AboutUs />
      <Review />
      <FAQs />
      <Contact />
      <Footer />
      {isOpen && (
        <div className="detailsContent">
          <div className="detailsOverlay">
            <button className="close" onClick={() => setIsOpen(false)}>
              &times;
            </button>
            <h2 className="detailsText">Event Details</h2>
            <p className="details">
              <span className="boldText">Event Type:</span> Grand Wedding
            </p>
            <p className="details">
              <span className="boldText">Date:</span> December 28, 2024
            </p>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;