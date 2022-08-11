import React from 'react';

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

const Navbar = () => {
  return (
    <nav className="w-full h-[75px] absolute top-0 border-b border-b-[#AFBDFF] z-20">
      <div className="max-w-[1146px] mx-auto flex items-center justify-between h-full">
        <img
          src="/img/cleartech_log.png"
          alt="cleartech logo"
          className=" cursor-pointer"
        />
        <div className="flex space-x-8 items-center">
          {links.map((link) => (
            <p
              key={link.id}
              className="text-color03_black  text-sm cursor-pointer"
            >
              {link.title}
            </p>
          ))}
        </div>
        <button className=" text-white  font-bold text-sm bg-color02_blue  px-[30px] py-[10px] rounded-md  ">
          Get in touch
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
