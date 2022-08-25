import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';
import SupportCard from '../Atoms/SupportCard';
import Button from 'components/Atoms/Button';
const Deal = ({ deal_data }) => {
  return (
    <Section>
      <h2 className="tittles" style={{ marginBottom: '50px' }}>
        How <span className="gradient_title "> we deal with it</span>
      </h2>
      <div className="flex justify-between ">
        {deal_data.map((item) => (
          <SupportCard
            key={item.id}
            icon={item.icon}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </div>
      <div className="flex justify-center mt-[30px]">
        <Button title="Talk with us" />
      </div>
    </Section>
  );
};

export default Deal;
