import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { SubmitHandler } from "react-hook-form/dist/types";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserContext";
import { LoginSchema } from "../../pages/Login/LoginSchema";
import { ErrorMessage, FormType } from "./style";
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterSchema } from "../../pages/Register/RegisterSchema";

export interface iLoginFormValues {
  email: string;
  password: string;
}

export const FormLogin = () => {
  const { loginOfUser } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iLoginFormValues>({
    mode: "onBlur",
    resolver: zodResolver(LoginSchema),
  });

  const submit: SubmitHandler<iLoginFormValues> = async (
    data: iLoginFormValues
  ) => {
    loginOfUser(data);
    // reset();
  };

  return (
    <FormType onSubmit={handleSubmit(submit)}>
      <label htmlFor="">Email</label>
      <input type="text" placeholder="Email" {...register("email")} />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <label htmlFor="">Senha</label>
      <input type="password" placeholder="Senha" {...register("password")} />
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}

      <button className="btnLog">Logar</button>

      <Link to="/Register">
        Crie sua conta para saborear muitas delícias e matar sua fome!
      </Link>

      <Link to="/Register" className="btnRegister">
        Cadastrar
      </Link>
    </FormType>
  );
};

export interface iRegisterFormValues {
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}

export const FormRegister = () => {
  const { registerOfUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<iRegisterFormValues>();
  // ({
  //   resolver: zodResolver(RegisterSchema),
  // });

  const submit: SubmitHandler<iRegisterFormValues> = async (
    data: iRegisterFormValues
  ) => {
    const newUser = {
      email: data.email,
      password: data.password,
      name: data.name,
      // confirmPassword: data.confirmPassword,
    };
    console.log(newUser);
    registerOfUser(newUser);
    reset();
  };

  return (
    <FormType noValidate onSubmit={handleSubmit(submit)}>
      <label htmlFor="">Nome</label>
      <input type="text" placeholder="Digite seu nome" {...register("name")} />
      {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}

      <label htmlFor="">Email</label>
      <input
        type="email"
        placeholder="Digite seu email"
        {...register("email")}
      />
      {errors.email && <ErrorMessage>{errors.email.message}</ErrorMessage>}

      <label htmlFor="">Senha</label>
      <input
        type="password"
        placeholder="Digite sua senha"
        {...register("password")}
      />
      {errors.password && (
        <ErrorMessage>{errors.password.message}</ErrorMessage>
      )}

      <label htmlFor="">Confirmar Senha</label>
      <input
        type="password"
        placeholder="Confirmar senha"
        {...register("confirmPassword")}
      />
      {errors.confirmPassword && (
        <ErrorMessage>{errors.confirmPassword.message}</ErrorMessage>
      )}

      <button className="btnFormRegister" type="submit">
        Cadastrar
      </button>
    </FormType>
  );
};
