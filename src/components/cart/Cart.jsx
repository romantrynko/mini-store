import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromCart } from '../../actions';
import cl from './Cart.module.css';

export default function Cart({ modal }) {
  const cart = useSelector((state) => state.cartReducer.cart);
  const dispatch = useDispatch();

  const selectedCurrency = useSelector(
    (state) => state.currencyReducer.currency
  );

  const deleteHandler = (id) => {
    dispatch(removeFromCart(id));
    modal('Product removed');
  };

  return (
    <div>
      <div style={{ height: '200px' }}>
        <h1>CART</h1>
      </div>

      {!cart.length ? (
        <div className={cl.cart_empty}>
          <h1>Cart is empty</h1>
        </div>
      ) : (
        cart.map((product) => {
          const price = product.prices.find(
            (price) => price.currency.label === selectedCurrency
          );
          return (
            <div className={cl.product_container}>
              <div className={cl.product_info}>
                <button
                  onClick={() => deleteHandler(product.id)}
                  className={cl.delete_button}
                >
                  &#10006;
                </button>

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
        })
      )}
    </div>
  );
}
