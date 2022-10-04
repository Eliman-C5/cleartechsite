import React from 'react';
import { motion } from 'framer-motion';
import { useGeneralProvider } from 'context/GeneralProvider';
import Link from 'next/link';
const Button = ({ title, link, contactButton }) => {
  const { contact, setContact } = useGeneralProvider();
  return (
    <>
      {contactButton ? (
        <motion.button
          whileHover={{
            scale: 1.15,
            transition: { duration: 0.5 },
            backgroundColor: '#00A8FF',
          }}
          className=" bg-color02_blue  text-white text-sm px-[30px] py-[10px] rounded-md "
          //onClick={() => setContact(!contact)}
        >
          {title}
        </motion.button>
      ) : (
        <Link href={link}>
          <motion.button
            whileHover={{
              scale: 1.15,
              transition: { duration: 0.5 },
              backgroundColor: '#00A8FF',
            }}
            className=" bg-color02_blue  text-white text-sm px-[30px] py-[10px] rounded-md "
          >
            {title}
          </motion.button>
        </Link>
      )}
    </>
  );
};

export default Button;
