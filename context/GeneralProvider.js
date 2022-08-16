import { createContext, useContext, useState } from 'react';

export const ContextProvider = createContext();

export const useGeneralProvider = () => useContext(ContextProvider);

export const AppProvider = ({ children }) => {
  const [workwithusMenuNum, setworkwithusMenuNum] = useState(1);
  return (
    <>
      <ContextProvider.Provider
        value={{
          workwithusMenuNum,
          setworkwithusMenuNum,
        }}
      >
        {children}
      </ContextProvider.Provider>
    </>
  );
};
