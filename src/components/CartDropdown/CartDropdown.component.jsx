import Button from "../Button/Button.component";

import "./CartDropdown.styles.css";

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button>Go to Checkout</Button>
    </div>
  );
};

export default CartDropdown;
