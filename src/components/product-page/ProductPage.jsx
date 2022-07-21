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
      <div className={cl.product_container}>
        <div className={cl.product_gallery}>
          <div className={cl.product_gallery_aside}>
            <div>
              <img src={item.gallery[0]} alt="" />
            </div>
            <div>
              <img src={item.gallery[1]} alt="" />
            </div>
            <div>
              <img src={item.gallery[2]} alt="" />
            </div>
          </div>
          <div className={cl.product_gallery_main}>
            <img src={item.gallery[3]} alt="" />
          </div>
        </div>

        <div className={cl.product_info}>
          <div className={cl.product_info_header}>
            <div className={cl.product_info_header_brand}>{item.brand}</div>
            <div className={cl.product_info_header_name}>{item.name}</div>
          </div>
          {item.category === 'clothes' && (
            <div className={cl.product_info_size}>
              <div className={cl.product_info_size_label}>size:</div>
              <div className={cl.product_info_sizes}>
                {item.attributes[0].items.map((item) => {
                  return <div className={cl.size}>{item.value}</div>;
                })}
              </div>
            </div>
          )}

          {item.category === 'tech' && (
            <div className={cl.product_info_color}>
              <div className={cl.product_info_color_label}>color:</div>
              <div className={cl.product_info_colors}>
                {item.attributes[0].items.map((item) => {
                  return (
                    <div
                      style={{ backgroundColor: `${item.displayValue}` }}
                      className={`${cl.color}`}
                    ></div>
                  );
                })}
              </div>
            </div>
          )}
          <div className={cl.product_info_price}>
            <div className={cl.product_info_color_label}>price:</div>
            <div className={cl.price}>
              <div>{item.prices[0].currency.symbol}</div>
              <div>{item.prices[0].amount}</div>
            </div>
          </div>
          <button className={cl.product_info_add_button}>add to cart</button>
          <div className={cl.product_info_description}>{item.description}</div>
        </div>
      </div>
    )
  );
}
