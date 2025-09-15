import React from 'react'
import '../pages/WeddingPackage.css'
import venueImage3 from "../assets/AMELIAS.jpg";
import venueImage from "../assets/event_venue.jpg";
import venueImage1 from "../assets/event_venue1.jpg";

function WeddingPackage() {
  return (
    <main className='wedding-package-container'>
      <header className='wedding-package-header'>
        <h1>O.B.H Wedding Packages</h1>
        <div className='wedding-package-divider'></div>
      </header>

      <div className='wedding-main'>
        <section className='wedding-package-section'>
          <div className='wedding-image-container'>
            <img 
              src={venueImage} 
              alt='Wedding Package' 
              className='wedding-package-image'
            />
          </div>
          <div className='wedding-package-content'>
            <h2>50 to 90 pax</h2>
            <div className='wedding-price'>
              <h3 className='wedding-package-price'>Price 14,500</h3>
            </div>
            <p className='wedding-coordinators'>4 Coordinators</p>
            <ul className='wedding-package-list'>
              <li>Wedding Package</li>
              <li>Wedding Decoration</li>
              <li>Wedding Cake</li>
              <li>Wedding Cake Decoration</li>
            </ul>
          </div>
        </section>

        <section className='wedding-package-section'>
          <div className='wedding-image-container'>
            <img 
              src={venueImage1} 
              alt='Wedding Package' 
              className='wedding-package-image'
            />
          </div>
          <div className='wedding-package-content'>
            <h2>50 to 90 pax</h2>
            <div className='wedding-price'>
              <h3 className='wedding-package-price'>Price 14,500</h3>
            </div>
            <p className='wedding-coordinators'>4 Coordinators</p>
            <ul className='wedding-package-list'>
              <li>Wedding Package</li>
              <li>Wedding Decoration</li>
              <li>Wedding Cake</li>
              <li>Wedding Cake Decoration</li>
            </ul>
          </div>
        </section>

        <section className='wedding-package-section'>
          <div className='wedding-image-container'>
            <img 
              src={venueImage} 
              alt='Wedding Package' 
              className='wedding-package-image'
            />
          </div>
          <div className='wedding-package-content'>
            <h2>50 to 90 pax</h2>
            <div className='wedding-price'>
              <h3 className='wedding-package-price'>Price 14,500</h3>
            </div>
            <p className='wedding-coordinators'>4 Coordinators</p>
            <ul className='wedding-package-list'>
              <li>Wedding Package</li>
              <li>Wedding Decoration</li>
              <li>Wedding Cake</li>
              <li>Wedding Cake Decoration</li>
            </ul>
          </div>
        </section>

        <section className='wedding-package-section'>
          <div className='wedding-image-container'>
            <img 
              src={venueImage1} 
              alt='Wedding Package' 
              className='wedding-package-image'
            />
          </div>
          <div className='wedding-package-content'>
            <h2>50 to 90 pax</h2>
            <div className='wedding-price'>
              <h3 className='wedding-package-price'>Price 14,500</h3>
            </div>
            <p className='wedding-coordinators'>4 Coordinators</p>
            <ul className='wedding-package-list'>
              <li>Wedding Package</li>
              <li>Wedding Decoration</li>
              <li>Wedding Cake</li>
              <li>Wedding Cake Decoration</li>
            </ul>
          </div>
        </section>

        <section className='wedding-package-section'>
          <div className='wedding-image-container'>
            <img 
              src={venueImage} 
              alt='Wedding Package' 
              className='wedding-package-image'
            />
          </div>
          <div className='wedding-package-content'>
            <h2>50 to 90 pax</h2>
            <div className='wedding-price'>
              <h3 className='wedding-package-price'>Price 14,500</h3>
            </div>
            <p className='wedding-coordinators'>4 Coordinators</p>
            <ul className='wedding-package-list'>
              <li>Wedding Package</li>
              <li>Wedding Decoration</li>
              <li>Wedding Cake</li>
              <li>Wedding Cake Decoration</li>
            </ul>
          </div>
        </section>
      </div>

    </main>
  )
}

export default WeddingPackage
