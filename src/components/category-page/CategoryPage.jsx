import React, { Component } from 'react';
import ProductCard from '../product-card/ProductCard';
import cl from './CategoryPage.module.css';

export default class CategoryPage extends Component {
  render() {
    const { products, catName, onProductClick } = this.props;
    const name = catName.charAt(0).toUpperCase() + catName.slice(1);

    return (
      <div className={cl.cat_page}>
        <div className={cl.cat_page_header} style={{ height: '100px' }}>
          {name}
        </div>
        <div className={cl.cat_page_body}>
          {products &&
            products.map((product, index) => {
              return (
                <ProductCard
                  product={product}
                  index={index}
                  key={index}
                  onProductClick={onProductClick}
                />
              );
            })}
        </div>
      </div>
    );
  }
}
