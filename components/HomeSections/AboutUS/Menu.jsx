import { useState } from 'react';
import { useGeneralProvider } from 'context/GeneralProvider';
const MenuItems = [
  {
    id: 1,
    title: 'Data & AI',
    iconBlue: '/img/icons/knowhow/blue/dataAI.svg',
    iconWhite: '/img/icons/knowhow/white/dataAI.svg',
  },
  {
    id: 2,
    title: 'Operations',
    iconBlue: '/img/icons/knowhow/blue/operations.svg',
    iconWhite: '/img/icons/knowhow/white/operations.svg',
  },
  {
    id: 3,
    title: 'Product',
    iconBlue: '/img/icons/knowhow/blue/product.svg',
    iconWhite: '/img/icons/knowhow/white/product.svg',
  },
  {
    id: 4,
    title: 'UX',
    iconBlue: '/img/icons/knowhow/blue/ux.svg',
    iconWhite: '/img/icons/knowhow/white/ux.svg',
  },
  {
    id: 5,
    title: 'Quality',
    iconBlue: '/img/icons/knowhow/blue/quality.svg',
    iconWhite: '/img/icons/knowhow/white/quality.svg',
  },
  {
    id: 6,
    title: 'Cloud',
    iconBlue: '/img/icons/knowhow/blue/cloud.svg',
    iconWhite: '/img/icons/knowhow/white/cloud.svg',
  },
];

const Menu = () => {
  //estado para cambiar de color el icono
  const [menuIconNum, setMenuIconNum] = useState(0);
  //estado global para cambiar el cuadrito del menu al dar click
  const { workwithusMenuNum, setworkwithusMenuNum } = useGeneralProvider();

  const menuHover = (id) => {
    setMenuIconNum(id);
  };

  const clickMenu = (id) => {
    setworkwithusMenuNum(id);
  };
  return (
    <div className="flex items-center justify-between w-full mb-[50px]">
      {MenuItems.map((item) => (
        <div
          key={item.id}
          className={`${
            item.id === workwithusMenuNum && ' bg-color02_blue text-[#fff]'
          } flex w-[15.66%] justify-center items-center max-w-[180px] h-[55px] border border-color02_blue rounded-md cursor-pointer text-color02_blue font-bold hover:bg-color02_blue hover:text-white transition-all`}
          onMouseOver={() => menuHover(item.id)}
          onMouseLeave={() => setMenuIconNum(0)}
          onClick={() => clickMenu(item.id)}
        >
          <img
            src={
              item.id === menuIconNum || item.id === workwithusMenuNum
                ? item.iconWhite
                : item.iconBlue
            }
            className="mr-1"
          />
          <p>{item.title}</p>
        </div>
      ))}
    </div>
  );
};

export default Menu;
