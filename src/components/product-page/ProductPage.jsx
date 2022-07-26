import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GET_PRODUCT } from '../../Queries';
import ProductCard from '../product-card/ProductCard';
import cl from '../product-page/ProductPage.module.css';
import { useSelector, useDispatch } from 'react-redux';
import classNames from 'classnames';
import { addToCart } from '../../actions/index';

export default function ProductPage({ modal }) {
  const location = useLocation();
  const [id, setId] = useState('');
  const [selectedColor, setSelectedColor] = useState('');
  const [selectedSize, setSelectedSize] = useState('');
  const dispatch = useDispatch();

  const selectedCurrency = useSelector(
    (state) => state.currencyReducer.currency
  );

  const { data, loading, error, refetch } = useQuery(GET_PRODUCT, {
    variables: { id: id }
  });

  useEffect(() => {
    const productId = location.pathname.split('/').pop();
    setId(productId);
  }, [location.pathname]);

  if (loading) return <div>Loading...</div>;

  const { product } = data;

  const price = product.prices.find(
    (price) => price.currency.label === selectedCurrency
  );

  if (loading)
    <h2 style={{ marginTop: '80px', textAlign: 'center' }}>Loading...</h2>;

  if (error)
    return (
      <h2 style={{ marginTop: '80px', textAlign: 'center' }}>
        Something went wrong!
      </h2>
    );

  const handleAddToCart = () => {
    modal('Product added to cart');

    if (!selectedColor && !selectedSize) {
      modal(`Please chose ${product.attributes[0].name}`);
    }
    if (selectedColor) {
      dispatch(addToCart({ ...product, selectedColor }));
      setSelectedColor('');
    } else if (selectedSize) {
      dispatch(addToCart({ ...product, selectedSize }));
      setSelectedSize('');
    }
  };

  return (
    product && (
      <div className={cl.product_container}>
        <div className={cl.product_gallery}>
          <div className={cl.product_gallery_aside}>
            <div>
              <img src={product.gallery[0]} alt="" />
            </div>
            <div>
              <img src={product.gallery[1]} alt="" />
            </div>
            <div>
              <img src={product.gallery[2]} alt="" />
            </div>
          </div>
          <div className={cl.product_gallery_main}>
            <img src={product.gallery[3]} alt="" />
          </div>
        </div>

        <div className={cl.product_info}>
          <div className={cl.product_info_header}>
            <div className={cl.product_info_header_brand}>{product.brand}</div>
            <div className={cl.product_info_header_name}>{product.name}</div>
          </div>
          {product.category === 'clothes' && (
            <div className={cl.product_info_size}>
              <div className={cl.product_info_size_label}>size:</div>
              <div className={cl.product_info_sizes}>
                {product.attributes[0].items.map((item) => {
                  return (
                    <div
                      onClick={() => setSelectedSize(item.displayValue)}
                      className={classNames(cl.size, {
                        [cl.selected_size]: item.displayValue === selectedSize
                      })}
                      key={item.value}
                    >
                      {item.value}
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {product.category === 'tech' && (
            <div className={cl.product_info_color}>
              <div className={cl.product_info_color_label}>color:</div>
              <div className={cl.product_info_colors}>
                {product.attributes[0].items.map((item, index) => {
                  return (
                    <div
                      onClick={() => setSelectedColor(item.displayValue)}
                      style={{ backgroundColor: `${item.displayValue}` }}
                      className={classNames(cl.color, {
                        [cl.selected_color]: item.displayValue === selectedColor
                      })}
                      key={index}
                    ></div>
                  );
                })}
              </div>
            </div>
          )}
          <div className={cl.product_info_price}>
            <div className={cl.product_info_color_label}>price:</div>
            <div className={cl.price}>
              <div>{price.currency.symbol}</div>
              <div>{price.amount}</div>
            </div>
          </div>
          <button
            className={cl.product_info_add_button}
            onClick={handleAddToCart}
          >
            add to cart
          </button>
          <div className={cl.product_info_description}>
            {product.description}
          </div>
        </div>
      </div>
    )
  );
}
