import React from "react";
import Header from "../Header/Header";
import ProductImage from "../../assets/santa_cruz2.webp";
import CartProduct from "../../assets/trek-fuel-ex8-4.webp";
import CartBasket from "../../assets/basket-bikes.jpg";
import "./Cart.scss";
import { useCart } from "../CartContext";

function Cart() {
  const { cart } = useCart();
  
  return (
    <>
      <div className="cart">
        <div className="image-container">
          <img src={CartBasket} alt="Descriptive Alt Text" />
        </div>
        <div className="cart__container">
          <div className="cart__header">
            <h1>Shopping Cart</h1>
          </div>
          <div className="cart__body">
            <div className="cart__body-header">
              <div className="cart__header-item">Product</div>
              <div className="cart__header-item">Price</div>
              <div className="cart__header-item">Quantity</div>
              <div className="cart__header-item">Total</div>
            </div>

            <div className="cart__body-item">
              <div className="cart__item-detail">
                <img
                  alt="Product"
                  src={ProductImage}
                  height="100px"
                  width="130px"
                />
                <span className="cart__item-detail card__item-detail--title">
                  Santa Cruz
                </span>
              </div>
              <div className="cart__item-detail">1900.00 €</div>
              <div className="cart__item-detail">1</div>
              <div className="cart__item-detail">1900.00 €</div>
            </div>
            <div className="cart__body-item">
              <div className="cart__item-detail">
                <img
                  alt="Product"
                  src={CartProduct}
                  height="100px"
                  width="130px"
                />
                <span className="cart__item-detail card__item-detail--title">
                  Norco MTB
                </span>
              </div>
              <div className="cart__item-detail">2800.00 €</div>
              <div className="cart__item-detail">1</div>
              <div className="cart__item-detail">2800.00 €</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cart;
