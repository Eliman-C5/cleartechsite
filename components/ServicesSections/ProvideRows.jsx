import React from 'react';
import { provide } from '../../public/data';
const ProvideRows = () => {
  return (
    <>
      {provide.map((p) => (
        <div className="w-full h-[280px] overflow-x-auto lg:overflow-x-visible">
          <div className="lg:w-full w-[1137px] h-[260px] mb-[15px] provide_row">
            <div className="w-[95%] pt-5 mx-auto">
              <p className="din text-[18px] font-semibold text-color03_black mb-5">
                {p.sectionTitle}
              </p>
              <div className="flex ">
                {p.data.map((item) => (
                  <div
                    className={`w-[23%]  `}
                    style={{ width: `${item.title === 'Cognitive' && '50%'}` }}
                    key={item.id}
                  >
                    <img
                      src={item.icon}
                      alt={item.title}
                      className="mb-2 w-[30px] h-[30px]"
                    />
                    <p className=" text-color03_black  roboto mb-2">
                      {item.title}
                    </p>
                    <p className=" text-[#7B7B7B] text-base w-[90%] ">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default ProvideRows;
