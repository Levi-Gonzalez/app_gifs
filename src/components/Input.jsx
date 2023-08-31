import { useState } from "react";
const Input = ({ onNewCategoria }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = ({ target }) => {
    
    setInputValue(target.value);
  };

  const handleSubmit = (e) => {

    e.preventDefault();

    const inputLimpio = inputValue.trim();

    if (inputLimpio.length <= 1) return;

    onNewCategoria(inputLimpio);

    setInputValue('');

  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="input"
        id="input"
        placeholder="Ingresa categoria"
        value={inputValue}
        onChange={handleInputChange}
      />
    </form>
  );
};

export default Input;
