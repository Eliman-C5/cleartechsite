import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';

const MapSection = () => {
  return (
    <Section>
      <div className="w-full flex justify-center items-center">
        <img
          src="/img/map_benefits.png"
          alt="map"
          className="hidden md:block"
        />
        <img src="/img/map_mobile.png" alt="map" className="md:hidden" />
      </div>
    </Section>
  );
};

export default MapSection;
