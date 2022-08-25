import React from 'react';
import { cases } from '../../../public/data';
import Card from './Card';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination, Navigation } from 'swiper';

const ThreeCases = () => {
  return (
    <>
      <div className="hidden md:flex justify-between">
        {cases.map((c) => (
          <Card
            key={c.id}
            imgsrc={c.img}
            title={c.title}
            desc={c.desc}
            link={c.link}
          />
        ))}
      </div>
      {/*slider for mobile*/}
      <div className=" relative md:hidden">
        <Swiper
          pagination={true}
          modules={[Pagination, Navigation]}
          spaceBetween={20}
          className="mySwiper"
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          {cases.map((c) => (
            <SwiperSlide key={c.id}>
              <Card
                key={c.id}
                imgsrc={c.img}
                title={c.title}
                desc={c.desc}
                link={c.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-prev absolute bottom-[-80px]">
          <img src="/img/Left.svg" alt="left" />
        </button>
        <button className="swiper-button-next absolute bottom-[-80px] right-0">
          <img src="/img/Right.svg" alt="left" />
        </button>
      </div>
    </>
  );
};

export default ThreeCases;
