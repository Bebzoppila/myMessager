import { useState } from "react";

function useForm<T extends object>(
  initialState: T
): [state: T, updateFormState: (key: keyof T, text: string) => void] {
  const [formState, setFormState] = useState<T>(initialState);

  const updateFormState = (key: keyof T, text: string) => {
    setFormState({ ...formState, [key]: text });
  };

  return [formState, updateFormState];
}

export default useForm;
