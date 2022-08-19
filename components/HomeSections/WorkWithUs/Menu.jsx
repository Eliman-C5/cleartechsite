import { useState } from 'react';
import { useGeneralProvider } from 'context/GeneralProvider';
const MenuItems = [
  {
    id: 1,
    title: 'Project Outsorcing',
    iconBlue: '/img/icons/workwithus/blue/airplay.svg',
    iconWhite: '/img/icons/workwithus/white/airplay.svg',
  },
  {
    id: 2,
    title: 'Staff Growth',
    iconBlue: '/img/icons/workwithus/blue/staff.svg',
    iconWhite: '/img/icons/workwithus/white/staff.svg',
  },
  {
    id: 3,
    title: 'Managed Services',
    iconBlue: '/img/icons/workwithus/blue/services.svg',
    iconWhite: '/img/icons/workwithus/white/services.svg',
  },
  {
    id: 4,
    title: 'Training',
    iconBlue: '/img/icons/workwithus/blue/training.svg',
    iconWhite: '/img/icons/workwithus/white/training.svg',
  },
  {
    id: 5,
    title: 'Consulting',
    iconBlue: '/img/icons/workwithus/blue/consulting.svg',
    iconWhite: '/img/icons/workwithus/white/consulting.svg',
  },
];

const Menu = () => {
  //estado para cambiar de color el icono
  const [menuIconNum, setMenuIconNum] = useState(0);
  //estado global para cambiar el cuadrito del menu al dar click
  const { featuresMenuNum, setfeaturesMenuNum } = useGeneralProvider();

  const menuHover = (id) => {
    setMenuIconNum(id);
  };

  const clickMenu = (id) => {
    setfeaturesMenuNum(id);
  };
  return (
    <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
      <div className="flex items-center justify-between w-[1146px] mb-[50px]">
        {MenuItems.map((item) => (
          <div
            key={item.id}
            className={`${
              item.id === featuresMenuNum && ' bg-color02_blue text-[#fff]'
            } flex w-[18.66%] justify-center items-center max-w-[211px] h-[55px] border border-color02_blue rounded-md cursor-pointer text-color02_blue font-bold hover:bg-color02_blue hover:text-white transition-all`}
            onMouseOver={() => menuHover(item.id)}
            onMouseLeave={() => setMenuIconNum(0)}
            onClick={() => clickMenu(item.id)}
          >
            <img
              src={
                item.id === menuIconNum || item.id === featuresMenuNum
                  ? item.iconWhite
                  : item.iconBlue
              }
              className="mr-1"
            />
            <p>{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
