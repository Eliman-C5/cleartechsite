import React from 'react';

const Card = ({ imgsrc, title, charlist }) => {
  return (
    <div
      className="w-[32%]  max-w-[365px] rounded-md  h-[291px]"
      style={{
        boxShadow: '0px 10px 40px rgba(67, 97, 238, 0.21)',
        borderRadius: '9.7094px',
      }}
    >
      <div className="w-[85%] h-[80%]  mx-auto">
        <div className="w-[78px] h-[78px] mt-[30px] bg-color02_blue flex justify-center items-center rounded-lg">
          <img src={imgsrc} className="" />
        </div>
        <p className=" text-color03_black mt-[15px] mb-[15px] text-[23px] font-semibold poppins ">
          {title}
        </p>
        <div>
          {charlist.map((li, i) => (
            <p key={i} className=" text-[#7B7B7B] text-[14px] poppins ">
              {li}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;