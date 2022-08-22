import React from 'react';
import Card from './Card';
import { motion } from 'framer-motion';
import { aboutUsCards } from '../../../public/data';

const Product = () => {
  const { product } = aboutUsCards;

  return (
    <motion.div
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="flex md:flex-row flex-col justify-between"
    >
      {product.map((d) => (
        <Card
          title={d.title}
          imgsrc={d.imgsrc}
          charlist={d.charlist}
          color={d.color}
        />
      ))}
    </motion.div>
  );
};

export default Product;
