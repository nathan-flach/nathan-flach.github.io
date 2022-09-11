import { Link, NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import './index.scss';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState } from 'react';

const Navbar = () => {
  return (
    <div className="nav-bar">
      <nav>
        <NavLink className={"home"} exact="true" activeclassname="active" to="/">
          Nathan Flach
        </NavLink>
        <NavLink className={"about"} exact="true" activeclassname="active" to="about">
          About
        </NavLink>
        <NavLink className={"projects"} exact="true" activeclassname="active" to="projects">
          Projects
        </NavLink>
      </nav>

      <ul>
        <li>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://www.linkedin.com/in/nathanflach/"
          >
            <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e" className="anchor-icon" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
