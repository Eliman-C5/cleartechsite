import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';

import { logos } from '../../public/data';

const LogoSection = () => {
  return (
    <Section>
      <div>
        <h2 className="tittles">
          They <span className="gradient_title">trust us</span>{' '}
        </h2>
        <div className="flex items-center justify-between">
          {logos.map((l) => (
            <img src={`/img/logos/${l.src}.png`} alt={`logo de ${l.src}`} />
          ))}
        </div>
      </div>
    </Section>
  );
};

export default LogoSection;
