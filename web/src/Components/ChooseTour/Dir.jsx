import React from "react";
import Styles from "./diraction.module.css";
import logo from "./image/logo.png";
import qrcode from "./image/qrcode.png";
import plane from "./image/plane.png";
import dot from "./image/dot.png";
import { NavLink } from "react-router-dom";
const diraction = () => {
  return (
    <main className={`${Styles.mains}`}>
      <div className={`${Styles.option} d-flex `}>
        <span>Return Flight</span>{" "}
        <span className="actives"> One-way Flight</span>
      </div>
      <div
        className={`${Styles.parent} p-lg-3 justify-content-between flex-wrap d-flex`}
      >
        <div className={`${Styles.from} col-lg-5 col-sm-12 col-12 d-flex`}>
          <div className={`${Styles.child} col-6`}>
            <span>From</span>
            <span className={Styles.city}>Cairo</span>
            <span>Cairo International Airport , Egypt</span>
          </div>
          <div className={`${Styles.child} col-6`}>
            <span>To</span>
            <span className={Styles.city}>Aswan</span>
            <span>Aswan International Airport , Egypt</span>
          </div>
        </div>

        <div className={`${Styles.from} col-lg-3 col-sm-6 col-6 d-flex `}>
          <div className={`${Styles.child} col-6`}>
            <span className="fw-bold">Depart</span>
            <span>13 Dec 2023</span>
            <span>Friday</span>
          </div>
          <div className={`${Styles.child} col-6`}>
            <span className="fw-bold">Return</span>
            <span>25 Dec 2023</span>
            <span>Sunday</span>
          </div>
        </div>
        <div className={`${Styles.from} col-lg-3 col-sm-6 col-6 d-flex `}>
          <div className={`${Styles.child} col-4`}>
            <span className="fw-bold">Adults</span>

            <span className={Styles.num}>2</span>
          </div>
          <div className={`${Styles.child} col-4`}>
            <span className="fw-bold">Kids</span>

            <span className={Styles.num}>2</span>
          </div>
          <div className={`${Styles.child} col-4`}>
            <span className="fw-bold">Infants</span>

            <span className={Styles.num}>1</span>
          </div>
        </div>
      </div>
      <div
        className={`${Styles.parent2} mt-3  p-lg-3 justify-content-between flex-wrap d-flex`}
      >
        <div className={`${Styles.from} col-lg-5 col-sm-12 col-12 d-flex`}>
          <div className={`${Styles.child} col-4`}>
            <img src={logo} />
          </div>
          <div className="col-8 col-sm-8 d-flex justify-content-around align-items-center">
            <div className="text-center">
              <span className="d-block w-100">22.30</span>
              <span className="d-block w-100">CAI</span>
            </div>
            <div className={`${Styles.dirct} col-6 text-center`}>
              <span className="d-block w-100">Dirct</span>
              <div className="d-flex justify-content-center align-items-center">
                {" "}
                <img src={dot} alt="" />
                <img src={dot} alt="" />
                <img src={plane} alt="" />
              </div>
            </div>
            <div className="text-center">
              <span className="d-block w-100">22.30</span>
              <span className="d-block w-100">SSH</span>
            </div>
          </div>
        </div>

        <div className={`${Styles.from} col-lg-3 col-sm-6 col-6 d-flex `}>
          <div className={`${Styles.child} col-6`}>
            <span>Baggage</span>

            <span>30 Km</span>
          </div>
          <div className={`${Styles.child} col-6`}>
            <span>Extra Baggage</span>

            <span>20 Km</span>
          </div>
        </div>
        <div className={`${Styles.from} col-lg-3 col-sm-6 col-6 d-flex `}>
          <div className={`${Styles.child} col-4`}>
            <span className="fw-bold">Total</span>

            <span className={Styles.num}>2000 L.E</span>
          </div>
          <div className={`${Styles.child} col-4`}>
            <NavLink to="/paynow" className="text-danger">PayNow</NavLink>
          </div>
          <div className={`${Styles.child} col-4`}>
            <img className={Styles.qrcode} src={qrcode} alt="" />
          </div>
        </div>
      </div>
    </main>
  );
};

export default diraction;
