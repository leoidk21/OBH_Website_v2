import React, { useState } from "react";
import "../components/Review.css";
import "../components/Import.css";
import "../components/Responsive.css";
import "../components/App.css";
import quotaionImg from "../assets/quotation.png";

function Review() {
    const [showMore, setShowMore] = useState(false);
    const toggleReviews = () => {
        setShowMore(!showMore);
    };

    const reviews =
        "Our wedding day was an absolute dream come true, thanks to O.B.H. From the smallest details to the overall flow of the day, everything was flawlessl executed. The team listened to our vision and brought it to life with elegance and heart. We couldn't have asked for a more perfect celebration.";

    return (
        <div className="review-container">
            <div className="review-section" id="review">
                <p className="review-title">Reviews</p>
                <h1 className="review-header">What Our Clients Are Saying</h1>
                <div className="review-parent">
                    <div className="first-review review-card">
                        <img
                            src={quotaionImg}
                            alt="Client"
                            className="client-image"
                        />
                        <div className="client-info">
                            <div className="client-profile-container">
                                <h2 className="client-profile">BH</h2>
                            </div>
                            <div className="client-name-container">
                                <h2 className="client-name">Bojack H.</h2>
                                <p className="client-date">
                                    Groom - June 15, 2023
                                </p>
                            </div>
                        </div>
                        <p className="client-review">{reviews}</p>
                        <div className="client-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <p className="client-rating-text">5.0</p>
                        </div>
                    </div>

                    <div className={`second-review review-card ${!showMore ? "hide-default" : ""}`}>
                        <img
                            src={quotaionImg}
                            alt="Client"
                            className="client-image"
                        />
                        <div className="client-info">
                            <div className="client-profile-container">
                                <h2 className="client-profile">BH</h2>
                            </div>
                            <div className="client-name-container">
                                <h2 className="client-name">Bojack H.</h2>
                                <p className="client-date">
                                    Groom - June 15, 2023
                                </p>
                            </div>
                        </div>
                        <p className="client-review">
                            "Our wedding day was an absolute dream come true,
                            thanks to O.B.H. From the smallest details to the
                            overall flow of the day, everything was flawlessly
                            executed. The team listened to our vision and
                            brought it to life with elegance and heart. We
                            couldn't have asked for a more perfect celebration."
                        </p>
                        <div className="client-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <p className="client-rating-text">5.0</p>
                        </div>
                    </div>

                    <div className="third-review review-card">
                        <img
                            src={quotaionImg}
                            alt="Client"
                            className="client-image"
                        />
                        <div className="client-info">
                            <div className="client-profile-container">
                                <h2 className="client-profile">BH</h2>
                            </div>
                            <div className="client-name-container">
                                <h2 className="client-name">Bojack H.</h2>
                                <p className="client-date">
                                    Groom - June 15, 2023
                                </p>
                            </div>
                        </div>
                        <p className="client-review">
                            "Our wedding day was an absolute dream come true,
                            thanks to O.B.H. From the smallest details to the
                            overall flow of the day, everything was flawlessly
                            executed. The team listened to our vision and
                            brought it to life with elegance and heart. We
                            couldn't have asked for a more perfect celebration."
                        </p>
                        <div className="client-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <p className="client-rating-text">5.0</p>
                        </div>
                    </div>

                    <div className={`fourth-review review-card ${!showMore ? "hide-default" : ""}`}>
                        <img
                            src={quotaionImg}
                            alt="Client"
                            className="client-image"
                        />
                        <div className="client-info">
                            <div className="client-profile-container">
                                <h2 className="client-profile">BH</h2>
                            </div>
                            <div className="client-name-container">
                                <h2 className="client-name">Bojack H.</h2>
                                <p className="client-date">
                                    Groom - June 15, 2023
                                </p>
                            </div>
                        </div>
                        <p className="client-review">
                            "Our wedding day was an absolute dream come true,
                            thanks to O.B.H. From the smallest details to the
                            overall flow of the day, everything was flawlessly
                            executed. The team listened to our vision and
                            brought it to life with elegance and heart. We
                            couldn't have asked for a more perfect celebration."
                        </p>
                        <div className="client-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <p className="client-rating-text">5.0</p>
                        </div>
                    </div>

                    <div className="fifth-review review-card">
                        <img
                            src={quotaionImg}
                            alt="Client"
                            className="client-image"
                        />
                        <div className="client-info">
                            <div className="client-profile-container">
                                <h2 className="client-profile">BH</h2>
                            </div>
                            <div className="client-name-container">
                                <h2 className="client-name">Bojack H.</h2>
                                <p className="client-date">
                                    Groom - June 15, 2023
                                </p>
                            </div>
                        </div>
                        <p className="client-review">
                            "Our wedding day was an absolute dream come true,
                            thanks to O.B.H. From the smallest details to the
                            overall flow of the day, everything was flawlessly
                            executed. The team listened to our vision and
                            brought it to life with elegance and heart. We
                            couldn't have asked for a more perfect celebration."
                        </p>
                        <div className="client-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <p className="client-rating-text">5.0</p>
                        </div>
                    </div>

                    <div className={`sixth-review review-card ${!showMore ? "hide-default" : ""}`}>
                        <img
                            src={quotaionImg}
                            alt="Client"
                            className="client-image"
                        />
                        <div className="client-info">
                            <div className="client-profile-container">
                                <h2 className="client-profile">BH</h2>
                            </div>
                            <div className="client-name-container">
                                <h2 className="client-name">Bojack H.</h2>
                                <p className="client-date">
                                    Groom - June 15, 2023
                                </p>
                            </div>
                        </div>
                        <p className="client-review">
                            "Our wedding day was an absolute dream come true,
                            thanks to O.B.H. From the smallest details to the
                            overall flow of the day, everything was flawlessly
                            executed. The team listened to our vision and
                            brought it to life with elegance and heart. We
                            couldn't have asked for a more perfect celebration."
                        </p>
                        <div className="client-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <p className="client-rating-text">5.0</p>
                        </div>
                    </div>

                    <div className={`seventh-review review-card ${!showMore ? "hide-default" : ""}`}>
                        <img
                            src={quotaionImg}
                            alt="Client"
                            className="client-image"
                        />
                        <div className="client-info">
                            <div className="client-profile-container">
                                <h2 className="client-profile">BH</h2>
                            </div>
                            <div className="client-name-container">
                                <h2 className="client-name">Bojack H.</h2>
                                <p className="client-date">
                                    Groom - June 15, 2023
                                </p>
                            </div>
                        </div>
                        <p className="client-review">
                            "Our wedding day was an absolute dream come true,
                            thanks to O.B.H. From the smallest details to the
                            overall flow of the day, everything was flawlessly
                            executed. The team listened to our vision and
                            brought it to life with elegance and heart. We
                            couldn't have asked for a more perfect celebration."
                        </p>
                        <div className="client-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <p className="client-rating-text">5.0</p>
                        </div>
                    </div>

                    <div className={`eight-review review-card ${!showMore ? "hide-default" : ""}`} >
                        <img
                            src={quotaionImg}
                            alt="Client"
                            className="client-image"
                        />
                        <div className="client-info">
                            <div className="client-profile-container">
                                <h2 className="client-profile">BH</h2>
                            </div>
                            <div className="client-name-container">
                                <h2 className="client-name">Bojack H.</h2>
                                <p className="client-date">
                                    Groom - June 15, 2023
                                </p>
                            </div>
                        </div>
                        <p className="client-review">
                            "Our wedding day was an absolute dream come true,
                            thanks to O.B.H. From the smallest details to the
                            overall flow of the day, everything was flawlessly
                            executed. The team listened to our vision and
                            brought it to life with elegance and heart. We
                            couldn't have asked for a more perfect celebration."
                        </p>
                        <div className="client-rating">
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <p className="client-rating-text">5.0</p>
                        </div>
                    </div>
                </div>
                <div className="review-btn-container">
                    <button className="review-btn" onClick={toggleReviews}>
                        <span>{showMore ? "See Less" : "See More"}</span>
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Review;
