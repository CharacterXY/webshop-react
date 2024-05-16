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

import "../../assets/main.scss";
import style from "../../scss/ShoppingCart.module.scss";

const ShoppingCart = ({ isOpen, toggleDrawer }) => {
  const [total, setTotal] = useState(0);

  const { cart, deleteItemFromCart, increaseQuantity, decreaseQuantity } =
    useCart();

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
          <Typography variant="h4" component="h2">
            Shopping Cart
          </Typography>
          <div className="cart-item">
            <List dense>
              {cart.length > 0
                ? cart.map((item, index) => (
                    <>
                      <ListItem key={item.id}>
                        <img
                          src={item.imageUrl[0]}
                          alt=""
                          height={"100"}
                          width={"130"}
                        />
                        <div>
                          <p>{item.title}</p>
                          <p>{`Price: ${item.price} X ${item.quantity} = $${
                            item.price * item.quantity
                          }`}</p>
                          <div className={style["quantity-selector"]}>
                            <button
                              className={style["quantity-btn"]}
                              id="decrement"
                              onClick={() => decreaseQuantity(item.id)}
                            >
                              -
                            </button>
                            <input
                              id="quantity-input"
                              className={style["quantity-input"]}
                              value={item.quantity}
                              readOnly
                              min="1"
                            />
                            <button
                              className={style["quantity-btn"]}
                              id="increase"
                              onClick={() => increaseQuantity(item.id)}
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <ListItemSecondaryAction>
                          <IconButton
                            onClick={() => deleteItemFromCart(item.id)}
                            edge="end"
                            aria-label="delete"
                          >
                            <DeleteIcon />
                          </IconButton>
                        </ListItemSecondaryAction>
                      </ListItem>
                    </>
                  ))
                : "No added item in cart yet"}
            </List>
            {cart.length > 0 && (
              <Button
                variant="contained"
                color="success"
                style={{ marginTop: "10px" }}
              >
                Checkout
              </Button>
            )}
          </div>
        </CardContent>
      </Card>
      <Typography variant="h5" component="p" style={{ marginTop: "10px" }}>
        Total: ${total.toFixed(2)}
      </Typography>
    </Drawer>
  );
};

export default ShoppingCart;
