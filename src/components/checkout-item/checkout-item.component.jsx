import React from "react";
import "./checkout-item.styles.scss";

const CheckoutItem = ({
  cartItem,
  addItemToCart,
  decreaseQuantity,
  removeCartItem,
}) => {
  const { id, imageUrl, name, price, quantity } = cartItem;

  return (
    <tr>
      <td>
        <img src={imageUrl} alt={name} />
      </td>
      <td>{name}</td>
      <td>
        <div className="container-arrow">
          <span
            className="arrow-left"
            onClick={() => decreaseQuantity(cartItem)}
          >
            &lt;
          </span>
          <p>{quantity}</p>
          <span className="arrow-right" onClick={() => addItemToCart(cartItem)}>
            &gt;
          </span>
        </div>
      </td>
      <td>{price}</td>
      <td onClick={() => removeCartItem(cartItem)}>
        <span>X</span>
      </td>
    </tr>
  );
};

export default CheckoutItem;
