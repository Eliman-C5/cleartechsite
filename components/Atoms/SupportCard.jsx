import React from 'react';

const SupportCard = ({ icon, title, desc }) => {
  return (
    <div className="w-full md:w-[25%]  mb-5 md:mb-5">
      <div className="w-[85%]">
        <div className=" mb-5 w-[60px] h-[60px] flex items-center justify-center  bg-color02_blue  rounded-full">
          <img src={icon} alt={title} />
        </div>
        <p className=" text-color03_black roboto mb-5 h-[45px] w-[80%]">
          {title}
        </p>
        <p className=" text-[#7B7B7B] text-sm">{desc}</p>
      </div>
    </div>
  );
};

export default SupportCard;
