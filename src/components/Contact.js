import React from "react";
import "../components/Contact.css";
import "../components/Responsive.css";
import "../components/Import.css";

export default function Contact() {
    return (
    <section className="contact-section" id="contact">
        <div className="contact-content">
            <div className="contact-container">
                <div className="contact-upper">
                    <h1 className="link-header">Connect With Us</h1>
                    <h3 className="contact-subheader">We would love to hear from you!</h3>
                </div>

                <address>
                    <ul className="contact-list">
                        <li className="contact-item">
                            <i className="fab fa-facebook" aria-hidden="true"></i>
                            <a href="https://www.facebook.com/profile.php?id=100063871007747" className="facebook" target="_blank" rel="noopener noreferrer">
                                Orchestrated By <span className="his">HIS</span>tory
                            </a>
                        </li>

                        <li className="contact-item">
                            <i className="fas fa-phone" aria-hidden="true"></i>
                            <a href="tel:0905 518 3545" className="contact">0905 518 3545</a>
                        </li>

                        <li className="contact-item">
                            <i className="fas fa-map-marker-alt" aria-hidden="true"></i>
                            <p className="location">Rodriguez, Philippines, 1860</p>
                        </li>

                        <li className="contact-item">
                            <i className="fas fa-envelope" aria-hidden="true"></i>
                            <a href="mailto:orchestratedbyhistory2021@gmail.com" className="email">
                                orchestratedbyhistory2021@gmail.com
                            </a>
                        </li>
                    </ul>
                </address>
            </div>
        </div>

        <div className="contact-divider"></div>

        <div className='footer-section'>
          <p className='copyright'>&copy; 2025 Orchestrated By HIStory. All rights reserved.</p>
        </div>
    </section>
    );
}
