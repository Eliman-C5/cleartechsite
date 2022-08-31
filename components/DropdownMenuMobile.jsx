import React from 'react';
import Link from 'next/link';
import { useGeneralProvider } from '../context/GeneralProvider';
import { motion, AnimatePresence } from 'framer-motion';

const DropdownMenuMobile = ({ data }) => {
  const { dropMenu, setDropMenu, mobileMenu, setMobileMenu } =
    useGeneralProvider();

  const itemClick = () => {
    setDropMenu(false);
    setMobileMenu(!mobileMenu);
  };

  return (
    <AnimatePresence>
      {dropMenu && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          onMouseLeave={() => setDropMenu(false)}
          className=""
        >
          {data.map((d) => (
            <Link href={d.src} key={d.id}>
              <p
                className="roboto  text-color03_black mb-1"
                onClick={itemClick}
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

export default DropdownMenuMobile;
