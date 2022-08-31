import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';

const Challenge = ({ list, img }) => {
  return (
    <Section>
      <article className="flex flex-col lg:flex-row">
        <div className="lg:w-[55%]">
          <h2
            className="tittles"
            style={{ marginBottom: '20px', textAlign: 'left' }}
          >
            The <span className="gradient_title ">challenge</span>
          </h2>
          <ul>
            {list.map((li) => (
              <li className=" list-disc w-[95%] mx-auto roboto mb-5 text-color03_black">
                {li}
              </li>
            ))}
          </ul>
        </div>
        <div className="lg:w-[45%] flex items-center">
          <img src={img} alt="the cahllenge" />
        </div>
      </article>
    </Section>
  );
};

export default Challenge;
