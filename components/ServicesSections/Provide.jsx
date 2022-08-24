import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';
import ProvideRows from './ProvideRows';
import Button from 'components/Atoms/Button';
const Provide = () => {
  return (
    <Section>
      <h2 className="tittles" style={{ marginBottom: '20px' }}>
        This are the services that we provide
      </h2>
      <p className="roboto w-[90%] mx-auto  text-center text-color03_black mb-[15px]">
        We grow your organizational analytics capabilities. With the right help,
        you can create better value with your data assets, maximizing its
        potential.
      </p>
      <ProvideRows />
      <div className="flex justify-center mt-[30px]">
        <Button title="Talk with us" />
      </div>
    </Section>
  );
};

export default Provide;