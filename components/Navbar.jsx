import React from 'react';
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
    src: '/',
  },
  {
    id: '3',
    title: 'About us',
    src: '/AboutUs',
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
      <div className="max-w-[1146px] w-[86%] mx-auto flex items-center justify-between h-full">
        <img
          src="/img/cleartech_log.png"
          alt="cleartech logo"
          className=" cursor-pointer"
        />
        <div className="md:flex space-x-8 items-center hidden ">
          {links.map((link) => (
            <Link href={link.src} key={link.id}>
              <p className="text-color03_black  text-sm cursor-pointer">
                {link.title}
              </p>
            </Link>
          ))}
        </div>
        <button className="md:block hidden text-white  font-bold text-sm bg-color02_blue  px-[30px] py-[10px] rounded-md  ">
          Get in touch
        </button>
        <div className="w-[30px] h-[27px] mr md:hidden flex flex-col justify-between">
          <div className="h-[1px]  w-full bg-color03_black"></div>
          <div className="h-[1px]  w-[50%] bg-color03_black ml-auto"></div>
          <div className="h-[1px]  w-full bg-color03_black"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
