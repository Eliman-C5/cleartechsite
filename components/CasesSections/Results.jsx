import React from 'react';
import FadeSection from 'components/Wrappers/FadeInSection';
import IconCard from '../Atoms/IconCard';
import { choosecards } from '../../public/data';
import Button from 'components/Atoms/Button';

const Result = ({ results_data, rightImage }) => {
  return (
    <FadeSection className={'overflow-hidden'}>
      <div className="w-[86%]  lg:w-full mx-auto">
        <h2 className="tittles" style={{ marginBottom: '20px' }}>
          The <span className="gradient_title ">results</span>
        </h2>
        <p className="roboto md:text-center text-color03_black mb-[15px]">
          We are a business intelligence experts and a team of visionary
          analysts, developers and business leaders.
        </p>
      </div>
      <article className="max-w-[1146px] lg:h-[720px] flex  items-center mx-auto justify-around   relative">
        <div className=" flex md:flex-wrap flex-col md:flex-row w-[86%] mx-auto lg:mx-0 lg:w-[545px] h-auto lg:h-[80%] items-end">
          {results_data.map((c) => (
            <IconCard key={c.id} icon={c.icon} title={c.title} desc={c.desc} />
          ))}
        </div>
        <div className="w-[60%]">
          <img src={rightImage} alt="map" className="hidden lg:block " />
        </div>
      </article>
      <div className="max-w-[1146px] mx-auto lg:block bottom-[10px]">
        <Button title="Talk with us" contactButton />
      </div>
      <div className=" lg:hidden  flex justify-center bottom-[-20px]">
        <Button title="Talk with us" contactButton />
      </div>
    </FadeSection>
  );
};

export default Result;
