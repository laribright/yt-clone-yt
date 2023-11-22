'use client';

import AppContext from '@/context/appContext';
import { useEffect, useState } from 'react';

const ContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [showNav, setShowNav] = useState<boolean>(false);
  const [renderComponent, setRenderComponent] = useState(false);

  useEffect(() => {
    setRenderComponent(true);
  }, []);

  if (!renderComponent) return <></>;

  return (
    <AppContext.Provider value={{ showNav, setShowNav }}>
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
