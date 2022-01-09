import { useState } from "react";

const useInput = initialvalue => {
  let [value, setValue] = useState(initialvalue);

  const rest = () => {
    setValue(initialvalue);
  };
  const bind = {
    value,
    onChange: e => {
      setValue(e.target.value);
    },
  };
  return [value, bind, rest];
};

export default useInput;
