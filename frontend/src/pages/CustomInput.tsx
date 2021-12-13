import { FC } from "react";
import useInput from "./../hooks/useInput";
type CuspomInputType = {
  label: string;
  updateFormState: (text:string) => void
};

const CustomInput: FC<CuspomInputType> = ({ label, updateFormState }) => {
  const inputId: string = String(Math.random() * 100 + Math.random() * 100);
  const [valueInput, setValueInput] = useInput();


  return (
    <div className="form-item">
      <label className="form-item__label" htmlFor={inputId}>
        {label}
      </label>
      <input
        onBlur={() => updateFormState(valueInput)}
        onChange={setValueInput}
        value={valueInput}
        id={inputId}
        className="form-item__input"
        type="text"
      />
    </div>
  );
};

export default CustomInput
