import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper';
import 'swiper/css';
import { logos } from '../../public/data';

const LogoSection = () => {
  return (
    <Section>
      <div>
        <h2 className="tittles pt-[100px]">
          They <span className="gradient_title">trust us</span>{' '}
        </h2>
        <div className="lg:flex items-center hidden justify-between">
          {logos.map((l) => (
            <img
              src={`/img/logos/${l.src}.png`}
              alt={`logo de ${l.src}`}
              key={l.id}
            />
          ))}
        </div>
        <div className="lg:hidden">
          <Swiper
            slidesPerView={3.5}
            spaceBetween={12}
            className="flex"
            loop={true}
            autoplay={{
              delay: 500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
          >
            {logos.map((l) => (
              <SwiperSlide key={l.id}>
                <div className="flex items-center h-[40px] ">
                  <img
                    src={`/img/logos/${l.src}.png`}
                    alt={`logo de ${l.src}`}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Section>
  );
};

export default LogoSection;
