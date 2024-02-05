import { useState } from 'react';

function SelectBox(props) {
  const { optionList, setInputValue, mainInputValue, setSubInputValue } = props;

  const {
    title,
    category,
    options,
    optionDesign,
    optionDeveloper,
    optionTranslator,
  } = optionList;

  const [selectedOption, setSelectedOption] = useState(title);

  function handleSelectedOption(e) {
    setSelectedOption(e.target.value);
    if (setInputValue) {
      setInputValue(e.target.value);
    } else if (setSubInputValue) {
      setSubInputValue(e.target.value);
    }
  }

  return (
    <div>
      <div>{selectedOption}</div>
      <ul>
        {options
          ? options.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  value={option}
                  id={option}
                  name={category}
                  onClick={handleSelectedOption}
                ></input>
                <label htmlFor={option}>{option}</label>
              </li>
            ))
          : null}
        {mainInputValue === '디자이너'
          ? optionDesign.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  value={option}
                  id={option}
                  name={category}
                  onClick={handleSelectedOption}
                ></input>
                <label htmlFor={option}>{option}</label>
              </li>
            ))
          : null}
        {mainInputValue === '개발자'
          ? optionDeveloper.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  value={option}
                  id={option}
                  name={category}
                  onClick={handleSelectedOption}
                ></input>
                <label htmlFor={option}>{option}</label>
              </li>
            ))
          : null}
        {mainInputValue === '통/번역가'
          ? optionTranslator.map((option, index) => (
              <li key={index}>
                <input
                  type="radio"
                  value={option}
                  id={option}
                  name={category}
                  onClick={handleSelectedOption}
                ></input>
                <label htmlFor={option}>{option}</label>
              </li>
            ))
          : null}
      </ul>
    </div>
  );
}

export default SelectBox;
