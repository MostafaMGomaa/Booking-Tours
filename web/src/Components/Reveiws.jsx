import React from "react";
import Alex from "./image/reviews/alexander-schimmeck-uzM1XBFqa60-unsplash.jpg"
import photo from "./image/reviews/farah-samy-29Y5RyH16Ws-unsplash.jpg"
import simon from "./image/reviews/simon-berger-boyXZfqpwpU-unsplash.jpg"
const Reveiws = () => {
  return (
    <div className="reviews" id="reviews">
      <div className="container">
        <h3 className="special-heading">Reviews</h3>
        <div className="text">
          <p>
            We always ask our clients to leave honest reviews,
            <br />
            on the basis of which you can make a choice
          </p>
        </div>
        <div className="content">
          <div className="testimonial-area bg-light p-4 arrang">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div
                    id="carouselExampleIndicators"
                    className="carousel slide"
                    data-bs-ride="true"
                  >
                    <div className="carousel-indicators">
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="Slide 1"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="1"
                        aria-label="Slide 2"
                      ></button>
                      <button
                        type="button"
                        data-bs-target="#carouselExampleIndicators"
                        data-bs-slide-to="2"
                        aria-label="Slide 3"
                      ></button>
                    </div>
                    <div className="carousel-inner">
                      <div className="carousel-item active">
                        <div className="content text-center">
                          <div className="name">
                            <h4>Rahma Ibrahim</h4>
                            <h6 className="fs-5">
                              Tour: <span className="fs-6">Siwa</span>
                            </h6>
                          </div>
                          <div className="place">
                            <div className="person">
                              <img
                                src={Alex}
                                alt=""
                              />
                            </div>
                            <div className="stars">
                              <div className="stars d-flex align-items-center">
                                <h5>Service</h5>
                                <div className="icons">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                              </div>
                              <div className="stars d-flex align-items-center">
                                <h5>Tours</h5>
                                <div className="icons">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                              </div>
                              <div className="stars d-flex align-items-center">
                                <h5>Flight</h5>
                                <div className="icons">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                              </div>
                              <div className="stars d-flex align-items-center">
                                <h5>Bus</h5>
                                <div className="icons">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="pt-3">
                            Service is very good. We have best memories. I
                            recommend this site. Siwa is so beautiful with its
                            lake we have a lot of good time. I will never forget
                            this tour and I will reapeat it again
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="content text-center">
                          <div className="name">
                            <h4>Ali Hassan</h4>
                            <h6 className="fs-5">
                              Tour: <span className="fs-6">Alexandria</span>
                            </h6>
                          </div>
                          <div className="place">
                            <div className="person">
                              <img
                                src={photo}
                                alt=""
                              />
                            </div>
                            <div className="stars">
                              <div className="stars d-flex align-items-center">
                                <h5>Service</h5>
                                <div className="icons">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                              </div>
                              <div className="stars d-flex align-items-center">
                                <h5>Tours</h5>
                                <div className="icons">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                              </div>
                              <div className="stars d-flex align-items-center">
                                <h5>Flight</h5>
                                <div className="icons">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                              </div>
                              <div className="stars d-flex align-items-center">
                                <h5>Bus</h5>
                                <div className="icons">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="pt-3">
                            Service is very good. We have best memories. I
                            recommend this site. Siwa is so beautiful with its
                            lake we have a lot of good time. I will never forget
                            this tour and I will reapeat it again
                          </p>
                        </div>
                      </div>
                      <div className="carousel-item">
                        <div className="content text-center">
                          <div className="name">
                            <h4>Ayman Mousa</h4>
                            <h6 className="fs-5">
                              Tour: <span className="fs-6">Cairo</span>
                            </h6>
                          </div>
                          <div className="place">
                            <div className="person">
                              <img
                                src={simon}
                                alt=""
                              />
                            </div>
                            <div className="stars">
                              <div className="stars d-flex align-items-center">
                                <h5>Service</h5>
                                <div className="icons">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                              </div>
                              <div className="stars d-flex align-items-center">
                                <h5>Tours</h5>
                                <div className="icons">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                              </div>
                              <div className="stars d-flex align-items-center">
                                <h5>Flight</h5>
                                <div className="icons">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                              </div>
                              <div className="stars d-flex align-items-center">
                                <h5>Bus</h5>
                                <div className="icons">
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                  <i className="fa-solid fa-star"></i>
                                </div>
                              </div>
                            </div>
                          </div>
                          <p className="pt-3">
                            Service is very good. We have best memories. I
                            recommend this site. Siwa is so beautiful with its
                            lake we have a lot of good time. I will never forget
                            this tour and I will reapeat it again
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reveiws;
