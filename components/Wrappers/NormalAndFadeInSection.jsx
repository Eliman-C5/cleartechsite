import React from 'react';
import FadeInSection from './FadeInSection';
import NormalSection from './NormalSection';

const NormalAndFadeInSection = ({ children }) => {
  return (
    <NormalSection>
      <FadeInSection>{children}</FadeInSection>
    </NormalSection>
  );
};

export default NormalAndFadeInSection;
