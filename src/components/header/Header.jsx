import React, { Component } from 'react';
import CategoryPanel from '../category-panel/CategoryPanel';
import cl from './Header.module.css'
import SideMenu from '../side-menu/SideMenu';

export default class Header extends Component {
  render() {
    return (
        <div className={cl.header}>
            <CategoryPanel />
            <div>ICOn</div>
            <SideMenu/>
      </div>
    )
  }
}
