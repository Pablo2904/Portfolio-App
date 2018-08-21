import React from 'react';
import {NavLink} from 'react-router-dom';


const Navigation = () => {
  return(
    <div>
      <NavLink to="/">About</NavLink>
      <NavLink to="/Projects">Projects</NavLink>
      <NavLink to="/Resume">Resume</NavLink>
      <NavLink to="/Contact">Contact</NavLink>
    </div>
  );
};
export default Navigation;
