import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import { Header } from "../../components/Header";
import { MainPage } from "../../components/Main";
import { CartContext } from "../../context/CartContext/CartContext";
import { IproductValue } from "../../context/CartContext/types";
import { Ulstyle } from "./style";

export const ShopPage = () => {
  const tokenUser = localStorage.getItem("accessToken");
  const { listProducts, cartItens, setCartItens } = useContext(CartContext);

  const handleClick = (id: number) => {
    const item = listProducts.find((el) => el.id === id);
    const alredyExist = cartItens.some((el) => el.id === id);

    if (alredyExist) {
      toast.error("Produto já adicionado");
    } else {
      toast.success("Item adicionado ao carrinho");
      setCartItens([...(cartItens as IproductValue[]), item as IproductValue]);
    }
  };

  return (
    <>
      {tokenUser ? (
        <>
          <Header />
          <MainPage>
            <Ulstyle>
              {listProducts ? (
                listProducts.map((product) => {
                  return (
                    <li key={product.id}>
                      <div className="divImg">
                        <img src={product.img} alt="" />
                      </div>
                      <div className="divDescription">
                        <h4>{product.name}</h4>
                        <p>{product.category}</p>
                        <span>
                          R${" "}
                          {Number(product.price).toFixed(2).replace(".", ",")}
                        </span>
                        <button onClick={() => handleClick(product.id)}>
                          Adicionar
                        </button>
                      </div>
                    </li>
                  );
                })
              ) : (
                <>
                  <h1>Carregando</h1>
                </>
              )}
            </Ulstyle>
          </MainPage>
        </>
      ) : (
        <Navigate to="/" />
      )}
    </>
  );
};
