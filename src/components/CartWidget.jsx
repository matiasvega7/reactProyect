import { useContext } from "react";
import { CartContext } from "./CartContext";

const CartWidget = () => {
  const { cart } = useContext(CartContext);
  const totalItems = cart.reduce((sum, prod) => sum + prod.quantity, 0);

  return (
    <div>
      <span> {totalItems}🌱</span>
    </div>
  );
};

export default CartWidget;
