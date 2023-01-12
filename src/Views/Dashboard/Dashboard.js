import { Drawer } from "@mui/material";
import Sidebar from "../../Components/Sidebar";
import { Outlet } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <Drawer
        sx={{
          width: 300,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 300,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Sidebar />
      </Drawer>
      {/* <div className="dashboard-right fullvh"> */}
      <div className="dashboard-right">
        <div>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
