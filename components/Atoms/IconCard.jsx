import React from 'react';

const IconCard = ({ icon, title, desc }) => {
  return (
    <div className="h-[240px] w-[50%] ">
      <div className="w-[90%]">
        <div className="bg-[#DFDFDF] h-[60px] w-[60px] flex justify-center items-center rounded-full mb-[20px]">
          <img src={icon} alt="icon" />
        </div>
        <p className=" text-color03_black font-semibold text-[15px] h-[45px] mb-[20px]">
          {title}
        </p>
        <p className="roboto text-[#7B7B7B]">{desc}</p>
      </div>
    </div>
  );
};

export default IconCard;