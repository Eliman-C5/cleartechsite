import React from 'react';
import Section from '../components/Wrappers/NormalAndFadeInSection';
import Link from 'next/link';
const links = [
  {
    id: '1',
    title: 'Solutions',
    src: '/Services',
  },
  {
    id: '2',
    title: 'Use Cases',
    src: '/#cases',
  },
  {
    id: '3',
    title: 'About us',
    src: '/AboutUs',
  },
  {
    id: '4',
    title: 'Blog',
    src: 'https://clear-tech.com/blog/',
  },
];

const Footer = () => {
  return (
    <Section>
      <div className=" flex md:flex-row flex-col h-auto md:h-[215px]">
        <div className="flex-1">
          <img src="/img/cleartech_log.png" alt=" cleartech logo" />
          <p className=" text-color03_black ml-3 roboto  ">
            Let your data tell a better story
          </p>
        </div>
        <div className="flex md:flex-row flex-col ml-3 md:ml-0">
          <div className=" mr-[120px] my-[30px] md:my-0">
            <p className="gradient_title">Links</p>
            {links.map((li) => (
              <Link href={li.src}>
                <p
                  className=" text-color03_black roboto  cursor-pointer"
                  key={li.id}
                >
                  {li.title}
                </p>
              </Link>
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
