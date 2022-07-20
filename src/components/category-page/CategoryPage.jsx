import React, { Component } from 'react';
import ProductCard from '../product-card/ProductCard';
import cl from './CategoryPage.module.css';

export default class CategoryPage extends Component {
  render() {
    const { products } = this.props;

    return (
      <div className={cl.cat_page}>
        <div className={cl.cat_page_header} style={{ height: '100px' }}>
          Category name
        </div>
        <div className={cl.cat_page_body}>
          {products &&
            products.map((product, index) => {
              return <ProductCard product={product} key={index} />;
            })}
        </div>
      </div>
    );
  }
}
