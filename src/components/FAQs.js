import React, { useState } from "react";
import "../components/FAQs.css";
import "../components/Import.css";
import "../components/Responsive.css";

function FAQs() {
    // FAQ data as an array of objects
    const faqData = [
        {
            question: "What is Orchestrated By HIStory?",
            answer: "Orchestrated By HIStory is a platform that provides curated content and resources related to historical events and figures.",
        },
        {
            question: "How can I contribute to the platform?",
            answer: "You can contribute by submitting articles, resources, or suggestions through our contact form.",
        },
        {
            question: "Can I hire you for only specific parts of my event?",
            answer: "Absolutely. Whether you need help with just the decor, logistics, or day-of coordination, we offer customizable packages to suit your needs.",
        },
         {
            question: "How far in advance should I book your services?",
            answer: "We recommend booking 3 to 6 months in advance for optimal planning, though we can accommodate shorter timelines depending on availability.",
        },
        {
            question: "Do you offer virtual or hybrid event planning?",
            answer: "Yes, we provide support for fully virtual and hybrid events, including platform setup, digital engagement tools, and live streaming coordination.",
        },
    ];

    // State to track which FAQ is open (null means all are closed)
    const [openIndex, setOpenIndex] = useState(null);

    // Toggle function: open if closed, close if open
    const handleToggle = (idx) => {
        setOpenIndex(openIndex === idx ? null : idx);
    };

    return (
        <div id="faqs">
            <div className="faq-section" >
                <h1 className="faq-title">Frequently Asked Questions</h1>
                <p className="faq-description">
                    Have questions? Find clear answers to the most common
                    inquiries about our planning process, services, and event
                    day coordination.
                </p>
                
                <div className="faq-item-container">
                    {faqData.map((item, idx) => (
                        <div className="faq-item" key={idx} onClick={() => handleToggle(idx)}>
                            <div className="faq-icon">
                                <h2 className="faq-question">{item.question}</h2>

                                {/* Show answer only if openIndex matches */}
                                <div className={`faq-answer-wrapper ${openIndex === idx ? "open" : ""}`}>
                                    <p className="faq-answer">{item.answer}</p>
                                </div>  
                            </div>
                            
                            {/* Button to toggle answer visibility */}

                            <div
                                className="faq-button"
                                style={{ cursor: "pointer" }}
                            >
                                {/* Icon changes depending on open/closed */}
                                <i
                                    className={`faq-icon-toggle ${openIndex === idx ? "open" : ""} fas ${
                                    openIndex === idx
                                            ? "fa-times fa-icon"
                                            : "fa-plus fa-icon"
                                    }`}
                                ></i>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default FAQs;
