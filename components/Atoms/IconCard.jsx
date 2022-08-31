import React from 'react';

const IconCard = ({ icon, title, desc }) => {
  return (
    <div className="lg:h-auto mb-[35px] lg:mb-0 w-full lg:w-[50%]  ">
      <div className="lg:w-[90%]">
        <div className="bg-[#DFDFDF] h-[60px] w-[60px] flex justify-center items-center rounded-full mb-[20px]">
          <img src={icon} alt="icon" />
        </div>
        <p className=" text-color03_black font-semibold text-[15px] mb-[20px] lg:mb-0 lg:h-[45px] ">
          {title}
        </p>
        <p className="roboto text-[#7B7B7B] lg:h-[200px]">{desc}</p>
      </div>
    </div>
  );
};

export default IconCard;
