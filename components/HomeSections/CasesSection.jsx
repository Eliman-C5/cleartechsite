import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';
import ThreeCases from 'components/HomeSections/Cases/ThreeCases';
import Button from 'components/Atoms/Button';
const CasesSection = () => {
  return (
    <div className="h-auto">
      <div className="w-full h-full "></div>
      <Section>
        {' '}
        <h2 className="tittles" style={{ marginBottom: '20px' }}>
          See how we <span className="gradient_title ">empower with data</span>
        </h2>
        <p className="text-center text-color03_black   mx-auto mb-[45px]">
          We have provided solutions to the leaders of different industries.
          Your company will be a success story with us
        </p>
        <ThreeCases />
        <div className="flex justify-center mt-[35px]">
          <Button title={'Talk with us'} />
        </div>
      </Section>
    </div>
  );
};

export default CasesSection;
