import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';
import Menu from 'components/HomeSections/WorkWithUs/Menu';
import Manager from 'components/HomeSections/WorkWithUs/Manager';
import Button from 'components/Atoms/Button';
const WorkWithUs = () => {
  return (
    <Section>
      <h2 className="tittles" style={{ marginBottom: '20px' }}>
        How we can <span className="gradient_title ">work together?</span>
      </h2>
      <p className="roboto md:text-center text-color03_black   mx-auto mb-[30px]">
        We are aroud the world
      </p>
      <Menu />
      <Manager />
      <div className="flex justify-center mt-[25px]">
        <Button title={'Talk with us'} contactButton />
      </div>
    </Section>
  );
};

export default WorkWithUs;
