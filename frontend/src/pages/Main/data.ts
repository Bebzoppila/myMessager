type AbstractForm = {
  password: string;
  username: string;
};


export interface FormRegisterType extends AbstractForm {
  email: string;
}
type FormRegisterInputsType = { key: keyof FormRegisterType; text: string };
export const FormRegisterInputs: Array<FormRegisterInputsType> = [
  { key: "email", text: "Почта" },
  { key: "password", text: "Пароль" },
  { key: "username", text: "Логин" },
];

export interface FormLoginType extends AbstractForm {}
type FormLoginInputsType = { key: keyof FormLoginType; text: string };
export const FormLoginInputs: Array<FormLoginInputsType> = [
  { key: "username", text: "Логин" },
  { key: "password", text: "Пароль" },
  
];
