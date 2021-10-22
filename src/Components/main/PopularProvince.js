import React, { Component } from "react";
import Slider from "react-slick";
import camau_namcan from "../../assets/imgsSlide/camau_namcan.png"
import cantho from "../../assets/imgsSlide/cantho.png"
import dalat from "../../assets/imgsSlide/dalat.png"
import danang from "../../assets/imgsSlide/danang.png"
import dongnai_namcattien from "../../assets/imgsSlide/dongnai_namcattien.png"
import hanoi from "../../assets/imgsSlide/hanoi.png"
import hatien from "../../assets/imgsSlide/hatien.png"
import hue from "../../assets/imgsSlide/hue.png"
import laocai_sapa from "../../assets/imgsSlide/laocai_sapa.png"
import longxuyen_chaudoc from "../../assets/imgsSlide/longxuyen_chaudoc.png"
import nhatrang_khanhhoa from "../../assets/imgsSlide/nhatrang_khanhhoa.png"
import quangnam_hoian from "../../assets/imgsSlide/quangnam_hoian.png"
import quangninh_halong from "../../assets/imgsSlide/quangninh_halong.png"
import saigon from "../../assets/imgsSlide/saigon.png"

import leftArrow from "../../assets/arrowSlie/left-arrow.svg"
import rightArrow from "../../assets/arrowSlie/right-arrow.svg"

export default class ProvincePopular extends Component {
  state = { sildeIndex: 0 }
  render() {
    const SlickArrowLeft = ({ currentSlide, slideCount, onClick }) => (
      <div className="cursor-pointer w-12 h-12 absolute top-1/2 left-1/4 transform -translate-y-1/2 sm:left-1/4 z-10 shadow-2xl border-2 border-gray-300 flex justify-center items-center bg-gray-300" style={{ borderRadius: "50%" }} onClick={onClick} >
        <img src={leftArrow} alt="prevArrow" />
      </div>
    );
    const SlickArrowRight = ({ currentSlide, slideCount, onClick }) => (
      <div className=" cursor-pointer w-12 h-12 absolute top-1/2 right-1/4 transform -translate-y-1/2 shadow-2xl border-2 border-gray-300 flex justify-center items-center bg-gray-300" style={{ borderRadius: "50%" }} onClick={onClick} >
        <img src={rightArrow} alt="nextArrow" />
      </div>
    );
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "0px",
      autoplay: true,
      slidesToShow: 7,
      slidesToScroll: 1,
      speed: 1000,
      prevArrow: <SlickArrowLeft />,
      nextArrow: <SlickArrowRight />,
      beforeChange: (prev, next) => { this.setState({ sildeIndex: next }) },
      responsive: [
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
          }
        },
        {
          breakpoint: 640,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
          }
        },
      ]
    };
    const arrLocations = [camau_namcan, cantho, dalat, danang
      , dongnai_namcattien, hanoi
      , hatien, hue, laocai_sapa
      , longxuyen_chaudoc, nhatrang_khanhhoa
      , quangnam_hoian, quangninh_halong, saigon];
    return (
      <>
        <div className="w-full flex flex-col justify-center items-center">
          <p className="uppercase text-xl md:text-3xl font-extrabold tracking-widest mb-2" style={{ color: "#ee5222" }}>Điểm đến phổ biến</p>
          <p className="tracking-wide" style={{ color: "#004a2f", fontSize: "min(22px,3.5vw)" }}>Gợi ý những điểm du lịch được ưa thích trong năm</p>

        </div>
        <div className="relative slide-provine">
          <Slider {...settings}>
            {arrLocations.map((province, index) => {
              return <div key={index}>
                <div className={this.state.sildeIndex === index ? "slideShow" : "slideHide"}>
                  <img className="w-full h-64 rounded-xl" src={province} alt={province} />
                  <div className="flex absolute justify-center items-center gap-2 transform translate-x-1/2  bottom-5 right-1/2">
                    <i className="fas fa-map-marker-alt" style={{ color: "white" }}></i>
                    <span className="text-white text-xl">Hà Nội</span>
                  </div>
                </div>
              </div>
            })}
          </Slider>
        </div>
      </>
    );
  }
}