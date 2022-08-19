import React from 'react';
import Link from 'next/link';
const Card = ({ imgsrc, title, desc, link }) => {
  return (
    <div
      className="md:w-[32%]  max-w-[365px] rounded-md  h-[402px] bg-white"
      style={{
        boxShadow: '0px 10px 40px rgba(67, 97, 238, 0.21)',
        borderRadius: '9.7094px',
      }}
    >
      <div className="relative">
        <img src={imgsrc} />
        <p className="text-white text-xs  bg-[#00A8FF] absolute  top-5 right-0 px-4 py-2">
          SEO WORD
        </p>
      </div>
      <div className="w-[80%] mx-auto h-auto pt-[25px]">
        <h3 className=" text-color03_black  text-[18px]  font-bold mb-[15px]">
          {title}
        </h3>
        <p className="text-[#7B7B7B] font-normal text-[15px] mb-[20px] w-[100%]">
          {desc}
        </p>
        <Link href={link}>
          <div className="flex ">
            <p className="cursor-pointer gradient_title mr-4 text-[14px]">
              Know more
            </p>
            <img src="/img/arrow_blue_right.svg" alt="know more" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Card;
