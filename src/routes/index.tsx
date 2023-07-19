import { Navigate, Route, Routes } from "react-router-dom";
import { CartProvider } from "../context/CartContext/CartContext";
import { ShopPage } from "../pages/ShopPage/index";
import { LoginPage } from "../pages/Login";
import { RegisterPage } from "../pages/Register";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/Register" element={<RegisterPage />} />
      <Route
        path="/shop"
        element={
          <CartProvider>
            {" "}
            <ShopPage />{" "}
          </CartProvider>
        }
      />
      <Route path="*" element={<Navigate to="/shop" />} />
    </Routes>
  );
};
