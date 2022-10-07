import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';
import ProvideRows from './ProvideRows';
import Button from 'components/Atoms/Button';
const Provide = () => {
  return (
    <Section>
      <h2 className="tittles" style={{ marginBottom: '20px' }}>
        These are the services that we provide
      </h2>
      <ProvideRows />
      <div className="flex justify-center mt-[30px]">
        <Button title="Talk with us" link={'/contact'} />
      </div>
    </Section>
  );
};

export default Provide;
