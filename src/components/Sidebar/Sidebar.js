import React from 'react';
import classes from './Sidebar.css';
import GlobalNav from '../UI/HeaderContent/GlobalNav/GlobalNav';

const Sidebar = () => {
  return (
    <div className={classes.Sidebar}>
      <GlobalNav/>
    </div>
  );
};

export default Sidebar;