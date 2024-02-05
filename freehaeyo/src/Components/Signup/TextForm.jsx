import SignUpText from '../../Assets/SignUpText';
import { useState } from 'react';

function TextForm({ textCategory, setValue, isValid, setIsValid }) {
  const categoryData = SignUpText.filter(
    (data) => data.category === textCategory,
  )[0];

  const { category, title, placeholder, errorMessage, required, type, regEx } =
    categoryData;

  const [inputValue, setInputValue] = useState('');

  function handleInputValue(e) {
    const newValue = e.target.value;
    setInputValue(newValue);
    setValue(inputValue);
    handleInputValidation(newValue);
  }

  function handleInputValidation(value) {
    if (regEx) {
      setIsValid(regEx.test(value));
    } else {
      setIsValid(value.length !== 0);
    }
  }

  return (
    <li>
      <label htmlFor={category}>{title}</label>
      {required ? <span>*</span> : null}
      <input
        id={category}
        type={type}
        placeholder={placeholder}
        onChange={handleInputValue}
        autoComplete="off"
      />
      {isValid ? null : <p>{errorMessage}</p>}
    </li>
  );
}

export default TextForm;
