/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import React, { useEffect, useState } from "react";
import { useCart } from "../CartContext"; // Your custom hook for accessing cart state
import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
  Typography,
  Button,
  Drawer,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
/* 
const Cart = () => {
  const calculateTotal = (items) =>
    items.reduce((acc, item) => acc + item.amount * item.price, 0);

  const { cart } = useCart();

  return (
    <>
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
}; */

/* const CartItem = ({ imageUrl, brand, quantity, price, title }) => {
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
}; */

const ShoppingCart = ({ isOpen, toggleDrawer }) => {
  const { cart } = useCart();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const calculateTotal = () => {
      const totalPrice = cart.reduce(
        (acc, curr) => acc + curr.price * curr.quantity,
        0
      );
      setTotal(totalPrice);
    };

    calculateTotal();
  }, [cart]);

  return (
    <Drawer anchor="right" open={isOpen} onClose={toggleDrawer}>
      <Card>
        <CardContent>
          <Typography variant="h6" component="h2">
            Shopping Cart
          </Typography>
          <List dense>
            {cart?.map((item, index) => (
              <ListItem key={index}>
                <ListItemText
                  primary={item.title}
                  secondary={`Price: $${item.price} x ${item.quantity} = $${
                    item.price * item.quantity
                  }`}
                />
                <ListItemSecondaryAction>
                  <IconButton edge="end" aria-label="delete">
                    <DeleteIcon />
                  </IconButton>
                </ListItemSecondaryAction>
              </ListItem>
            ))}
          </List>
          <Button
            variant="contained"
            color="success"
            style={{ marginTop: "10px" }}
          >
            Checkout
          </Button>
        </CardContent>
      </Card>
      <Typography variant="h5" component="p" style={{ marginTop: "10px" }}>
        Total: ${total.toFixed(2)}
      </Typography>
    </Drawer>
  );
};

export default ShoppingCart;
