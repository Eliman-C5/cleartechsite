import React from 'react';
import Section from '../components/Wrappers/NormalAndFadeInSection';

const links = [
  {
    id: '1',
    title: 'Solutions',
    src: '/',
  },
  {
    id: '2',
    title: 'Use Cases',
    src: '/',
  },
  {
    id: '3',
    title: 'About us',
    src: '/',
  },
  {
    id: '4',
    title: 'Blog',
    src: '/',
  },
];

const Footer = () => {
  return (
    <Section>
      <div className=" flex  h-[215px]">
        <div className="flex-1">
          <img src="/img/cleartech_log.png" alt=" cleartech logo" />
          <p className=" text-color03_black ml-3 roboto  ">
            Let your data tell a better story
          </p>
        </div>
        <div className="flex">
          <div className=" mr-[120px]">
            <p className="gradient_title">Links</p>
            {links.map((li) => (
              <p className=" text-color03_black roboto  cursor-pointer">
                {li.title}
              </p>
            ))}
          </div>
          <div>
            <p className="gradient_title">Social media</p>
            <div className="flex  h-[20px] cursor-pointer">
              <img src="/img/linkedin.svg" alt="linkedin" className="mr-3" />
              <p className=" text-color03_black roboto ">Linkedin</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
