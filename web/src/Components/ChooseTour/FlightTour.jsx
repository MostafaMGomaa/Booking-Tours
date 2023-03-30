import React from "react";
import Styles from "./flight.module.css";
import report from "./image/report.png";
import timer from "./image/Timers.png";
import Baggage from "./image/Baggage.png";
import egyptair from "./image/Air.png";
import egypt from "./image/Egypt.png";
import plane from "./image/plane.png";
import dot from "./image/dot.png";
import { Box, Slider } from "@mui/material";
import { NavLink } from "react-router-dom";

const FlightTour = () => {
  const [value, setValue] = React.useState([20, 90]);

  return (
    <main className={Styles.mains}>
      <div className={Styles.title}>
        <h2>Choose Your Tour</h2>
      </div>
      <section className={`${Styles.parent} justify-content-around row`}>
        <div className={`${Styles.option} p-0 col-lg-3 col-md-7 col-sm-12`}>
          <div className={`${Styles.stop} p-lg-1  p-sm-3 p-2 w-100 my-lg-3`}>
            <div>
              <img src={report} alt="" />
              <span className="px-lg-3 px-md-1 py-1">Stop</span>
            </div>
            <div className="d-flex">
              <input type="checkbox" id="scales" name="scales" />
              <label className="px-lg-3 px-md-1 py-1" for="scales">
                Show non stop flights
              </label>{" "}
            </div>
            <div>
              <input type="checkbox" id="scales1" name="scales" />
              <label className="px-lg-3 px-md-1 py-1" for="scales1">
                1 stop
              </label>{" "}
            </div>
            <div>
              <input type="checkbox" id="scales2" name="scales" />
              <label className="px-lg-3 px-md-1 py-1" for="scales2">
                +2 stops
              </label>{" "}
            </div>
          </div>

          <div className={`${Styles.times}  w-100 my-lg-3`}>
            <div className={Styles.titles}>
              <img src={timer} alt="" /> <span>Departure / arrival times </span>
            </div>
            <div className={Styles.range}>
              <div className="d-flex justify-content-between">
                <span>Departure times</span>
                <span>00:00 to 23:59 </span>
              </div>
              <Box>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  valueLabelDisplay="auto"
                />
              </Box>
            </div>
            <div className={Styles.range}>
              <div className=" d-flex justify-content-between">
                <span>Arrival times</span>
                <span>00:00 to 23:59 </span>
              </div>
              <Box>
                <Slider
                  getAriaLabel={() => "Temperature range"}
                  value={value}
                  valueLabelDisplay="auto"
                />
              </Box>
            </div>
          </div>
          <div
            className={`${Styles.baggage} p-lg-1 p-2  p-sm-3  w-100 my-lg-3`}
          >
            <div className={Styles.titles}>
              <img src={Baggage} alt="" />
              <span className="px-lg-3 px-md-1 py-1">Baggage</span>
            </div>
            <div className="d-flex">
              <input type="checkbox" id="bag" name="scales" />
              <label className="px-lg-3 px-md-1 py-1" for="bag">
                Check-in baggage of 23 kg
              </label>{" "}
            </div>
            <div className="d-flex ">
              <input type="checkbox" id="Bag1" name="scales" />
              <label className="px-lg-3 px-md-1 py-1" for="Bag1">
                Check-in baggage of 30 kg
              </label>{" "}
            </div>
          </div>
        </div>
        <div className={`${Styles.info} col-lg-8 m-sm-0 p-sm-0 col-md-12 col-sm-12`}>
          <div className={`${Styles.plane} my-2`} style={{border:"2px black solid" , borderRadius:"15px"}}>
            <span className={`${Styles.titles}`}>Please select your departure flight </span>
            <div className={`${Styles.plane}`}>
              <div
                className={`${Styles.child} flex-wrap align-items-center d-flex justify-content-around`}
              >
                <div className="col">
                  <img src={egyptair} className={Styles.air} alt="" />
                </div>
                <div className="col-6 col-sm-6 d-flex justify-content-around">
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
                      <img src={dot} alt="" />
    
                      <img src={plane} alt="" />
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="d-block w-100">22.30</span>
                    <span className="d-block w-100">SSH</span>
                  </div>
                </div>
                <div className="col">
                  <img src={timer} alt="" />
                  <span className="m-2">1h</span>
                </div>
                <div className="col">
                  <span>Non Stop</span>
                </div>
                <div className="col">
                 <div className="text-center">
                 <span className="d-block ">Price</span> <span className="d-block">1500 L.E</span>
                 </div>
                </div>
                <div className="col">
                  <NavLink to="/diraction" className={`${Styles.link}`}>View detials</NavLink>
                </div>
              </div>
               
            
            </div>
            <div
            className={`${Styles.child} flex-wrap align-items-center d-flex justify-content-around`}
          >
            <div className="col">
              <img src={egypt} className={Styles.air} alt="" />
            </div>
            <div className="col-6 col-sm-6 d-flex justify-content-around">
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
                  <img src={dot} alt="" />

                  <img src={plane} alt="" />
                </div>
              </div>
              <div className="text-center">
                <span className="d-block w-100">22.30</span>
                <span className="d-block w-100">CAI</span>
              </div>
            </div>
            <div className="col">
              <img src={timer} alt="" />
              <span className="m-2">1h</span>
            </div>
            <div className="col">
              <span>1 Stop</span>
            </div>
            <div className="col">
             <div className="text-center">
             <span className="d-block ">Price</span> <span className="d-block">1700 L.E</span>
             </div>
            </div>
            <div className="col">
              <NavLink to="/diraction" className={`${Styles.link}`}>View detials</NavLink>
            </div>
          </div>
          </div>



          
          <div className={`${Styles.plane}`} style={{border:"2px black solid" , borderRadius:"15px"}}>
            <span className={`${Styles.titles}`}>Please select your departure flight </span>
            <div className={`${Styles.plane}`}>
              <div
                className={`${Styles.child} flex-wrap align-items-center d-flex justify-content-around`}
              >
                <div className="col">
                  <img src={egyptair} className={Styles.air} alt="" />
                </div>
                <div className="col-6 col-sm-6 d-flex justify-content-around">
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
                      <img src={dot} alt="" />
    
                      <img src={plane} alt="" />
                    </div>
                  </div>
                  <div className="text-center">
                    <span className="d-block w-100">22.30</span>
                    <span className="d-block w-100">SSH</span>
                  </div>
                </div>
                <div className="col">
                  <img src={timer} alt="" />
                  <span className="m-2">1h</span>
                </div>
                <div className="col">
                  <span>Non Stop</span>
                </div>
                <div className="col">
                 <div className="text-center">
                 <span className="d-block ">Price</span> <span className="d-block">1500 L.E</span>
                 </div>
                </div>
                <div className="col">
                  <NavLink to="/diraction" className={`${Styles.link}`}>View detials</NavLink>
                </div>
              </div>
               
            
            </div>
            <div
            className={`${Styles.child} flex-wrap align-items-center d-flex justify-content-around`}
          >
            <div className="col">
              <img src={egypt} className={Styles.air} alt="" />
            </div>
            <div className="col-6 col-sm-6 d-flex justify-content-around">
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
                  <img src={dot} alt="" />

                  <img src={plane} alt="" />
                </div>
              </div>
              <div className="text-center">
                <span className="d-block w-100">22.30</span>
                <span className="d-block w-100">CAI</span>
              </div>
            </div>
            <div className="col">
              <img src={timer} alt="" />
              <span className="m-2">1h</span>
            </div>
            <div className="col">
              <span>1 Stop</span>
            </div>
            <div className="col">
             <div className="text-center">
             <span className="d-block ">Price</span> <span className="d-block">1700 L.E</span>
             </div>
            </div>
            <div className="col">
              <NavLink to="/diraction" className={`${Styles.link}`}>View detials</NavLink>
            </div>
          </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default FlightTour;
