import React from 'react';

const IconCard = ({ icon, title, desc, height = true }) => {
  return (
    <div className="lg:h-auto mb-[35px] lg:mb-[15px] w-full lg:w-[50%]  ">
      <div className="lg:w-[90%]">
        <div className="bg-[#DFDFDF] h-[60px] w-[60px] flex justify-center items-center rounded-full mb-[20px]">
          <img src={icon} alt="icon" />
        </div>
        <p className=" text-color03_black font-semibold text-[18px] mb-[20px] lg:mb-0 ">
          {title}
        </p>
        <p className={`roboto text-[#7B7B7B]  ${height ? 'lg:h-[185px]' : 'lg:h-[260px]'}`}>{desc}</p>
      </div>
    </div>
  );
};

export default IconCard;
