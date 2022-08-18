import React from 'react';
import FadeSection from 'components/Wrappers/FadeInSection';
import Button from 'components/Atoms/Button';

const Choose = () => {
  return (
    <FadeSection>
      <h2 className="tittles" style={{ marginBottom: '20px' }}>
        Why <span className="gradient_title ">choose us</span>
      </h2>
      <p className="roboto text-center text-color03_black mb-[15px]">
        We are a business intelligence experts and a team of visionary analysts,
        developers and business leaders.
      </p>
    </FadeSection>
  );
};

export default Choose;
