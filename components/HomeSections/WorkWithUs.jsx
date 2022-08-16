import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';
import Menu from 'components/HomeSections/WorkWithUs/Menu';
const WorkWithUs = () => {
  return (
    <Section>
      <h2 className="tittles" style={{ marginBottom: '20px' }}>
        How we can <span className="gradient_title ">work together?</span>
      </h2>
      <p className="text-center text-color03_black   mx-auto mb-[30px]">
        We are aroud the world
      </p>
      <Menu />
    </Section>
  );
};

export default WorkWithUs;
