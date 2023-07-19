import logo from "../../assets/LogoKenzieBurguer.svg";
import icon from "../../assets/Icon.svg";
import { MainPage } from "../../components/Main";
import { RightSectionStyle, LeftSectionStyle } from "../Login/style";
import { FormRegister } from "../../components/Form";
import { DivStyle } from "./style";
import { Link } from "react-router-dom";

export const RegisterPage = () => {
  return (
    <>
      <MainPage>
        <LeftSectionStyle>
          <img className="logo" src={logo} alt="logo hamburgueria" />

          <div>
            <div>
              <img src={icon} alt="" />
            </div>
            <p>
              A vida é como um sanduíche, é preciso recheá-la com os{" "}
              <span>melhores</span> ingredientes.
            </p>
          </div>
        </LeftSectionStyle>

        <RightSectionStyle>
          <DivStyle>
            <h1>Cadastro</h1>
            <Link to="/">Retornar para o login</Link>
          </DivStyle>
          <FormRegister />
        </RightSectionStyle>
      </MainPage>
    </>
  );
};
