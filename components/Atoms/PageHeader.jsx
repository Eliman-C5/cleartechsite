import React from 'react';
import Section from '/components/Wrappers/FadeInSection';
const PageHeader = ({ title, desc, show = true }) => {
  return (
    <div
      className="w-full bg-no-repeat bg-cover bg-center mt-[75px]"
      style={{ backgroundImage: "url('/img/page_header.png')" }}
    >
      <Section>
        <div className="h-[322px] flex flex-col justify-center items-center">
          <p className="din gradient_title text-[24px] md:text-[32px]  ">{title}</p>
          <p className={`roboto text-center  text-color03_black w-3/5 mt-[25px] ${show ? 'block' : 'hidden'}`}>
            {desc}
          </p>
        </div>
      </Section>
    </div>
  );
};

export default PageHeader;
