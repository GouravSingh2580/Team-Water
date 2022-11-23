import React from "react";
import "./Widgets.css";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
import SearchIcon from "@material-ui/icons/Search";
import FlashMessage from "react-flash-message";
import Iframe from 'react-iframe'

function Widgets() {
  return (
    <div className="widgets">
      

<Iframe url="https://artem9021.github.io/GlobalChat/"
        width="300px"
        height="560px"
        id=""
        className="corner-wrapper"
        display="block"
        position="relative"/>
      {/* <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets__widgetContainer">
        <h2>What's happening</h2>

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="woonomic"
          options={{ height: 800 }}
        />

        <TwitterShareButton
          url={"https://facebook.com/cleverprogrammer"}
          options={{ text: "#reactjs is awesome", via: "cleverqazi" }}
        />
      </div> */}
    </div>
  );
}

export default Widgets;
