import React from "react";
import aswan from "./image/city/aswan.jpg";
import cairo from "./image/city/cairo.jpg";
import alexandria from "./image/city/alexandria.jpg";
import luxor from "./image/city/luxor.jpg";
import temple from "./image/city/temple.jpg";
import simon from "./image/city/simon-berger-boyXZfqpwpU-unsplash.jpg";
import axp from "./image/city/axp-photography-FW_VMLjJsKc-unsplash.jpg";
import schimmeck from "./image/city/alexander-schimmeck-uzM1XBFqa60-unsplash.jpg";
import siwa from "./image/city/siwa.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation } from "swiper";
const Tour = () => {
  return (
    <div className="tour" id="tour">
      <div className="container">
        <h3 className="special-heading">Tour</h3>
        <p>
          We provide you interesting and exsiting tours to
          <br />
          different parts of Egypt
        </p>
        <Swiper
          slidesPerView={3}
          navigation={true}
          modules={[Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            {" "}
            <div className="card">
              <div className="img-wrapper">
                <img src={aswan} className="d-block w-100" alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Aswan</h5>
                <p className="card-text">
                  Egypt's sunniest southern city is the perfect destination to
                  stroll and relax in a magical cultural setting. Aswan offers a
                  splendid view of the Nile. It has also been known for its
                  environmental therapy: burying the aching parts of your body
                  in Aswan sand can help relieving you from stubborn ailments.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <div className="img-wrapper">
                <img src={cairo} className="d-block w-100" alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Cairo</h5>
                <p className="card-text">
                  Situated by the Nile, Egypt’s capital Cairo holds some of the
                  country’s best historical and contemporary offerings, lively
                  streets that never sleep, and diverse neighborhoods. The
                  dynamic metropolis features numerous heritage sites that imbue
                  the city with a distinct charm and offer a glimpse into its
                  Islamic and Coptic histories.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <div className="img-wrapper">
                <img src={alexandria} className="d-block w-100" alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Alexandria</h5>
                <p className="card-text">
                  once an Ancient Egyptian capital, is known today as the
                  world's greatest open-air museum. From the tomb of Tutankhamen
                  in the Valley of the Kings and the magnificent sunset views at
                  the majestic temple complexes of Karnak and Luxor to the
                  exciting and fun Nile cruises.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <div className="img-wrapper">
                <img src={aswan} className="d-block w-100" alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Aswan</h5>
                <p className="card-text">
                  Egypt's sunniest southern city is the perfect destination to
                  stroll and relax in a magical cultural setting. Aswan offers a
                  splendid view of the Nile. It has also been known for its
                  environmental therapy: burying the aching parts of your body
                  in Aswan sand can help relieving you from stubborn ailments.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
            <div className="img-wrapper">
              <img src={luxor} className="d-block w-100" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Aswan</h5>
              <p className="card-text">
                Egypt's sunniest southern city is the perfect destination to
                stroll and relax in a magical cultural setting. Aswan offers a
                splendid view of the Nile. It has also been known for its
                environmental therapy: burying the aching parts of your body
                in Aswan sand can help relieving you from stubborn ailments.
              </p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
            <div className="img-wrapper">
              <img src={axp} className="d-block w-100" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Aswan</h5>
              <p className="card-text">
                Egypt's sunniest southern city is the perfect destination to
                stroll and relax in a magical cultural setting. Aswan offers a
                splendid view of the Nile. It has also been known for its
                environmental therapy: burying the aching parts of your body
                in Aswan sand can help relieving you from stubborn ailments.
              </p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <div className="img-wrapper">
                <img src={cairo} className="d-block w-100" alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title">Cairo</h5>
                <p className="card-text">
                  Egypt's sunniest southern city is the perfect destination to
                  stroll and relax in a magical cultural setting. Aswan offers a
                  splendid view of the Nile. It has also been known for its
                  environmental therapy: burying the aching parts of your body
                  in Aswan sand can help relieving you from stubborn ailments.
                </p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
            <div className="img-wrapper">
              <img src={schimmeck} className="d-block w-100" alt="" />
            </div>
            <div className="card-body">
              <h5 className="card-title">Aswan</h5>
              <p className="card-text">
                Egypt's sunniest southern city is the perfect destination to
                stroll and relax in a magical cultural setting. Aswan offers a
                splendid view of the Nile. It has also been known for its
                environmental therapy: burying the aching parts of your body
                in Aswan sand can help relieving you from stubborn ailments.
              </p>
            </div>
          </div>
          </SwiperSlide>
          <SwiperSlide>
            {" "}
            <div className="card">
              <div className="img-wrapper">
                <img src={simon} className="d-block w-100" alt="" />
              </div>
              <div className="card-body">
                <h5 className="card-title">aswan</h5>
                <p className="card-text">
                  Egypt's sunniest southern city is the perfect destination to
                  stroll and relax in a magical cultural setting. Aswan offers a
                  splendid view of the Nile. It has also been known for its
                  environmental therapy: burying the aching parts of your body
                  in Aswan sand can help relieving you from stubborn ailments.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default Tour;
