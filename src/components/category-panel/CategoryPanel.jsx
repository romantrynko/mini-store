import React, { Component, useEffect, useState } from 'react';
import cl from './CategoryPanel.module.css';
import { ClickConsumer } from '../../ClickContext';
import { useQuery } from '@apollo/client';
import { Categories, Category } from '../../Queries';

export default function CategoryPanel({ data }) {
  // const { loading, error, data } = useQuery(Categories);
  // console.log(data.categories);
  // useEffect(() => {
  //   if (data) setCategories(data);
  //   console.log(categories);
  // }, [data]);

  return (
    <ClickConsumer>
      {(props) => {
        const onClick = props;

        return (
          <div className={cl.cat_panel}>
            {data &&
              data.categories.map((el, index) => {
                const name = el.name.toUpperCase();

                return (
                  <button
                    onClick={(e) => onClick(e)}
                    className={cl.cat_panel_link}
                    value={el.name}
                    key={index}
                  >
                    {name}
                  </button>
                );
              })}

            {/* <button
              onClick={(e) => onClick(e)}
              className={cl.cat_panel_link}
              value="All"
            >
              All
            </button>
            <button
              onClick={(e) => onClick(e)}
              className={cl.cat_panel_link}
              value="Tech"
            >
              Tech
            </button>
            <button
              onClick={(e) => onClick(e)}
              className={cl.cat_panel_link}
              value="Clothes"
            >
              Clothes
            </button> */}
          </div>
        );
      }}
    </ClickConsumer>
  );
}
