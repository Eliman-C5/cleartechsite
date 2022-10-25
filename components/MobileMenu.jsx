import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGeneralProvider } from 'context/GeneralProvider';
import useLockBodyScroll from '../helpers/use-lock-body-scroll';
import DropdownMenuMobile from './DropdownMenuMobile';
import Button from './Atoms/Button';
import Link from 'next/link';

const links = [
  {
    id: '1',
    title: 'Solutions',
    src: '/Services',
    dropdown: false,
  },
  {
    id: '2',
    title: 'Use Cases',
    src: '/#cases',
    dropdown: true,
  },
  {
    id: '3',
    title: 'About us',
    src: '/AboutUs',
    dropdown: false,
  },
  // {
  //   id: '4',
  //   title: 'Blog',
  //   src: 'https://clear-tech.com/blog/',
  //   dropdown: false,
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
const MobileMenu = () => {
  const { mobileMenu, setMobileMenu, dropMenu, setDropMenu } =
    useGeneralProvider();
  //lockear el scroll cuando este en pantalla el componente
  //useLockBodyScroll();
  return (
    <AnimatePresence>
      {mobileMenu && (
        <motion.div
          initial={{ x: 500, opacity: 1 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 500, opacity: 1 }}
          transition={{
            duration: 0.85,
            //aqui se controla las animaciones de los componentes hijos pero nota todo tiene que traer el motion.

            staggerChildren: 1.15,
          }}
          className="bg-[#E1E6FB] w-full h-screen lg:hidden fixed overflow-y-hidden inset-0 z-10"
        >
          <motion.div className="mt-[180px] w-full h-full flex flex-col ">
            <motion.div className="w-[81%] mx-auto h-[220px] flex flex-col justify-evenly">
              {links.map((l) => (
                <Link href={l.src}>
                  <motion.div>
                    <div className="flex items-center h-[45px] mb-2 ">
                      <p
                        className=" uppercase text-color03_black flex-1  font-semibold"
                        onClick={() => setMobileMenu(false)}
                      >
                        {l.title}
                      </p>
                      {l.dropdown && (
                        <img
                          src="/img/mobile_down.svg"
                          alt="menu"
                          onClick={() => setDropMenu(!dropMenu)}
                        />
                      )}
                    </div>
                    {l.dropdown && <DropdownMenuMobile data={casesMenu} />}
                    <motion.div
                      initial={{ x: 500, opacity: 1 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ duration: 1.75 }}
                      className="w-full h-[1px]  bg-[#4361EE]"
                    ></motion.div>
                  </motion.div>
                </Link>
              ))}
            </motion.div>
            <div className="w-[81%] mx-auto mt-10">
              <Button title={'Get in Touch'} link={'/contact'} />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
