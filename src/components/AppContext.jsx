import { createContext, useContext, useState } from "react";

const globalContext = createContext();
export const useGlobalContext = () => useContext(globalContext);

const AppContext = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const openSidebar = () => {
    setIsSidebarOpen(true);
  };
  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };
  return (
    <globalContext.Provider
      value={{ isSidebarOpen, openSidebar, closeSidebar }}
    >
      {children}
    </globalContext.Provider>
  );
};

export default AppContext;
