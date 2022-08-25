import React from 'react';
import { industries } from '../../public/data';
import Section from 'components/Wrappers/NormalAndFadeInSection';
import Button from 'components/Atoms/Button';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';

// import required modules
import { Pagination, Navigation } from 'swiper';
const Industries = () => {
  return (
    <Section>
      <h2 className="tittles" style={{ marginBottom: '20px' }}>
        Industries <span className="gradient_title ">we are transforming</span>
      </h2>
      <p className="md:text-center roboto md:w-[70%]  text-color03_black   mx-auto mb-[30px]">
        Take a look at examples of our work and learn how our clients from
        different industries have benedited from our data science consulting
        services.
      </p>
      <div className="lg:flex flex-wrap justify-between hidden ">
        {industries.map((item) => (
          <div
            className="industry_card h-[120px] w-[32%] px-4 py-2 mb-5"
            key={item.id}
          >
            <div className="flex space-x-4 mb-2">
              <img src={item.icon} alt={item.title} />
              <p className=" text-color03_black roboto font-bold">
                {item.title}
              </p>
            </div>
            <p className=" text-[#9B9B9B] text-sm">{item.desc}</p>
          </div>
        ))}
      </div>
      {/*slider para mobile*/}
      <div className="lg:hidden relative">
        <Swiper
          pagination={false}
          modules={[Navigation]}
          spaceBetween={20}
          loop={true}
          slidesPerView={1}
          className="mySwiper"
          navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
          }}
        >
          {industries.map((item) => (
            <SwiperSlide key={item.id}>
              <div
                className="industry_card h-[125px] w-full px-4 py-2 mb-5"
                key={item.id}
              >
                <div className="flex space-x-4 mb-2">
                  <img src={item.icon} alt={item.title} />
                  <p className=" text-color03_black roboto font-bold">
                    {item.title}
                  </p>
                </div>
                <p className=" text-[#9B9B9B] text-sm">{item.desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <button className="swiper-button-prev absolute bottom-[-70px] left-0 ">
          <img src="/img/Left.svg" alt="left" />
        </button>
        <button className="swiper-button-next absolute bottom-[-70px]  right-0 ">
          <img src="/img/Right.svg" alt="left" />
        </button>
      </div>
      <div className="flex justify-center mt-[30px]">
        <Button title="Talk with us" contactButton />
      </div>
    </Section>
  );
};

export default Industries;
