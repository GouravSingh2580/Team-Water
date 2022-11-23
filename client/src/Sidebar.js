import React from "react";
import "./Sidebar.css";
// import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import OpacityIcon from '@material-ui/icons/Opacity';
import {DominoSpinner} from "react-spinners-kit";

function Sidebar() {
  return (
    <div className="sidebar">
      <OpacityIcon className="sidebar__twitterIcon" />

      <SidebarOption Icon={HomeIcon} text="Home" />
      {/* <SidebarOption Icon={SearchIcon} text="Explore" />
      <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
      <SidebarOption Icon={MailOutlineIcon} text="Messages" />
      <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
      <SidebarOption Icon={ListAltIcon} text="Lists"/> */}
      {/* <div onClick={()=> window.open("https://rinkeby.etherscan.io/txs?a=0x1C1fd9cAd6A916c7e2F29C8FeA334811A72521eA", "_self")}> */}
      {/* <Button> */}
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        {/* </Button> */}
      {/* </div> */}
      <DominoSpinner size={230}/>
      {/* <SidebarOption Icon={MoreHorizIcon} text="More" /> */}

      {/* Button -> Tweet */}
      {/* <Button variant="outlined" className="sidebar__tweet" fullWidth>
        Tweet
      </Button> */}
    </div>
  );
}

export default Sidebar;
