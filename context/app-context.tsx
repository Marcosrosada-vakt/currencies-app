import React, {
  createContext,
  ReactNode,
  useContext,
  useState,
  Dispatch,
  SetStateAction,
} from 'react';
import { Product } from '../interfaces';


interface AppContextData {
  sidebarOpened: boolean;
  setSidebarOpened: Dispatch<SetStateAction<boolean>>;
  checkoutList: Product[];
  setCheckoutList: Dispatch<SetStateAction<Product[]>>
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
  const [sidebarOpened, setSidebarOpened] = useState<boolean>(false);
  const [checkoutList, setCheckoutList] = useState<Product[]>([]);

  return (
    <AppContext.Provider
      value={{
        sidebarOpened,
        setSidebarOpened,
        checkoutList,
        setCheckoutList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
