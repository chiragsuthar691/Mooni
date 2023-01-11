import { useRoutes } from "react-router-dom";
import routes from "./Routes/routesWithoutNavbar";

const Home = () => {
  const element = useRoutes(routes); // latest version v6.6.1 method
  return element;
};

export default Home;
