import { Outlet, Link } from "react-router-dom";
import { Fragment } from "react";

import styles from "./navigation.styles.scss";

const Navigation = () => {
  return (
    <Fragment>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <h1>Portfolio</h1>
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/professional-info">
            Professional Info
          </Link>
          <Link className="nav-link" to="/about-me">
            About Me
          </Link>
          <Link className="nav-link" to="https://resume.io/r/rCsd84Otd">
            Resume
          </Link>
        </div>
      </div>
      <Outlet />{" "}
      {/* Here will be any component that is nested inside the navigation */}
    </Fragment>
  );
};

export default Navigation;
