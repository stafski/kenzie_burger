import { useContext } from "react";
import { CartContext } from "../../context/CartContext/CartContext";

export const TotalCart = () => {
  const { cartItens } = useContext(CartContext);

  let somaValores = cartItens.reduce((previousValue, actualValue) => {
    return previousValue + actualValue.price;
  }, 0);

  return (
    <div>
      <p>Total</p>
      <p className="ValueTotal">R$ {Number(somaValores).toFixed(2)}</p>
    </div>
  );
};
