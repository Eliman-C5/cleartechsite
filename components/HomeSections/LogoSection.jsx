import React from 'react';
import FadeInSection from 'components/Wrappers/FadeInSection';
import NormalSection from 'components/Wrappers/NormalSection';
import { logos } from '../../public/data';

const LogoSection = () => {
  return (
    <NormalSection>
      <FadeInSection>
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
      </FadeInSection>
    </NormalSection>
  );
};

export default LogoSection;
