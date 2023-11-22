import { Dispatch, SetStateAction, createContext } from 'react';

type AppContextType = {
  showNav: boolean;
  setShowNav: Dispatch<SetStateAction<boolean>>;
};

const AppContext = createContext<AppContextType>({
  showNav: false,
  setShowNav: () => null,
});

export default AppContext;
