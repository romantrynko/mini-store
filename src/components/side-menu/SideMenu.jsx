import React, { Component } from 'react'
import cl from './SideMenu.module.css'
import Dropdown from '../dropdown/Dropdown';

export default class SideMenu extends Component {
  render() {
    return (
        <div className={cl.menu}>
            <Dropdown>$</Dropdown>
            <div>{`[]`}</div>
      </div>
    )
  }
}
