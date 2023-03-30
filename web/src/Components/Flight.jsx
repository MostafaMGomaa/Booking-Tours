import React, { useState } from "react";
import plane from "./image/flight/plane.png";
import bus from "./image/flight/bus.png";
import location from "./image/flight/location.png";
import star from "./image/flight/star.png";
import arrow from "./image/flight/arrow .png";
import date from "./image/flight/calendar.png";
import min from "./image/flight/min.png";
import plus from "./image/flight/plus.png";
import add from "./image/flight/add.png";
import mins from "./image/flight/mins.png";
import { NavLink } from "react-router-dom";
const Flight = () => {
  const [flight, setflight] = useState(true);

  return (
    <div className="containerflight">
      <div className="flight" id="flight">
        <div className="container">
          <h3 className="special-heading text-light">Flight with us</h3>
          <div className="content">
            <div className="double">
              <div
                className={`transpornat rounded-top ${flight ? "active" : ""}`}
                onClick={() => {
                  setflight(true);
                }}
              >
                <img src={plane} className="flightransport " alt="plane" />
                Tour with Flight
              </div>
              <div
                className={`transpornat rounded-top ${flight ? "" : "active"}`}
                onClick={() => {
                  setflight(false);
                }}
              >
                <img src={bus} className="flightransport" alt="bus" />
                Tour with Bus
              </div>
            </div>
            {flight ? (
              <div className="container pb-5 bg-light rounded-end rounded-bottom">
                <div className="chexs">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Return Flight
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      One-way Flight
                    </label>
                  </div>
                </div>
                <div className=" row justify-content-around align-items-center">
                  <div className="col-lg-3 col-md-3 col-sm-5 col-5 p-lg-3 p-md-2 p-sm-2  p-2 mor">
                    <img src={location} alt="location" />
                    <p>Coming From</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-5 col-5 p-lg-3 p-md-2 p-sm-2 p-2 mor">
                    <img src={location} alt="location" />
                    <p>Coming To</p>
                  </div>
                  <div className=" dropdown-toggle col-lg-3 col-md-3 col-sm-5 col-5 p-lg-3 p-md-2 p-sm-0 p-0 justify-content-between mor">
                    <div
                      type="button"
                      id="dropdownMenuButton1"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={star} alt="location" />
                      <button className="btn">Class</button>
                    </div>
                    <img src={arrow} alt="location" />
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuButton2"
                    >
                      <li className="dropdown-item">Action</li>
                      <li className="dropdown-item">Another action</li>
                      <li className="dropdown-item">Something else here</li>
                    </ul>
                  </div>
                  <div className=" dropdown-toggle col-lg-3 col-md-4 col-sm-5 col-5 p-lg-3 p-md-2 p-sm-0 p-0 justify-content-between mor">
                    <div
                      type="button"
                      id="dropdownMenuButton2"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      <img src={star} alt="location" />
                      <button className="btn">No.Tickets</button>
                    </div>
                    <img src={arrow} alt="location" />
                    <ul
                      className="dropdown-menu col-lg-3 col-md-4 col-sm-5 col-5"
                      aria-labelledby="dropdownMenuButton1"
                    >
                      <li className="dropdown-item d-flex justify-content-between align-items-center">
                        <span>Adult</span>
                        <div className="text-center d-flex justify-content-center mins">
                          <img src={add} alt="" />
                          <span>1</span> <img src={mins} alt="" />
                        </div>
                      </li>

                      <li className="dropdown-item d-flex justify-content-between align-items-center">
                        {" "}
                        <span>Children (Ages 2-12)</span>
                        <div className="text-center d-flex justify-content-center mins">
                          <img src={add} alt="" />
                          <span>1</span> <img src={mins} alt="" />
                        </div>
                      </li>
                      <li className="dropdown-item d-flex justify-content-between align-items-center">
                        {" "}
                        <span>Infants (Ages 0-2)</span>
                        <div className="text-center d-flex justify-content-center mins">
                          <img src={add} alt="" />
                          <span>1</span> <img src={mins} alt="" />
                        </div>
                      </li>
                      <li className="dropdown-item d-flex justify-content-between align-items-center">
                        {" "}
                        <span>Seniors (65+)</span>
                        <div className="text-center d-flex justify-content-center mins">
                          <img src={add} alt="" />
                          <span>1</span> <img src={mins} alt="" />
                        </div>
                      </li>
                      <li className="dropdown-item d-flex justify-content-between align-items-center">
                        {" "}
                        <span>Students (Ages 12-24</span>
                        <div className="text-center d-flex justify-content-center mins">
                          <img src={add} alt="" />
                          <span>1</span> <img src={mins} alt="" />
                        </div>
                      </li>
                    </ul>
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-5 col-5 justify-content-between mor p-lg-3 p-md-2 p-sm-1 p-1">
                    <label htmlFor="upload">
                      <img src={date} alt="" />
                      Departing Date
                    </label>
                    <input id="upload" type="date" />
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-5 col-5 justify-content-between mor p-lg-3 p-md-2 p-sm-2 p-2">
                    <label htmlFor="upload">
                      <img src={date} alt="" />
                      Returning Date
                    </label>
                    <input id="upload" type="date" />
                  </div>
                </div>
                <NavLink to="/flightTour" className="btn d-block mt-5 mx-auto bg  text-light">
                  Search for Flight
                </NavLink>
              </div>
            ) : (
              <div className="container pb-5 bg-light rounded-end rounded-bottom">
                <div className="chexs">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" for="inlineRadio1">
                      Return Flight
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" for="inlineRadio2">
                      One-way Flight
                    </label>
                  </div>
                </div>
                <div className=" row justify-content-around align-items-center">
                  <div className="col-lg-3 col-md-3 col-sm-5 col-5 p-lg-3 p-md-2 p-sm-2 p-2 mor">
                    <img src={location} alt="location" />
                    <p>Coming From</p>
                  </div>
                  <div className="col-lg-3 col-md-3 col-sm-5 col-5 p-lg-3 p-md-2 p-sm-2 p-2 mor">
                    <img src={location} alt="location" />
                    <p>Coming To</p>
                  </div>
                  <div className=" col-lg-3 col-md-3 col-sm-5 col-5 p-lg-3 p-md-2 p-sm-0 p-0 justify-content-between mor">
                    <img src={plus} alt="" />
                    <span>Passengers</span>
                    <img src={min} alt="" />
                  </div>

                  <div className="col-lg-3 col-md-4 col-sm-5 col-5 justify-content-between mor p-lg-3 p-md-2 p-sm-1 p-1">
                    <label htmlFor="upload">
                      <img src={date} alt="" />
                      Departing Date
                    </label>
                    <input id="upload" type="date" />
                  </div>
                  <div className="col-lg-3 col-md-4 col-sm-5 col-5 justify-content-between mor p-lg-3 p-md-2 p-sm-2 p-2">
                    <label htmlFor="upload">
                      <img src={date} alt="" />
                      Returning Date
                    </label>
                    <input id="upload" type="date" />
                  </div>
                </div>
                <NavLink to="/bustTour" className="btn d-block mt-5 mx-auto bg  text-light">
                  Search for Trip
                </NavLink>
              </div>
            )}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Flight;
