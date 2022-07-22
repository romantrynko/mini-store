import React, { Component } from 'react';
import CategoryPanel from '../category-panel/CategoryPanel';
import cl from './Header.module.css';
import SideMenu from '../side-menu/SideMenu';
import icon3 from '../../assets/svg 3.svg';
import icon19 from '../../assets/svg 19.svg';
import { useQuery } from '@apollo/client';
import { GET_CATEGORIES } from '../../Queries';

function Header({ data, loading }) {
  if (loading)
    <div style={{ marginTop: '80px', textAlign: 'center' }}>Loading...</div>;

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

export default function HeaderHOC() {
  const { data, loading, error } = useQuery(GET_CATEGORIES);

  return <Header data={data} loading={loading} />;
}
