import React from 'react';
import FeatureSection from './FeatureSection';

const Consulting = () => {
  return (
    <FeatureSection>
      <div className="flex md:flex-row flex-col h-full justify-around">
        <div className="md:flex-1 text-color02_blue">
          <div className="w-[95%]">
            <p className="mb-[15px]">
              All our experience at your service: what you need, when you need
              it
            </p>
            <p>
              We help organizations{' '}
              <span className="font-bold">
                improve their performance meet
              </span>{' '}
              organizational objectives
            </p>
          </div>
        </div>
        <div>
          <img
            src="/img/icons/workwithus/sections/consulting.png"
            alt="staff growth"
          />
        </div>
      </div>
    </FeatureSection>
  );
};

export default Consulting;
