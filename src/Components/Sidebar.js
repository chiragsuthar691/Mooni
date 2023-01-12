import logo from "../Assets/logo.png";
import Listcontainer from "./Listcontainer";
import UserMenu from "./UserMenu";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="img-center logo-border">
        <img src={logo} alt="logo" className="logo" />
      </div>
      <div>
        <div>
          <Listcontainer />
        </div>
        <div className="user">
          <UserMenu />
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
