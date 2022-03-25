import React from "react";
import "./Home.css";
import SearchIcon from "@mui/icons-material/Search";
import CircleNotificationsIcon from "@mui/icons-material/CircleNotifications";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import PatternIcon from "@mui/icons-material/Pattern";
import DashboardIcon from "@mui/icons-material/Dashboard";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import CampaignIcon from "@mui/icons-material/Campaign";
import EqualizerIcon from "@mui/icons-material/Equalizer";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";

import Navitems from "./Navitems";

function Home() {
  return (
    <div className="home">
      <div className="home__left">
        <div className="home__leftup">
          <div className="home__logo">
            <PatternIcon className="homeicon" /> | OnlineCourse
          </div>
          <Navitems
            Icon={DashboardIcon}
            title="Dashboard"
            className="navitems"
          />
        </div>
        <div className="home__leftcenter">
          <div className="home__leftcenteron">
            <div className="navitems__active">
              <MenuBookIcon className="navitemsbookicon" />
              <span className="navitem__titleDash">Dashboard</span>
            </div>
            {/* <Navitems
              Icon={MenuBookIcon}
              title="Dashboard"
              className="navitems__active"
            /> */}
          </div>
        </div>
        <div className="home__leftdown">
          <Navitems
            Icon={PlayArrowIcon}
            title="Live Courses"
            className="navitems__bottom"
          />
          <Navitems
            Icon={CampaignIcon}
            title="Announcements"
            className="navitems__bottom"
          />
          <Navitems
            Icon={EqualizerIcon}
            title="Analytics"
            className="navitems__bottom"
          />
        </div>
      </div>
      <div className="home__right">
        <div className="home__navContainer">
          <div className="home__rightheader">
            <div className="home__rightOptions">
              <div className="home__rightoptionscontainer">
                <SearchIcon />
                <input type="text" placeholder="Search here" />
              </div>
              <div className="home__rightbtn">
                <h2>Add Course</h2>
              </div>
            </div>
            <div className="home__righticons">
              <div className="home__righticonsNotifycontainer">
                <CircleNotificationsIcon className="home__rightNotify" />
                <div className="notify">2</div>
              </div>
              <div className="home__righticonsAccountcontainer">
                <AccountCircleIcon className="home__rightAccount" />
              </div>
            </div>
          </div>
        </div>
        <div className="home__hor" />

        <div className="home__content">
          <div className="home__contentcontainer1">
            <div className="home__contentimage1">
              <div className="home__contentimgtext">
                <span className="home__contentcourse">Name of the Course</span>
                <div className="home__contentimgtextright">
                  <WorkspacePremiumIcon className="workspacecolor" />
                  <span>Certified</span>
                </div>
              </div>
            </div>
            <div className="home__footer">
              <div className="home__footeroptions">
                <div className="home__circle">34</div>
                <div className="home__text">
                  <h2>Enrolled Employees</h2>
                </div>
              </div>
              <div className="home__footeroptions">
                <div className="home__circle">45</div>
                <div className="home__text">
                  <h2>Enrolled Employees</h2>
                </div>
              </div>
              <div className="home__footeroptions btn">Add Topic</div>
            </div>
          </div>
          <div className="home__contentcontainer2">
            <div className="home__contentimage2">
              <img src="learning2.svg" alt="" />
              <div className="home__contentimgtext2">
                <span className="home__contentcourse2">Name of the Course</span>
                <div className="home__contentimgtextright2">
                  {/* <WorkspacePremiumIcon className="workspacecolor" /> */}
                  <span>Not Certified</span>
                </div>
              </div>
            </div>
            <div className="home__footer">
              <div className="home__footeroptions">
                <div className="home__circle">34</div>
                <div className="home__text2">
                  <h2>Enrolled Employees</h2>
                </div>
              </div>
              <div className="home__footeroptions">
                <div className="home__circle">45</div>
                <div className="home__text2">
                  <h2>Enrolled Employees</h2>
                </div>
              </div>
              <div className="home__footeroptions btn">Add Topic</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
