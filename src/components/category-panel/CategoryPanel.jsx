import React, { Component, useEffect, useState } from 'react';
import cl from './CategoryPanel.module.css';
import { NavLink, useLocation } from 'react-router-dom';

export default function CategoryPanel({ data }) {
  const location = useLocation();
  const [path, setPath] = useState();

  useEffect(() => {
    const path = location.pathname.substring(1);
    console.log(path);
    setPath(path);
  }, [location.pathname, setPath]);

  return (
    <div className={cl.cat_panel}>
      {data &&
        data.categories.map((el, index) => {
          const name = el.name;

          return (
            <NavLink
              to={`${name}`}
              className={
                path !== name ? cl.cat_panel_link : cl.cat_panel_link_active
              }
              key={index}
            >
              {name}
            </NavLink>
          );
        })}
    </div>
  );
}
