import React, { useState } from "react";

type useInputReturnType = [
  string,
  (event: React.ChangeEvent<HTMLInputElement>) => void
];

const useInput = (): useInputReturnType => {
  const [inputState, setInputState] = useState<string>("");

  const updateInputState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputState(event.target.value);
  };

  return [inputState, updateInputState];
};

export default useInput;
