import React from 'react';
import Link from 'next/link';
import { useGeneralProvider } from 'context/GeneralProvider';
import MobileMenuButton from 'components/MobileMenuButton';
import Button from './Atoms/Button';
import DropdownMenu from '../components/DropdownMenu';

const links = [
  {
    id: 1,
    title: 'Solutions',
    src: '/Services',
  },
  {
    id: 2,
    title: 'Use Cases',
    src: '/#cases',
  },
  {
    id: 3,
    title: 'About us',
    src: '/AboutUs',
  },
  {
    id: 4,
    title: 'Privacy',
    src: '/privacy',
  },
  // {
  //   id: 4,
  //   title: 'Blog',
  //   src: 'https://clear-tech.com/blog/',
  // },
];

const casesMenu = [
  {
    id: 1,
    title: 'Bimbo',
    src: '/cases/Bimbo',
  },
  {
    id: 2,
    title: 'NFP',
    src: '/cases/NFP',
  },
  {
    id: 3,
    title: 'TTEC',
    src: '/cases/TTEC',
  },
];

const Navbar = () => {
  const { mobileMenu, setMobileMenu, dropMenu, setDropMenu } =
    useGeneralProvider();

  const hoverNavbar = (id) => {
    id === 2 ? setDropMenu(true) : setDropMenu(false);
  };
  return (
    <nav className="w-full h-[75px] absolute top-0 border-b border-b-[#AFBDFF] z-30">
      <div className="max-w-[1146px] w-[86%] mx-auto relative flex items-center justify-between h-full">
        <Link href={'/'}>
          <img
            src="/img/cleartech_log2.png"
            alt="cleartech logo"
            className=" cursor-pointer"
          />
        </Link>
        <div className="lg:flex space-x-8 items-center hidden ">
          {links.map((link) => (
            <Link href={link.src} key={link.id}>
              <a href={link.src} rel="noreferrer">
                <p
                  className="text-color03_black text-[16px] cursor-pointer"
                  onMouseEnter={() => hoverNavbar(link.id)}
                >
                  {link.title}
                </p>
              </a>
            </Link>
          ))}
          <DropdownMenu data={casesMenu} />
        </div>
        <div className="hidden lg:block">
          <Button title={'Get in touch'} link={'/contact'} />
        </div>
        {/*         <button className="md:block hidden text-white  font-bold text-sm bg-color02_blue  px-[30px] py-[10px] rounded-md  ">
          Get in touch
        </button> */}
        <div
          className="  lg:hidden flex flex-col justify-between"
          onClick={() => setMobileMenu(!mobileMenu)}
        >
          {/*          <div className="h-[1px]  w-full bg-color03_black"></div>
          <div className="h-[1px]  w-[50%] bg-color03_black ml-auto"></div>
          <div className="h-[1px]  w-full bg-color03_black"></div> */}
          <MobileMenuButton />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
