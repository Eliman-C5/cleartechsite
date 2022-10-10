import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';
import { testimonials } from '../public/data';

const TestimonialCard = ({ img, job, desc }) => {
  return (
    <div
      className=" py-6 lg:py-0 mb-5 lg:w-[365px] lg:h-[270px] flex flex-col items-center justify-center"
      style={{
        boxShadow: 'rgb(67 97 238 / 21%) 0px 10px 40px',
        borderRadius: '9.7094px',
      }}
    >
      <div className="w-[90%] h-[90%]">
        <img src="/img/stars.svg" alt="rating" />
        <p className="roboto text-sm font-normal text-[#999999] my-2">{desc}</p>
        <div className="flex items-center">
          {/* <p className=" text-color02_blue font-bold ">{name}</p> */}
          <img src={img} alt={img} className="w-[60px] h-[60px] rounded-full mr-4" />
          <p className="roboto text-sm font-normal text-[#999999]">{job}</p>
        </div>
      </div>
    </div>
  );
};

const Testimonials = () => {
  return (
    <Section>
      <h2 className="text-center text-color03_black text-[32px] font-bold">
        What Our Clients Say
      </h2>
      <div className=" flex flex-wrap justify-between mt-[50px]">
        {testimonials.map((items) => (
          <TestimonialCard
            key={items.id}
            // name={items.name}
            img={items.img}
            job={items.job}
            desc={items.desc}
          />
        ))}
      </div>
    </Section>
  );
};

export default Testimonials;
