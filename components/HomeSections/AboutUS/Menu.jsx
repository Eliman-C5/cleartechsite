import { useState } from 'react';
import { useGeneralProvider } from 'context/GeneralProvider';
const MenuItems = [
  {
    id: 1,
    title: 'Data & AI',
    iconBlue: '/img/icons/knowhow/dataAI.svg',
    iconWhite: '/img/icons/knowhow/white/dataAI.svg',
    color: 'dataAI',
  },
  {
    id: 2,
    title: 'Operations',
    iconBlue: '/img/icons/knowhow/operations2.svg',
    iconWhite: '/img/icons/knowhow/white/operations.svg',
    color: 'operations',
  },
  {
    id: 3,
    title: 'Product',
    iconBlue: '/img/icons/knowhow/product2.svg',
    iconWhite: '/img/icons/knowhow/white/product.svg',
    color: 'product',
  },
  {
    id: 4,
    title: 'UX',
    iconBlue: '/img/icons/knowhow/ux2.svg',
    iconWhite: '/img/icons/knowhow/white/ux.svg',
    color: 'ux',
  },
  {
    id: 5,
    title: 'Quality',
    iconBlue: '/img/icons/knowhow/quality2.svg',
    iconWhite: '/img/icons/knowhow/white/quality.svg',
    color: 'quality',
  },
  {
    id: 6,
    title: 'Cloud',
    iconBlue: '/img/icons/knowhow/cloud2.svg',
    iconWhite: '/img/icons/knowhow/white/cloud.svg',
    color: 'cloud',
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
    <div className="w-full overflow-x-scroll xl:overflow-x-hidden">
      <div className="flex items-center justify-between w-[1146px] mb-[50px] ">
        {MenuItems.map((item) => (
          <div
            key={item.id}
            className={`${
              item.id === workwithusMenuNum && `bg-${item.color} text-[#fff]`
            } flex w-[15.66%]  justify-center items-center max-w-[180px] h-[55px] border rounded-md cursor-pointer font-bold hover:bg-${
              item.color
            } border-${item.color} text-${
              item.color
            } hover:text-white transition-all`}
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
    </div>
  );
};

export default Menu;
