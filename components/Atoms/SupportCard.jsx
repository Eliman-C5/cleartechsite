import React from 'react';

const SupportCard = ({ icon, title, desc }) => {
  return (
    <div className="w-full lg:w-[25%]  mb-5 md:mb-5">
      <div className="px-[.3rem]">
        <div className=" mb-5 w-[60px] h-[60px] flex items-center justify-center  bg-color02_blue  rounded-full">
          <img src={icon} alt={title} />
        </div>
        <p className=" text-color03_black font-bold roboto mb-5 lg:h-[45px]">
          {title}
        </p>
        <p className=" text-[#7B7B7B] text-base">{desc}</p>
      </div>
    </div>
  );
};

export default SupportCard;
