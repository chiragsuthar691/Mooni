import { Avatar } from "@mui/material";
import { deepOrange } from "@mui/material/colors";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { useRef, useState } from "react";
import { PopUpBigMenu, PopUpMenu } from "./Common";
import { Link } from "react-router-dom";
import { useClickAway } from "react-use";

const UserMenu = () => {
  const popupRef = useRef(null);
  const [showMenu, setShowMenu] = useState(false);
  const [isChat, setIsChat] = useState(false);

  const handleChat = () => {
    setIsChat(!isChat);
  };

  const handleUserMenu = () => {
    setShowMenu(!showMenu);
  };
  useClickAway(popupRef, () => {
    setIsChat(false);
    setShowMenu(false);
  });

  return (
    <div className="usermenu">
      <div onClick={handleUserMenu} ref={popupRef} className="user-details">
        <div className="user-avatar">
          <Avatar
            sx={{ bgcolor: deepOrange[500] }}
            alt="Remy Sharp"
            src="/broken-image.jpg"
          >
            B
          </Avatar>
        </div>
        <div>
          <p>abc</p>
          <p>Org name</p>
        </div>
      </div>
      <div className="user-bellicon" ref={popupRef} onClick={handleChat}>
        <NotificationsNoneIcon />
      </div>

      {showMenu ? (
        <PopUpMenu id="usermenu">
          <div>
            <p>UserName</p>
            <p>email</p>
            <br />
            <ul>
              <li>
                <Link to="select-organization">Switch Organization</Link>
              </li>
              <li>
                <Link to="select-settings">Settings</Link>
              </li>
              <li>
                <Link to="select-myprofile">My Profile</Link>
              </li>
              <li>
                <Link to="select-logOut">LogOut</Link>
              </li>
            </ul>
          </div>
        </PopUpMenu>
      ) : (
        ""
      )}
      {isChat ? <PopUpBigMenu></PopUpBigMenu> : ""}
    </div>
  );
};

export default UserMenu;
