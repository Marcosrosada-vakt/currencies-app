import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';


interface AppContextData {
  sidebarCheckout: boolean;
  setSidebarCheckout: Dispatch<SetStateAction<boolean>>;
}

export const AppContext = createContext<AppContextData>(
  {} as AppContextData
);

interface AppContextProviderProps {
  children: ReactNode;
}
export const AppContextProvider: React.FC<AppContextProviderProps> = ({
  children,
}) => {
  const [sidebarCheckout, setSidebarCheckout] = useState<boolean>(false);

  return (
    <AppContext.Provider
      value={{
        sidebarCheckout,
        setSidebarCheckout,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
