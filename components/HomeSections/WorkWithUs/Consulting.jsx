import React from 'react';
import FeatureSection from './FeatureSection';

const Consulting = () => {
  return (
    <FeatureSection>
      <div className="flex">
        <div className="flex-1 text-color02_blue">
          <div className="w-[95%]">
            <p className="mb-[15px]">
              All our experience at your service: What you need, when you need
              it
            </p>
            <p>
              We do consulting services to organizations{' '}
              <span className="font-bold">
                to improve their performance or in any way to assist
              </span>{' '}
              in achieving any sort of organizational objectives
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
