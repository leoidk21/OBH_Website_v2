import React from "react";
import "../components/Responsive.css";
import "../components/Venue.css";
import venueImage3 from "../assets/AMELIAS.jpg";
import venueImage from "../assets/event_venue.jpg";
import venueImage1 from "../assets/event_venue1.jpg";

function Venue() {
    return (
        <div className="venue-section" id="venue">
            <div className="venue-container">
                <h1>Past Event Venues</h1>
                <div className="venue-divider"></div>
                {/* ===== venue main content ===== */}
                <div className="venue-main-content">
                    {/* venue one */}
                    <div className="venue-one">
                      {/* Image + Overlay */}
                      <div className="venue-image-wrapper">
                        <img
                          src={venueImage3}
                          alt="venue"
                          className="venue-image"
                        />

                        <div className="venue-overlay">
                          <p className="venue-description-subtext">
                            Event venue in Rodriguez, Rizal
                          </p>
                        </div>

                        <div className="venue-default">
                          <i className="fas fa-map-marker-alt icon"></i>
                          <span className="venue-default-text">
                            Amelia's Garden Events Place
                          </span>
                        </div>
                      </div>

                      <div className="venue-one-description">
                        <div className="venue-one-line"></div>
                        <div className="venue-description">
                          <h2 className="venue-description-text">
                            Amelias Garden Events Place
                          </h2>
                          <button className="venue-btn">View on Google Maps</button>
                        </div>
                      </div>
                    </div>
                    {/* venue one */}

                    {/* venue two */}
                    <div className="venue-one">
                      {/* Image + Overlay */}
                      <div className="venue-image-wrapper">
                        <img
                          src={venueImage1}
                          alt="venue"
                          className="venue-image"
                        />

                        <div className="venue-overlay">
                          <p className="venue-description-subtext">
                            The Garden Resort
                          </p>
                        </div>

                        <div className="venue-default">
                          <i className="fas fa-map-marker-alt icon"></i>
                          <span className="venue-default-text">
                            ADV Gardens Resort
                          </span>
                        </div>
                      </div>

                      <div className="venue-one-description">
                        <div className="venue-one-line"></div>
                        <div className="venue-description">
                          <h2 className="venue-description-text">
                            ADV Gardens Resort
                          </h2>
                          <button className="venue-btn">View on Google Maps</button>
                        </div>
                      </div>
                    </div>
                    {/* venue one */}

                    {/* venue three */}
                    <div className="venue-one">
                      {/* Image + Overlay */}
                      <div className="venue-image-wrapper">
                        <img
                          src={venueImage}
                          alt="venue"
                          className="venue-image"
                        />

                        <div className="venue-overlay">
                          <p className="venue-description-subtext">
                            Holiday apartment rental in San Mateo, Rizal
                          </p>
                        </div>

                        <div className="venue-default">
                          <i className="fas fa-map-marker-alt icon"></i>
                          <span className="venue-default-text">
                            Naval Mansion San Mateo 
                          </span>
                        </div>
                      </div>

                      <div className="venue-one-description">
                        <div className="venue-one-line"></div>
                        <div className="venue-description">
                          <h2 className="venue-description-text">
                            Naval Mansion San Mateo 
                          </h2>
                          <button className="venue-btn">
                            <a href="https://www.google.com/maps" target="_blank" className="venue-link" rel="noopener noreferrer">
                              View on Google Maps
                            </a>
                          </button>
                        </div>
                      </div>
                    </div>
                    {/* venue one */}
                </div>
                {/* ===== venue main content ===== */}
                {/* <div className="venue-description-container"></div> */}
            </div>
        </div>
    );
}

export default Venue;
