import React from 'react';
import FeatureSection from './FeatureSection';

const Services = () => {
  return (
    <FeatureSection>
      <div className="flex">
        <div className="flex-1 text-color02_blue">
          <div className="w-[95%]">
            <p className="mb-[15px]">
              <span className="font-bold">
                Concentrate on running your business:
              </span>{' '}
              We help you run your IT Ops taking care of it as if it were our
              own. From daily support activities to project management, product
              development and more...
            </p>
          </div>
        </div>
        <div>
          <img
            src="/img/icons/workwithus/sections/services.png"
            alt="staff growth"
          />
        </div>
      </div>
    </FeatureSection>
  );
};

export default Services;
