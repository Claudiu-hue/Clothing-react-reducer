import React, { useContext } from "react";
import "./checkout.styles.scss";
import { CartContext } from "../../context/cart.context";
import CheckoutItem from "../checkout-item/checkout-item.component";

const Checkout = () => {
  const {
    cartItems,
    addItemToCart,
    removeItemToCart,
    clearItemFromCart,
    cartTotal,
  } = useContext(CartContext);

  return (
    <div className="container">
      {cartItems.length > 0 ? (
        <>
          <table>
            <thead>
              <tr>
                <th>Product</th>
                <th>Description</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((cartItem) => {
                return (
                  <CheckoutItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    addItemToCart={addItemToCart}
                    decreaseQuantity={removeItemToCart}
                    removeCartItem={clearItemFromCart}
                  />
                );
              })}
            </tbody>
          </table>
          <h2 className="sub-total">Total: ${cartTotal}</h2>
        </>
      ) : (
        <h1>No Items</h1>
      )}
    </div>
  );
};

export default Checkout;
