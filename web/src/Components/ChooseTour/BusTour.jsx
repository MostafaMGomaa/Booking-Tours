import React from 'react'
import { NavLink } from 'react-router-dom';
import Styles from "./bus.module.css";
import timer from "./image/Timers.png";
import tv from "./image/tv.png";
import busbig from "./image/busbig.png";
import wifi from "./image/wifi.png";
import airbus from "./image/airbus.png";
import bus from "./image/bus.png";
import dot from "./image/dot.png";
const BusTour = () => {
  return (
    <main className={Styles.mains}>
    <div className={Styles.title}>
      <h2>Choose Your Tour</h2>
    </div>
    <section className={`${Styles.parent} justify-content-around row`}>
      <div className={`${Styles.option} p-lg-2 col-lg-3 col-md-7 col-sm-12`}>
        <div className={`${Styles.stop} p-lg-1  p-sm-3 p-2 w-100 my-lg-3`}>
          <div>
            <img src={bus} alt="" />
            <span className="px-lg-3 px-md-1 py-1 fw-bold">Bus Classes </span>
          </div>
          <div className="d-flex">
            <input type="checkbox" id="scales" name="scales" />
            <label className="px-lg-3 px-md-1 py-1" for="scales">
              Deluxe Plus
            </label>{" "}
          </div>
          <div>
            <input type="checkbox" id="scales1" name="scales" />
            <label className="px-lg-3 px-md-1 py-1" for="scales1">
             Elite Plus
            </label>{" "}
          </div>
          <div>
            <input type="checkbox" id="scales2" name="scales" />
            <label className="px-lg-3 px-md-1 py-1" for="scales2">
              Super Go
            </label>{" "}
          </div>
          <div>
            <input type="checkbox" id="scales2" name="scales" />
            <label className="px-lg-3 px-md-1 py-1" for="scales2">
              Elite D.D
            </label>{" "}
          </div>
          <div>
            <input type="checkbox" id="scales2" name="scales" />
            <label className="px-lg-3 px-md-1 py-1" for="scales2">
             GoMini
            </label>{" "}
          </div>
          <div>
            <input type="checkbox" id="scales2" name="scales" />
            <label className="px-lg-3 px-md-1 py-1" for="scales2">
              Classic
            </label>{" "}
          </div>
        </div>

        <div
          className={`${Styles.baggage} p-lg-1 p-2  p-sm-3  w-100 my-lg-3`}
        >
          <div className={Styles.titles}>
            <img src={timer} alt="" />
            <span className="px-lg-3 fw-bold px-md-1 py-1">Departure / arrival times </span>
          </div>
          <div className='d-flex'>
          <div className="d-flex m-3">
            <input type="checkbox" id="bag" name="scales" />
            <label className="px-lg-3 px-md-1 py-1" for="bag">
              AM
            </label>{" "}
          </div>
          <div className="d-flex m-3">
            <input type="checkbox" id="Bag1" name="scales" />
            <label className="px-lg-3 px-md-1 py-1" for="Bag1">
              PM
            </label>{" "}
          </div>
          </div>
        </div>
      </div>
      <div className={`${Styles.info} col-lg-8 m-sm-0 p-sm-0 col-md-12 col-sm-12`}>
        <div className={`${Styles.plane} my-2`} style={{border:"2px black solid" , borderRadius:"15px"}}>
          <span className={`${Styles.titles} p-3 fw-bold`}>Please select your departure trip </span>
          <div className={`${Styles.plane}`}>
            <div
              className={`${Styles.child} flex-wrap align-items-center d-flex justify-content-around`}
            >
              <div className="col text-center p-lg-2">
                <div className={Styles.bus}>
                <img src={busbig}  alt='Bus'/>
                </div>
                <div className={`${Styles.options} d-flex p-lg-1`}>
                <img className='m-1' src={tv} alt='tv'/>
                <img className='m-1' src={wifi} alt='wifi'/>
                <img className='m-1' src={airbus} alt='airbus'/>
                </div>
              </div>
              <div className="col-5 col-sm-6 d-flex justify-content-center">
                <div className="text-center">
                  <span className="d-block w-100">20.00</span>
                 
                </div>
                <div className={`${Styles.dirct} col-6 text-center`}>
                 
                  <div className="d-flex justify-content-center align-items-center">
                    {" "}
                    <img src={dot} alt=""/>
                    <img src={dot} alt=""/>
                    <img src={bus} alt=""/>
                   
                  </div>
                </div>
                <div className="text-center">
                  <span className="d-block w-100">05.00</span>
                 
                </div>
              </div>
              <div className="col">
                <img src={timer} alt="" />
                <span className="m-2">10h</span>
              </div>
              <div className="col">
                <span>Deluxe Plus </span>
              </div>
              <div className="col">
               <div className="text-center">
               <span className="d-block ">Price</span> <span className="d-block">250 L.E</span>
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
          <div className="col text-center p-lg-2">
          <div className={Styles.bus}>
            <img src={busbig}  alt='Bus'/>
            </div>
            <div className={`${Styles.options} d-flex p-lg-1`}>
            <img className='m-2' src={tv} alt='tv'/>
            <img className='m-2' src={airbus} alt='airbus'/>
            </div>
          </div>
          <div className="col-5 col-sm-6 d-flex justify-content-center">
            <div className="text-center">
              <span className="d-block w-100">21.30</span>
             
            </div>
            <div className={`${Styles.dirct} col-6 text-center`}>
             
              <div className="d-flex justify-content-center align-items-center">
                {" "}
                <img src={dot} alt=""/>
                <img src={dot} alt=""/>
                <img src={bus} alt=""/>
               
              </div>
            </div>
            <div className="text-center">
              <span className="d-block w-100">8.30</span>
             
            </div>
          </div>
          <div className="col">
            <img src={timer} alt="" />
            <span className="m-2">10h</span>
          </div>
          <div className="col">
            <span>Classic </span>
          </div>
          <div className="col">
           <div className="text-center">
           <span className="d-block ">Price</span> <span className="d-block">250 L.E</span>
           </div>
          </div>
          <div className="col">
            <NavLink to="/diraction" className={`${Styles.link}`}>View detials</NavLink>
          </div>
        </div>
        </div>



        
        <div className={`${Styles.plane}`} style={{border:"2px black solid" , borderRadius:"15px"}}>
          <span className={`${Styles.titles} fw-bold p-2`}>Please select your departure flight </span>
          <div className={`${Styles.plane}`}>
          <div
          className={`${Styles.child} flex-wrap align-items-center d-flex justify-content-around`}
        >
          <div className="col text-center p-lg-2">
          <div className={Styles.bus}>
            <img src={busbig}  alt='Bus'/>
            </div>
            <div className={`${Styles.options} d-flex p-lg-1`}>
            <img className='m-2' src={tv} alt='tv'/>
           
            <img className='m-2' src={airbus} alt='airbus'/>
            </div>
          </div>
          <div className="col-5 col-sm-6 d-flex justify-content-center">
            <div className="text-center">
              <span className="d-block w-100">22.30</span>
             
            </div>
            <div className={`${Styles.dirct} col-6 text-center`}>
             
              <div className="d-flex justify-content-center align-items-center">
                {" "}
                <img src={dot} alt=""/>
                <img src={dot} alt=""/>
                <img src={bus} alt=""/>
               
              </div>
            </div>
            <div className="text-center">
              <span className="d-block w-100">22.30</span>
             
            </div>
          </div>
          <div className="col">
            <img src={timer} alt="" />
            <span className="m-2">10h</span>
          </div>
          <div className="col">
            <span>classic </span>
          </div>
          <div className="col">
           <div className="text-center">
           <span className="d-block ">Price</span> <span className="d-block">250 L.E</span>
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
          <div className="col text-center p-lg-2">
          <div className={Styles.bus}>
            <img src={busbig}  alt='Bus'/>
            </div>
            <div className={`${Styles.options} d-flex p-lg-1`}>
            <img className='m-2' src={tv} alt='tv'/>
           
            <img className='m-2' src={airbus} alt='airbus'/>
            </div>
          </div>
          <div className="col-5 col-sm-6 d-flex justify-content-center">
            <div className="text-center">
              <span className="d-block w-100">22.30</span>
             
            </div>
            <div className={`${Styles.dirct} col-6 text-center`}>
             
              <div className="d-flex justify-content-center align-items-center">
                {" "}
                <img src={dot} alt=""/>
                <img src={dot} alt=""/>
                <img src={bus} alt=""/>
               
              </div>
            </div>
            <div className="text-center">
              <span className="d-block w-100">22.30</span>
             
            </div>
          </div>
          <div className="col">
            <img src={timer} alt="" />
            <span className="m-2">10h</span>
          </div>
          <div className="col">
            <span>Classic </span>
          </div>
          <div className="col">
           <div className="text-center">
           <span className="d-block ">Price</span> <span className="d-block">250 L.E</span>
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
  )
}

export default BusTour
