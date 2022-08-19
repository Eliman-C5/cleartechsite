import React from 'react';
import FadeInSection from 'components/Wrappers/FadeInSection';
import Button from 'components/Atoms/Button';
const HeroSection = () => {
  return (
    <div className="w-full md:h-screen realtive">
      {/*div con imagen de fondo*/}
      <div className='w-full absolute top-0  h-[75vh] md:h-[90vh] bg-[url("../public/img/hero_bg.png")] bg-center bg-no-repeat bg-cover z-0'></div>
      <div className="relative">
        <FadeInSection>
          <div className="md:w-full w-[86%] mx-auto mt-[180px]">
            <h1 className="tittles">
              Let your data{' '}
              <span className="gradient_title">tell a better story</span>{' '}
            </h1>
            <p className="md:text-center  roboto text-color03_black md:w-3/5 w-full mx-auto">
              Focus on <span className="font-bold">growing your business</span>{' '}
              with key insights. We will help you store, analyze, present, and
              even predict outcomes based on the data you already have within
              your company.
            </p>
            {/*button container*/}
            <div className="w-full md:justify-center justify-start items-start md:items-center flex md:flex-row  flex-col mt-[35px] md:space-x-10 mb-[90px]">
              <div className="mb-[30px] md:mb-0">
                <Button title={'Know how'} />
              </div>
              <div className="flex justify-center items-center space-x-2">
                <img src="/img/play_button.svg" alt="play button" />
                <p className=" font-medium text-color02_blue ">
                  Learn more (2 min)
                </p>
              </div>
            </div>
            {/*image container*/}
            <div className="flex justify-center items-center">
              <img
                src="/img/dahsboard.png"
                alt="let your data tell a better story"
                className="h-[58vh] hidden md:block"
              />
            </div>
          </div>
        </FadeInSection>
      </div>
    </div>
  );
};

export default HeroSection;
