import React from 'react';
import { useSelector } from 'react-redux';
import cl from './Cart.module.css';

export default function Cart() {
  const cart = useSelector((state) => state.cartReducer.cart);

  const selectedCurrency = useSelector(
    (state) => state.currencyReducer.currency
  );

  
  return (
    <div>
      <h1>CART</h1>
      {cart.map((product) => {
        const price = product.prices.find(
          (price) => price.currency.label === selectedCurrency
        );
        return (
          <div className={cl.product_container}>
            <div className={cl.product_info}>
              <div style={{ height: '200px' }}>
                <h1>CART</h1>
              </div>
              <div className={cl.product_info_header}>
                <div className={cl.product_info_header_brand}>
                  {product.brand}
                </div>
                <div className={cl.product_info_header_name}>
                  {product.name}
                </div>
              </div>
              <div className={cl.product_info_price}>
                <div className={cl.product_info_color_label}>price:</div>
                <div className={cl.price}>
                  <div>{price.currency.symbol}</div>
                  <div>{price.amount}</div>
                </div>
              </div>
              {product.category === 'clothes' && (
                <div className={cl.product_info_size}>
                  <div className={cl.product_info_size_label}>size:</div>
                  <div className={cl.product_info_sizes}>
                    <div className={cl.size}>{product.selectedSize}</div>
                  </div>
                </div>
              )}

              {product.category === 'tech' && (
                <div className={cl.product_info_color}>
                  <div className={cl.product_info_color_label}>color:</div>
                  <div className={cl.product_info_colors}>
                    <div
                      className={cl.color}
                      style={{
                        background: `${product.selectedColor}`
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>

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
          </div>
        );
      })}
    </div>
  );
}
