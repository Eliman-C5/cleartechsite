import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';
import { motion } from 'framer-motion';

const CareerBanner = () => {
  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-center"
      style={{
        backgroundImage: 'url("/img/career_bg.png")',
        boxShadow: '0px 10px 40px rgb(67 97 238 / 21%)',
      }}
    >
      <Section>
        <div className="h-[190px] flex flex-col justify-center lg:flex-row items-center">
          <div className="lg:flex-1">
            <h2
              className="tittles"
              style={{ marginBottom: '20px', textAlign: 'left' }}
            >
              Join <span className="gradient_title ">our team</span>
            </h2>
            <p className="roboto  text-color03_black mb-[15px]">
              See our current positions
            </p>
          </div>

          <a href='https://www.linkedin.com/company/cleartechdata/' target='_blank'>
            <motion.button
              whileHover={{
                scale: 1.15,
                transition: { duration: 0.5 },
                backgroundColor: '#00A8FF',
              }}
              className=" bg-color02_blue  text-white px-[30px] py-[10px] rounded-md "
            >
              Go to careers
            </motion.button>
          </a>
          
        </div>
      </Section>
    </div>
  );
};

export default CareerBanner;
