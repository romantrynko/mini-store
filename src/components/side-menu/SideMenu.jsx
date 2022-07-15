import React, { Component } from 'react'
import cl from './SideMenu.css'

export default class SideMenu extends Component {
  render() {
    return (
        <div className={cl.menu}>
            <div>$</div>
            <div>{`[]`}</div>
      </div>
    )
  }
}
