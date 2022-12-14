import { createContext, useContext, useState } from 'react';

export const ContextProvider = createContext();

export const useGeneralProvider = () => useContext(ContextProvider);

export const AppProvider = ({ children }) => {
  const [workwithusMenuNum, setworkwithusMenuNum] = useState(1);
  const [featuresMenuNum, setfeaturesMenuNum] = useState(1);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [contact, setContact] = useState(false);
  const [dropMenu, setDropMenu] = useState(false);
  const [thanks, setThanks] = useState(false);
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
          contact,
          setContact,
          dropMenu,
          setDropMenu,
          thanks,
          setThanks,
        }}
      >
        {children}
      </ContextProvider.Provider>
    </>
  );
};
