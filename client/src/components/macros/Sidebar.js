import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import DarkModeToggle from "react-dark-mode-toggle";
import useDarkMode from 'use-dark-mode';
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
  const darkMode = useDarkMode(false);
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });
  // const [isDarkMode, setIsDarkMode] = React.useState(() => false);

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
          <a href="/">
            <i className="fas fa-home"></i> Home
          </a>
        </li>
        <li>
        <i className="fas fa-magic"></i> Dark Mode &nbsp;
         <DarkModeToggle
            checked={darkMode.value} 
            onChange={darkMode.toggle}
            size={50}
          />

        
        </li>
        <li>
          <i className="fas fa-newspaper"></i> Documentation
        </li>
        <li>
          <i className="fas fa-dollar-sign"></i> Login
        </li>
        <li>
          <i className="fas fa-list-ul"></i> Contact Developer
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
                <img src="/images/square.png" height="16px" alt=""/> AppBuzz
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
