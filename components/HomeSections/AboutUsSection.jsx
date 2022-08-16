import React from 'react';
import FadeInSection from 'components/Wrappers/FadeInSection';
import NormalSection from 'components/Wrappers/NormalSection';
import Menu from 'components/HomeSections/AboutUS/Menu';
const AboutUsSection = () => {
  return (
    <NormalSection>
      <FadeInSection>
        <h2 className="tittles">
          We make <span className="gradient_title ">data meaningful</span> for
          your business{' '}
        </h2>
        <p className="text-center text-color03_black   mx-auto mb-[30px]">
          We bring the best solutions for every challenge, we a field of experts
          giving you a multidiscplinary, proactive and agile team.
        </p>
        <Menu />
      </FadeInSection>
    </NormalSection>
  );
};

export default AboutUsSection;
