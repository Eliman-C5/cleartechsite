import React from 'react';
import Link from 'next/link';
import { useGeneralProvider } from '../context/GeneralProvider';
import { motion, AnimatePresence } from 'framer-motion';

const DropdownMenu = ({ data }) => {
  const { dropMenu, setDropMenu } = useGeneralProvider();
  return (
    <AnimatePresence>
      {dropMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.85 }}
          onMouseLeave={() => setDropMenu(false)}
          className=" bg-white border-t-0 border border-[#AFBDFF] w-[160px] z-30 absolute top-[75px] translate-x-14"
        >
          {data.map((d) => (
            <Link href={d.src} key={d.id}>
              <p
                className="cursor-pointer dropdown_title hover:font-bold"
                onClick={() => setDropMenu(false)}
              >
                {d.title}
              </p>
            </Link>
          ))}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DropdownMenu;
