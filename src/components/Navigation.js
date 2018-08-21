import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = () => {
  return(
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item ">
            <NavLink className="nav-link" exact to="/">About</NavLink>
          </li>
          <li className="nav-item">
          <NavLink className="nav-link" to="/Projects">Projects</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Resume">Resume</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/Contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default Navigation;
