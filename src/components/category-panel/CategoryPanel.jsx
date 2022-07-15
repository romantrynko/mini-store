import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import cl from './CategoryPanel.module.css';

export default class CategoryPanel extends Component {
  render() {
    return (
      <div className={cl.cat_panel}>
        <NavLink
          to={'/home'}
          activeclassname={cl.active}
          className={cl.cat_panel_link}
        >
          WOMEN
        </NavLink>
        <NavLink
          to={'/'}
          activeclassname={cl.active}
          className={cl.cat_panel_link}
        >
          MEN
        </NavLink>
        <NavLink
          to={'/'}
          activeclassname={cl.active}
          className={cl.cat_panel_link}
        >
          KIDS
        </NavLink>
      </div>
    );
  }
}
