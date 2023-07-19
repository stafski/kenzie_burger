import logo from "../../assets/LogoKenzieBurguer.svg";
import icon from "../../assets/Icon.svg";
import { FormLogin } from "../../components/Form";
import { MainPage } from "../../components/Main";
import { RightSectionStyle, LeftSectionStyle } from "./style";

export const LoginPage = () => {
  return (
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
        <h1>Login</h1>
        <FormLogin />
      </RightSectionStyle>
    </MainPage>
  );
};
