import React, { useEffect, useState } from 'react';
import ProductCard from '../product-card/ProductCard';
import cl from './CategoryPage.module.css';
import { useParams } from 'react-router-dom';
import { GET_CATEGORIES } from '../../Queries';
import { useQuery } from '@apollo/client';

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  const params = useParams();
  const { category } = params;

  const { data, loading, error } = useQuery(GET_CATEGORIES);

  useEffect(() => {
    if (data) {
      const filteredCtegories = data.categories.find(
        (el) => el.name === category
      );
      setProducts(filteredCtegories.products);
    }
  }, [data, category]);

  return (
    <div className={cl.cat_page}>
      <div className={cl.cat_page_header} style={{ height: '100px' }}>
        {category}
      </div>
      <div className={cl.cat_page_body}>
        {products &&
          products.map((product, index) => {
            return <ProductCard product={product} index={index} key={index} />;
          })}
      </div>
    </div>
  );
}
