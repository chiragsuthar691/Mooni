import { Tab } from "@mui/material";
import { Link, Outlet } from "react-router-dom";
import {
  Backtab,
  FirstBtn,
  H1,
  ToggleButton,
  WhiteDiv,
} from "../../Components/Common";

const DashboardOverview = () => (
  <div>
    <div>
      <H1>Dashboard</H1>
      <div>
        <ToggleButton>
          <WhiteDiv>
            <FirstBtn>
              <Link to="/dashboard/overview" className="margin-1">
                <Tab label="Get Things Done" />
              </Link>
            </FirstBtn>
          </WhiteDiv>
          <WhiteDiv>
            <Backtab>
              <Link to="/dashboard/BussinesOverview" className="margin-1">
                <Tab label="Business overview" />
              </Link>
            </Backtab>
          </WhiteDiv>
          <Outlet />
        </ToggleButton>
      </div>
    </div>
  </div>
);

export default DashboardOverview;
