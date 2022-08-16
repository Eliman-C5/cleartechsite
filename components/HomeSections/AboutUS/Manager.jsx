import React from 'react';
import Cloud from './Cloud';
import Operations from './Operations';
import Product from './Product';
import Quality from './Quality';
import UX from './UX';
import DataAI from './DataAI';
import { useGeneralProvider } from 'context/GeneralProvider';

//este es un switch que agarrra el estado global para mostrar diferentes componentes
//el estado global se modifica desde el menu

const Manager = () => {
  const { workwithusMenuNum } = useGeneralProvider();
  return (
    <>
      {(() => {
        switch (workwithusMenuNum) {
          case 1:
            return <DataAI />;
          case 2:
            return <Operations />;
          case 3:
            return <Product />;
          case 4:
            return <UX />;
          case 5:
            return <Quality />;
          case 6:
            return <Cloud />;
          default:
            return null;
        }
      })()}
    </>
  );
};

export default Manager;
