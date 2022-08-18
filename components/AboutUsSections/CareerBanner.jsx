import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';

const CareerBanner = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: 'url("/img/career_bg.png")',
        filter: ' drop-shadow(0px 10px 40px rgba(67, 97, 238, 0.21))',
      }}
    >
      <Section>
        <div className="h-[170px] flex items-center">
          <div className="flex-1">
            <h2
              className="tittles"
              style={{ marginBottom: '20px', textAlign: 'left' }}
            >
              Why <span className="gradient_title ">choose us</span>
            </h2>
            <p className="roboto  text-color03_black mb-[15px]">
              See our current positions
            </p>
          </div>
          <button className=" transition-all   duration-500 hover:bg-[#00A8FF] bg-color02_blue text-sm rounded-md  text-white px-7 py-2 disabled:opacity-50">
            Go to careers
          </button>
        </div>
      </Section>
    </div>
  );
};

export default CareerBanner;
