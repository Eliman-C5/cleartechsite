import React from 'react';

const NormalSection = ({ children }) => {
  return (
    <div className="w-4/5 mx-auto max-w-[1146px] my-[60px] md:mt-[100px] md:mb-[100px]">
      {children}
    </div>
  );
};

export default NormalSection;
