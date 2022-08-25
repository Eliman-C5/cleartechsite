import React from 'react';
import { motion } from 'framer-motion';
import { useGeneralProvider } from 'context/GeneralProvider';

const Button = (props) => {
  const { title, link, contactButton } = props;
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
          onClick={() => setContact(!contact)}
        >
          {title}
        </motion.button>
      ) : (
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
      )}
    </>
  );
};

export default Button;
