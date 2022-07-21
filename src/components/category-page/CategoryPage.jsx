import React, { useEffect, useState } from 'react';
import ProductCard from '../product-card/ProductCard';
import cl from './CategoryPage.module.css';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { GET_CATEGORIES } from '../../Queries';
import { useQuery } from '@apollo/client';

export default function CategoryPage() {
  const [products, setProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  const params = useParams();
  const { category } = params;

  const { data, loading, error } = useQuery(GET_CATEGORIES);

  useEffect(() => {
    if (data) {
      const filteredCategory = data.categories.find(
        (item) => item.name === category
      );
      setProducts(filteredCategory.products);
    }
  }, [data, category]);

  const onProductClick = (id) => {
    location.pathname = `/${category}/!${id}`;
    navigate(`/${category}/${id}`);
  };

  if (loading)
    <div style={{ marginTop: '80px', textAlign: 'center' }}>Loading...</div>;

  return (
    <div className={cl.cat_page}>
      <div className={cl.cat_page_header} style={{ height: '100px' }}>
        {category}
      </div>
      <div className={cl.cat_page_body}>
        {products &&
          products.map((product, index) => {
            return (
              <ProductCard
                onProductClick={onProductClick}
                product={product}
                key={index}
              />
            );
          })}
      </div>
    </div>
  );
}
