import React, { useEffect, useState } from 'react';
import '../pages/WeddingPackage.css'
import venueImage from "../assets/event_venue.jpg";
import venueImage1 from "../assets/event_venue1.jpg";
import "../components/App.css";
import "../components/Import.css";
import Contact from '../components/Contact';
import weddingPackagesData from '../pages/WeddingPackage.json';

function WeddingPackage() {

  const [packages, setPackages] = useState([]);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    // Process the JSON data to include actual image references
    const processedPackages = weddingPackagesData.packages.map(pkg => ({
      ...pkg,
      image: pkg.image === 'venueImage1' ? venueImage1 : venueImage
    }));
    
    setPackages(processedPackages);
  }, []);

  return (
    <div className='wedding'>
      <main className='wedding-package-container'>
        <header className='wedding-package-header'>
          <h1>O.B.H Wedding Packages</h1>
          <div className='wedding-package-divider'></div>
        </header>

        <div className='wedding-main'>
          {packages.map(pkg => (
            <section key={pkg.id} className='wedding-section'>
              <div className='wedding-image-container'>
                <img
                  src={pkg.image}
                  alt={`Wedding Package for ${pkg.pax} pax`}
                  className='wedding-package-image'
                />
              </div>
              <div className='design'>
                <i className="far fa-heart"></i>
              </div>
              <div className='wedding-package-content'>
                <h2>{pkg.pax} pax</h2>
                <p className='wedding-coordinators'>{pkg.coordinators} Coordinators</p>
                <ul className='wedding-package-list'>
                  {pkg.coordinatorsList.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </div>
              <div className='wedding-price'>
                <h3 className='wedding-package-price'>Price {pkg.price}</h3>
              </div>
            </section>
          ))}
        </div>
      </main>
      <Contact />
    </div>
  )
}

export default WeddingPackage
