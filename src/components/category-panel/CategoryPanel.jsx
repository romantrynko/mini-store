import React, { Component } from 'react';
import cl from './CategoryPanel.module.css';
import { ClickConsumer } from '../../ClickContext';

export default class CategoryPanel extends Component {
  render() {
    return (
      <ClickConsumer>
        {(props) => {
          const onClick = props;
          return (
            <div className={cl.cat_panel}>
              <button
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
              </button>
            </div>
          );
        }}
      </ClickConsumer>
    );
  }
}
