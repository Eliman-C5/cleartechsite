import React from 'react';
import Section from 'components/Wrappers/NormalAndFadeInSection';

const Challenge = ({ list, img }) => {
  return (
    <Section>
      <article className="flex">
        <div className="w-[55%]">
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
        <div className="w-[45%]">
          <img src={img} alt="the cahllenge" />
        </div>
      </article>
    </Section>
  );
};

export default Challenge;
