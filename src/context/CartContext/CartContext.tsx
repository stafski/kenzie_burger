import { createContext, useEffect, useState } from "react";
import {
  IDefaultProviderPropsChildren,
  IcartContext,
  IproductValue,
} from "./types";
import api from "../../services/api";
import { toast } from "react-toastify";

export const CartContext = createContext({} as IcartContext);

export const CartProvider = ({ children }: IDefaultProviderPropsChildren) => {
  const [modalCart, setModalCart] = useState(false);
  const [listProducts, setListProducts] = useState<IproductValue[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<IproductValue[]>([]);
  const [cartItens, setCartItens] = useState<IproductValue[]>([]);
  const [formValue, setFormValue] = useState("");
  const [loading, setLoading] = useState(false);
  const showProducts = () => {
    const formtext = formValue.toLocaleLowerCase();
    const formItem = listProducts.filter(
      (product: { name: string; category: string }) =>
        product.name.toLocaleLowerCase().includes(formtext) ||
        product.category.toLocaleLowerCase().includes(formtext)
    );
    if (!formValue.length) {
      setFilteredProducts([]);
    }
    setFilteredProducts(formItem);
  };
  const handleClick = (idProduct: number) => {
    const productHadleClick = listProducts.find(
      (product: { id: number }) => product.id === idProduct
    );
    const productVerification = cartItens.find(
      (product: { id: number }) => product.id === idProduct
    );
    if (!productVerification) {
      setCartItens([...cartItens, productHadleClick as IproductValue]);
      toast.success("Produto adicionado com sucesso!", {
        autoClose: 2000,
      });
    } else {
      toast.error("Item já está no carrinho!", {
        autoClose: 2000,
      });
    }
  };
  const removeItemCarrinho = (productId: number) => {
    const newProductsRemove = cartItens.filter(
      (product: { id: number }) => product.id !== productId
    );
    setCartItens(newProductsRemove);
  };
  const removetoListTodos = () => {
    setCartItens([]);
  };
  const totalReduce = cartItens.reduce((acumulador, cartItensAtual) => {
    return acumulador + cartItensAtual.price * 1;
  }, 0);
  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    async function renderProducts() {
      try {
        setLoading(true);
        const response = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setListProducts(response.data);
      } catch (error) {
        toast.error("Ops! Algo deu errado.");
      } finally {
        setLoading(false);
      }
    }
    renderProducts();
  }, []);
  return (
    <CartContext.Provider
      value={{
        modalCart,
        setModalCart,
        loading,
        listProducts,
        setListProducts,
        filteredProducts,
        handleClick,
        cartItens,
        setCartItens,
        removeItemCarrinho,
        removetoListTodos,
        totalReduce,
        showProducts,
        setFormValue,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
