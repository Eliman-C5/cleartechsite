import React from 'react';
import FadeSection from 'components/Wrappers/FadeInSection';
import IconCard from '../Atoms/IconCard';
import { choosecards } from '../../public/data';
import Button from 'components/Atoms/Button';

const Result = ({ results_data, rightImage }) => {
  return (
    <FadeSection className={'overflow-hidden'}>
      <div className="max-w-[1146px] w-4/5  lg:w-full mx-auto">
        <h2 className="tittles" style={{ marginBottom: '20px' }}>
          The <span className="gradient_title ">results</span>
        </h2>
      </div>
      <article className="max-w-[1146px] w-4/5 lg:h-[815px] lg:flex items-center mx-auto justify-around relative">
        <div className=" flex md:flex-wrap flex-col md:flex-row w-full mx-auto lg:mx-0 lg:w-4/5 h-auto lg:h-[90%] items-end">
          {results_data.map((c) => (
            <IconCard key={c.id} icon={c.icon} title={c.title} desc={c.desc} height={false}/>
          ))}
        </div>
        <div className="w-[60%]">
          <img src={rightImage} alt="map" className="hidden lg:block " />
        </div>
      </article>
      <div className="hidden lg:block max-w-[1146px] w-4/5 mx-auto relative bottom-[10px]">
        <Button title="Talk with us" link={'/contact'} />
      </div>
      <div className=" lg:hidden  flex justify-center">
        <Button title="Talk with us" link={'/contact'} />
      </div>
    </FadeSection>
  );
};

export default Result;
