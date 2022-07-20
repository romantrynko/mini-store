import React, { Component } from 'react';
import CategoryPanel from '../category-panel/CategoryPanel';
import cl from './Header.module.css';
import SideMenu from '../side-menu/SideMenu';
import icon3 from '../../assets/svg 3.svg';
import icon19 from '../../assets/svg 19.svg';

export default class Header extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className={cl.header}>
        <CategoryPanel data={data} />
        <div>
          <img src={icon3} alt="icon" className={cl.header_icon_1} />
          <img src={icon19} alt="icon" className={cl.header_icon_2} />
        </div>
        <SideMenu />
      </div>
    );
  }
}
