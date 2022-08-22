import { createContext, useContext, useState } from 'react';

export const ContextProvider = createContext();

export const useGeneralProvider = () => useContext(ContextProvider);

export const AppProvider = ({ children }) => {
  const [workwithusMenuNum, setworkwithusMenuNum] = useState(1);
  const [featuresMenuNum, setfeaturesMenuNum] = useState(1);
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <>
      <ContextProvider.Provider
        value={{
          workwithusMenuNum,
          setworkwithusMenuNum,
          featuresMenuNum,
          setfeaturesMenuNum,
          mobileMenu,
          setMobileMenu,
        }}
      >
        {children}
      </ContextProvider.Provider>
    </>
  );
};
