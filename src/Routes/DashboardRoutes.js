import { useRoutes } from "react-router-dom";
import routes from "./routes";

const DashboardRoutes = () => {
  const element = useRoutes(routes);
  return element;
};

export default DashboardRoutes;
