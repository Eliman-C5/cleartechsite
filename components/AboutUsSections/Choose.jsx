import React from 'react';
import FadeSection from 'components/Wrappers/FadeInSection';
import IconCard from '../Atoms/IconCard';
import { choosecards } from '../../public/data';
import Button from 'components/Atoms/Button';

const Choose = () => {
  return (
    <FadeSection>
      <h2 className="tittles" style={{ marginBottom: '20px' }}>
        Why <span className="gradient_title ">choose us</span>
      </h2>
      <p className="roboto text-center text-color03_black mb-[15px]">
        We are a business intelligence experts and a team of visionary analysts,
        developers and business leaders.
      </p>
      <article className="max-w-[1293px] h-[680px] flex  items-center margin_for_choose_section relative">
        <div className="flex-1 flex flex-wrap h-[80%] items-end">
          {choosecards.map((c) => (
            <IconCard key={c.id} icon={c.icon} title={c.title} desc={c.desc} />
          ))}
        </div>
        <div>
          <img src="/img/services/map_about_us.png" alt="map" />
        </div>
        <div className="absolute bottom-[-20px]">
          <Button title="Talk with us" />
        </div>
      </article>
    </FadeSection>
  );
};

export default Choose;
