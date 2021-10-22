import React,{memo} from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import SwiperCore, {
    Autoplay, Pagination, Navigation
} from 'swiper';


// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);


function SlidesComponent() {
    return (
        <div className="flex w-full justify-center items-center mt-10 md:mt-5">
            <Swiper speed={3000} loop={true} centeredSlides={true} autoplay={{
                "delay": 3000,
                "disableOnInteraction": false
            }}  className="mySwiper " style={{maxWidth : "936px", width : "100%"}}>
                <SwiperSlide ><img src="./images/img/slide_1.png" alt="" /></SwiperSlide>
                <SwiperSlide ><img src="./images/img/slide_2.jpg" alt="" /></SwiperSlide>
                <SwiperSlide ><img src="./images/img/slide_3.jpg" alt="" /></SwiperSlide>
            </Swiper>
        </div>
    )
}

export default memo(SlidesComponent)