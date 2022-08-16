import React from 'react';
import { useGeneralProvider } from 'context/GeneralProvider';
import Outsourcing from './Outsourcing';
import StaffGrowth from './StaffGrowth';
import Services from './Services';
import Training from './Training';
import Consulting from './Consulting';
//este es un switch que agarrra el estado global para mostrar diferentes componentes
//el estado global se modifica desde el menu

const Manager = () => {
  const { featuresMenuNum } = useGeneralProvider();
  return (
    <div className="w-full h-[200px]">
      {(() => {
        switch (featuresMenuNum) {
          case 1:
            return <Outsourcing />;
          case 2:
            return <StaffGrowth />;
          case 3:
            return <Services />;
          case 4:
            return <Training />;
          case 5:
            return <Consulting />;
          default:
            return null;
        }
      })()}
    </div>
  );
};

export default Manager;
