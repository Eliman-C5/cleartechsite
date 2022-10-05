import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';
import Button from 'components/Atoms/Button';
const Goal = ({ title, desc }) => {
  return (
    <div className="flex items-center space-x-4 mb-[20px]">
      <div>
        <div className=" w-[70px] h-[70px] bg-[#DFDFDF] flex items-center justify-center rounded-full">
          <img src="/img/services/goal.svg" alt="goals" />
        </div>
      </div>
      <div>
        <p className=" text-color03_black text-[18px] font-semibold">{title}</p>
        <p className=" text-[#7B7B7B]">{desc}</p>
      </div>
    </div>
  );
};

//Se esconde la seccion "Our Value Proposal" hasta que se defina
const Value = () => {
  return (
    <Section>
      <article className="flex lg:flex-row flex-col hidden">
        <div className=" lg:hidden xl:block xl:basis-1/2">
          <img
            src="/img/services/value.png"
            alt="our value proposal"
            className="mb-[25px] lg:mb-0"
          />
        </div>
        <div className=" xl:basis-1/2">
          <h2
            className="tittles  "
            style={{ marginBottom: '20px', textAlign: 'left' }}
          >
            Our <span className="gradient_title ">value proposal</span>
          </h2>
          <p className="roboto  text-color03_black mb-[15px]">
            We help businesses all around the world unleash the power of data in
            their business.
          </p>
          <Goal
            title={'Goal 1'}
            desc="Provide your company with breakthrough insights that empower you to act in a competitive environment. "
          />
          <Goal
            title={'Goal 2'}
            desc="Provide your company with breakthrough insights that empower you to act in a competitive environment. "
          />
          <Goal
            title={'Goal 3'}
            desc="Provide your company with breakthrough insights that empower you to act in a competitive environment. "
          />
        </div>
      </article>
      <div className="flex justify-center mt-[60px] hidden">
        <Button title="Talk with us" link={'/contact'} />
      </div>
    </Section>
  );
};

export default Value;
