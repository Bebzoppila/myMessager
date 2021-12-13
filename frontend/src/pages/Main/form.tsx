import React from "react";
import CustomInput from "../CustomInput";
type fieldsInfType<U> = {
  key: keyof U;
  text: string;
};

type FormPropsType<T> = {
  sendToBack: () => void;
  fieldsInf: fieldsInfType<T>[];
  updateFormField: (key: keyof T, text: string) => void;
  title: string,

};

function Form<T>({ sendToBack, fieldsInf, updateFormField,title }: FormPropsType<T>) {
  const sendForm = (event: React.FormEvent) => {
    event.preventDefault();
    sendToBack();
    
  };

  return (
    <form onSubmit={sendForm} className="form">
      <h2 className="form__title">{title}</h2>
      <div className="form__content">
        {fieldsInf.map((fieldElement) => (
          <CustomInput
            key={fieldElement.text}
            updateFormState={(text) => updateFormField(fieldElement.key, text)}
            label={fieldElement.text}
          />
        ))}
      </div>
      <button className="form__btn">{title}</button>
    </form>
  );
}

export default Form;
