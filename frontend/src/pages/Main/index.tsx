import { FC, useState } from "react";
import { useAppDispatch } from "../../hooks/store";
import Form from "./form";
import "./style.sass";
import { userRegister, userLogin } from "../../store/slices/userSlice";
import {
  FormRegisterInputs,
  FormRegisterType,
  FormLoginType,
  FormLoginInputs,
} from "./data";
import useForm from "../../hooks/useForm";

const Main: FC = () => {
  const [activForm, setActivForm] = useState<"register" | "login">("register");
  const dispacher = useAppDispatch();
  const [formRegister, setFormRegister] = useForm<FormRegisterType>({
    email: "",
    password: "",
    username: "",
  });
  const [formLogin, setFormLogin] = useForm<FormLoginType>({
    username: "",
    password: "",
  });
  const registerUser = () => {
    dispacher(userRegister(formRegister));
  };

  const loginUser = () => {
    dispacher(userLogin(formLogin));
  };

  return (
    <div className="main">
      <div className="main__menu">
        <button
          onClick={() => setActivForm("register")}
          className="main__menu-btn"
        >
          Регистрация
        </button>
        <button
          onClick={() => setActivForm("login")}
          className="main__menu-btn"
        >
          Авторизация
        </button>
      </div>
      {activForm == "register" ? (
        <Form
          title="Регистрация"
          updateFormField={setFormRegister}
          fieldsInf={FormRegisterInputs}
          sendToBack={registerUser}
        />
      ) : (
        <Form
          title="Авторизация"
          updateFormField={setFormLogin}
          fieldsInf={FormLoginInputs}
          sendToBack={loginUser}
        />
      )}
    </div>
  );
};

export default Main;
