import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGeneralProvider } from 'context/GeneralProvider';
import useLockBodyScroll from '../helpers/use-lock-body-scroll';
import Button from './Atoms/Button';
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

const MobileMenu = () => {
  const { mobileMenu, setMobileMenu } = useGeneralProvider();
  //lockear el scroll cuando este en pantalla el componente
  useLockBodyScroll();
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
                    <p
                      className=" uppercase text-color03_black mb-5 font-semibold"
                      onClick={() => setMobileMenu(false)}
                    >
                      {l.title}
                    </p>
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
              <Button title={'Get in Touch'} contactButton />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
