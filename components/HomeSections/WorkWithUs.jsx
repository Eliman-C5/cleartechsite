import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';
import Menu from 'components/HomeSections/WorkWithUs/Menu';
import Manager from 'components/HomeSections/WorkWithUs/Manager';
import Button from 'components/Atoms/Button';
const WorkWithUs = () => {
  return (
    <Section>
      <h2 className="tittles" style={{ marginBottom: '0px' }}>
        How can we <span className="gradient_title">work together?</span>
      </h2>
      <Menu />
      <Manager />
      <div className="flex justify-center mt-[45px] lg:mt-[25px] xl:mt-0">
        <Button title={'Talk with us'} link={'/contact'} />
      </div>
    </Section>
  );
};

export default WorkWithUs;
