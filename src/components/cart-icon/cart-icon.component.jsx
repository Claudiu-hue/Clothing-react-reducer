import React, { useContext } from "react";
import "./cart-icon.styles.scss";
import { ReactComponent as ShopppingIcon } from "../../assets/shopping-bag.svg";
import { CartContext } from "../../context/cart.context";

const CartIcon = () => {
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);

  return (
    <div
      className="cart-icon-container"
      onClick={() => setIsCartOpen(!isCartOpen)}
    >
      <ShopppingIcon className="shopping-icon" />
      <span className="item-count">{cartCount}</span>
    </div>
  );
};

export default CartIcon;
