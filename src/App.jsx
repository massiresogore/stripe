import { useGlobalContext } from "./components/AppContext";

const App = () => {
  const { isSidebarOpen, openSidebar, closeSidebar } = useGlobalContext();
  return <h2>Strapi Starter</h2>;
};
export default App;
