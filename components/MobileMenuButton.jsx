import React from 'react';
import { motion, useCycle } from 'framer-motion';
const Path = (props) => (
  <motion.path
    fill="transparent"
    strokeWidth="1.5"
    stroke="hsl(0, 0%, 18%)"
    strokeLinecap="round"
    {...props}
  />
);

const MobileMenuButton = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  return (
    <button onClick={() => toggleOpen()}>
      <svg width="33" height="29" viewBox="0 0 33 29">
        <Path
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            closed: { d: 'M 1 1 H 31.5  L 0 0 ' },
            open: { d: 'M1 1 L 32 27' },
          }}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          d="M11 15H31.5"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
          transition={{ duration: 0.1 }}
        />
        <Path
          animate={isOpen ? 'open' : 'closed'}
          variants={{
            closed: { d: 'M1 28H31.5' },
            open: { d: 'M1 27L32 1' },
          }}
        />
      </svg>
    </button>
  );
};

export default MobileMenuButton;
