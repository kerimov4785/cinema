import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';


// import required modules
import { Navigation } from 'swiper/modules';

export default function Slider() {
    let arr = ['image.png','image2.png','image3.png','image4.png','image5.png','image6.png']
    return (
        <>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
                {arr.map(item => <SwiperSlide><img src={`src/assets/${item}`} className='h-[100vh] w-[100vw] brightness-50' alt="" /></SwiperSlide>) }
            </Swiper>
        </>
    );
}
