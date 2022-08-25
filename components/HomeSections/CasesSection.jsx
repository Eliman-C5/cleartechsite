import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';
import ThreeCases from 'components/HomeSections/Cases/ThreeCases';
import Button from 'components/Atoms/Button';
const CasesSection = () => {
  return (
    <div className="h-auto relative">
      {/*       <div
        className="w-full h-[400px] bg-center bg-no-repeat bg-cover absolute z-0"
        style={{
          backgroundImage: "url('/img/workwithus_bg.png')",
        }}
      ></div> */}
      <div className="">
        <Section>
          {' '}
          <h2 className="tittles" style={{ marginBottom: '20px' }}>
            See how we{' '}
            <span className="gradient_title ">empower with data</span>
          </h2>
          <p className="roboto md:text-center text-color03_black   mx-auto mb-[45px]">
            We have provided solutions to the leaders of different industries.
            Your company will be a success story with us
          </p>
          <ThreeCases />
          <div className="flex justify-center mt-[35px]">
            <Button title={'Talk with us'} contactButton />
          </div>
        </Section>
      </div>
    </div>
  );
};

export default CasesSection;
