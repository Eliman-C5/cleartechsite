import React from 'react';
import FeatureSection from './FeatureSection';

const Training = () => {
  return (
    <FeatureSection>
      <div className="flex">
        <div className="flex-1 text-color02_blue">
          <div className="w-[95%]">
            <p className="mb-[15px]">
              Breakthrough insights that empower you to act in a competitive
              environment: Pick the tool, pick the process. On-site or web;
              one-on-one or groups
            </p>
            <p className="font-bold">
              We develop process refering to the acquisition of specific skills,
              abilities, and knowledge to improve employee performance.
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

export default Training;
