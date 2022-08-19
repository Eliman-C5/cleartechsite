import React from 'react';
import FeatureSection from './FeatureSection';

const StaffGrowth = () => {
  return (
    <FeatureSection>
      <div className="flex md:flex-row flex-col h-full justify-around">
        <div className="md:flex-1 text-color02_blue">
          <div className="w-[95%]">
            <p className="mb-[15px]">
              Get the extra pair of hands you need:{' '}
              <span className="font-bold">
                Meet deadlines and goals while reducing costs.
              </span>{' '}
            </p>
            <p>
              We build workplaces where every employee is empowered to do their
              best work and learn and grow in their roles and careers.
            </p>
          </div>
        </div>
        <div>
          <img
            src="/img/icons/workwithus/sections/staff.png"
            alt="staff growth"
          />
        </div>
      </div>
    </FeatureSection>
  );
};

export default StaffGrowth;
