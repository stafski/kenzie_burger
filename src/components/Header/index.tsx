import { StyledHeader } from "./style";
import logo from "../../assets/LogoKenzieBurguer.svg";
import { FiLogOut } from "react-icons/fi";
import { BiSearchAlt } from "react-icons/bi";
import { BsCart4 } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../context/UserContext/UserContext";
import { CartModal } from "../Modal";
import { CartContext } from "../../context/CartContext/CartContext";

export const Header = () => {
  const { setUser } = useContext(UserContext);
  const { modalCart, setModalCart, cartItens, setListProducts, listProducts } =
    useContext(CartContext);

  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    localStorage.clear();
    navigate("/");
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    const value = e.target.value;

    const filtro = listProducts.filter(
      (elem) =>
        elem.category.toLowerCase().includes(value.toLowerCase()) ||
        elem.name.toLowerCase().includes(value.toLowerCase())
    );

    if (filtro.length === 0) {
      setListProducts(listProducts);
    } else {
      setListProducts(filtro);
    }
  };

  return (
    <StyledHeader>
      <img src={logo} alt="Logo Hamburgueria" />
      <div>
        <form>
          <input
            type="text"
            placeholder="Digitar Pesquisa"
            onChange={handleChange}
          />
          <button disabled>
            <BiSearchAlt />
          </button>
        </form>
        <div className="divIcons">
          <div className="cartIcon">
            <span>{cartItens.length}</span>
            <BsCart4 onClick={() => setModalCart(true)} />
          </div>
          <FiLogOut onClick={logout} />
        </div>
      </div>
      {modalCart && <CartModal />}
    </StyledHeader>
  );
};
