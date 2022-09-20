import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useGeneralProvider } from 'context/GeneralProvider';
import Link from 'next/link';
const ThanksModal = ({ img, title, buttonLink, desc, buttonText }) => {
  const { thanks, setThanks } = useGeneralProvider();
  return (
    <AnimatePresence>
      {thanks && (
        <motion.div
          className="w-full h-screen fixed flex justify-center items-center  inset-0 z-40 bg-black/30  overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 1 } }}
          exit={{ opacity: 0 }}
        >
          <div className="h-[484px] w-[90%] max-w-[570px] relative bg-white rounded-lg flex flex-col justify-center items-center">
            <img src={img} alt={title} />
            <div className="flex items-center justify-center">
              <h2 className="gradient_title text-[28px] mr-2">{title} </h2>
              <img src="/img/heart.svg" alt="heart" />
            </div>
            <p className=" text-color03_black roboto my-5">{desc}</p>
            <Link href={buttonLink}>
              <button
                className=" bg-color02_blue text-white text-sm py-2 px-6 rounded-md"
                onClick={() => setThanks(false)}
              >
                {buttonText}
              </button>
            </Link>
            <img
              src="/img/tacha.svg"
              alt="tachita"
              className="absolute right-0 top-0 -translate-x-10 translate-y-10 cursor-pointer"
              onClick={() => setThanks(false)}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ThanksModal;
