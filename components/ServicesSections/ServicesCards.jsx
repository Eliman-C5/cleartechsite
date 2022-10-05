import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';
import ServiceCard from './ServiceCard';
import { serviceCards } from '../../public/data';
import Button from 'components/Atoms/Button';
const ServicesCards = () => {
  return (
    <Section>
      <h2 className="tittles" style={{ marginBottom: '20px' }}>
        This is how we group our people
      </h2>
      <div className="flex flex-wrap justify-between">
        {serviceCards.map((item) => (
          <ServiceCard
            key={item.id}
            icon={item.icon}
            color={item.color}
            title={item.title}
            charlist={item.charlist}
          />
        ))}
      </div>
      <div className="flex justify-center">
        <Button title="Talk with us" link={'/contact'} />
      </div>
    </Section>
  );
};

export default ServicesCards;
