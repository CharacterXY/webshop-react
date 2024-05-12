/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React from "react";
import { useState } from "react";
import { useCart } from "../CartContext"; // Your custom hook for accessing cart state
import Header from "../Header/Header";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemSecondaryAction from "@mui/material/ListItemSecondaryAction";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

const Cart = () => {
  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  const { cart } = useCart();

  return (
    <>
      <Header />
      <div className="cart">
        <div className="image-container">
          <img src={CartBasket} alt="Basket full of bikes" />
        </div>
        <div className="cart__container">
          <h1 className="cart__header">Shopping Cart</h1>
          <div className="cart__body">
            <div className="cart__body-header">
              <div className="cart__header-item">Product</div>
              <div className="cart__header-item">Price</div>
              <div className="cart__header-item">Quantity</div>
              <div className="cart__header-item">Total</div>
            </div>
            {cart.length > 0 ? (
              cart.map((item, index) => (
                <CartItem
                  key={index}
                  index={index}
                  imageUrl={item.imageUrl}
                  brand={item.brand}
                  quantity={item.quantity}
                  price={item.price}
                  title={item.title}
                />
              ))
            ) : (
              <p>No Items in Cart</p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

const CartItem = ({ imageUrl, brand, quantity, price, title }) => {
  return (
    <div className="cart__item-detail">
      <img
        alt={`Product ${title}`}
        src={imageUrl}
        height="100px"
        width="130px"
      />
      <div className="cart__item-info">
        <span className="cart__item-detail--title">{title}</span>
        <span className="cart__item-detail">{brand}</span>
        <span className="cart__item-detail">Qty: {quantity}</span>
        <span className="cart__item-detail">${price.toFixed(2)}</span>
        <span className="cart__item-detail">
          Total: ${(price * quantity).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

const ShoppingCart = () => {
  const { cart, removeFromCart } = useCart();

  const [isOpen, setIsOpen] = useState(false);

  const toggleBasket = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Card>
      <CardContent onClick={toggleBasket} variant="contained">
        <Typography variant="h6" component="h2">
          Shopping Cart
        </Typography>
        <List dense>
          {cart.map((item, index) => (
            <ListItem key={index}>
              <ListItemText
                primary={item.title}
                secondary={`Price: $${item.price} x ${item.quantity} = $${
                  item.price * item.quantity
                }`}
              />
              <ListItemSecondaryAction>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => removeFromCart(item.id)}
                >
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "20px" }}
        >
          Checkout
        </Button>
      </CardContent>
    </Card>
  );
};

export { Cart, CartItem, ShoppingCart };
