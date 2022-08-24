import React from 'react';

const ServiceCard = ({ icon, title, color, charlist }) => {
  return (
    <div className="w-full max-w-[360px] h-auto lg:h-[291px] pb-[30px] lg:pb-0 mb-[30px] service_card">
      <div className="w-[90%] mx-auto">
        <div
          className={`w-[60px] h-[60px] bg-${color} flex justify-center rounded-md my-[30px] items-center`}
        >
          <img src={icon} alt={title} />
        </div>
        <p className=" text-color03_black font-semibold mb-[20px]">{title}</p>
        {charlist.map((item) => (
          <p className="roboto text-[#7B7B7B] font-normal" key={item}>
            {item}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ServiceCard;
