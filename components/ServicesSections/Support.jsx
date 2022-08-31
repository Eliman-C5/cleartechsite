import Section from 'components/Wrappers/NormalAndFadeInSection';
import { support } from '../../public/data';
import SupportCard from '../Atoms/SupportCard';
import React from 'react';

const Support = () => {
  return (
    <div className="w-full py-1 bg-[#F7F7F7]">
      <Section>
        <h2 className="tittles" style={{ marginBottom: '20px' }}>
          Levels of support <span className="gradient_title ">we provide</span>
        </h2>
        <div className="flex md:flex-row flex-col">
          {support.map((item) => (
            <SupportCard
              key={item.id}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </Section>
    </div>
  );
};

export default Support;
