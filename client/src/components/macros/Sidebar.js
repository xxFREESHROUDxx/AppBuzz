import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
// import Moment from "react-moment";
import "./Sidebar.css";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
});

export default function Sidebar(props) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === "top" || anchor === "bottom",
      })}
    
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <ul>
        <li>
          <a href="./">
            <i className="fas fa-home"></i> Home
          </a>
        </li>
        <li>
          <i className="fas fa-newspaper"></i> Attendance
        </li>
        <li>
          <i className="fas fa-dollar-sign"></i> Fees Details
        </li>
        <li>
          <i className="fas fa-list-ul"></i> Assignments
        </li>
        <li>
          <i className="far fa-question-circle"></i> Examination
        </li>
        <li>
          <i className="fas fa-scroll"></i> Results
        </li>
        <li>
          <a href="./messages.html">
            <i className="far fa-envelope"></i> Messages
          </a>
        </li>
        <li>
          <i className="fas fa-gift"></i> Opportunities
        </li>
        <li>
          <i className="fas fa-code"></i> Practicals
        </li>
        <li>
          <i className="far fa-check-circle"></i> Approved Application
        </li>
        <li>
          <i className="far fa-user"></i> Faculty
        </li>
      </ul>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="container pageTitle">
        <div className="row">
          <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
            <ul>
              <li>
                 AppBuzz
              </li>
              <li className="text-right">
                  {["right"].map((anchor) => (
                      <React.Fragment key={anchor}>
                        <Button onClick={toggleDrawer(anchor, true)}>
                          <i className="fas fa-chevron-left"></i>
                        </Button>
                        <Drawer
                          className="drawer"
                          anchor={anchor}
                          open={state[anchor]}
                          onClose={toggleDrawer(anchor, false)}
                        >
                          {list(anchor)}
                        </Drawer>
                      </React.Fragment>
                    ))}
                {/* Today: <span className="date">{  Date.now('y d m') }</span> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
