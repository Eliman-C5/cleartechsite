import React from 'react';
import FadeSection from 'components/Wrappers/FadeInSection';
import IconCard from '../Atoms/IconCard';
import { choosecards } from '../../public/data';
import Button from 'components/Atoms/Button';

const Choose = () => {
  return (
    <FadeSection className={'overflow-hidden'}>
      <div className="w-[86%] lg:w-full mx-auto">
        <h2 className="tittles" style={{ marginBottom: '20px' }}>
          Why <span className="gradient_title ">choose us</span>
        </h2>
        <p className="roboto md:text-center text-color03_black mb-[15px]">
          We are a business intelligence experts and a team of visionary
          analysts, developers and business leaders.
        </p>
      </div>
      <article className="max-w-[1146px] lg:h-[720px] flex  items-center mx-auto  relative">
        <div className=" flex md:flex-wrap flex-col md:flex-row w-[86%] mx-auto lg:mx-0 lg:w-[545px] h-auto lg:h-[80%] items-end">
          {choosecards.map((c) => (
            <IconCard key={c.id} icon={c.icon} title={c.title} desc={c.desc} />
          ))}
        </div>
        <div className="absolute  right-[-147px]">
          <img
            src="/img/services/map_about_us.png"
            alt="map"
            className="hidden lg:block"
          />
        </div>
        <div className="absolute hidden lg:block bottom-[26px]">
          <Button title="Talk with us" link={'/contact'} />
        </div>
      </article>
      <div className=" lg:hidden  flex justify-center bottom-[-20px]">
        <Button title="Talk with us" link={'/contact'} />
      </div>
    </FadeSection>
  );
};

export default Choose;
