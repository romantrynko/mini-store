import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../../Queries';
import ProductCard from '../product-card/ProductCard';
import cl from '../product-page/ProductPage.module.css';

export default function ProductPage() {
  const location = useLocation();
  const [id, setId] = useState('');

  const { data, loading, error, refetch } = useQuery(GET_PRODUCT, {
    variables: { id: id }
  });
  const [item, setItem] = useState(data);

  useEffect(() => {
    const productId = location.pathname.split('/').pop();
    setId(productId);

    if (data) {
      const { product } = data;
      setItem(product);
    }
  }, [location.pathname, data, setItem]);

  if (loading)
    <h2 style={{ marginTop: '80px', textAlign: 'center' }}>Loading...</h2>;

  if (error)
    return (
      <h2 style={{ marginTop: '80px', textAlign: 'center' }}>
        Something went wrong!
      </h2>
    );

  return (
    item && (
      <div className={cl.product_page_body}>
        <ProductCard product={item} />;
      </div>
    )
  );
}
