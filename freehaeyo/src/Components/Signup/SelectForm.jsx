import SelectBox from './SelectBox';
import SelectOption from '../../Assets/SelectOption';

import { useState, useEffect } from 'react';

function SelectForm({ category, setValue, setIsValid }) {
  const categoryData = SelectOption.filter(
    (data) => data.category === category,
  )[0];

  const { title, subtitle, quantity, option1, option2, options } = categoryData;

  const [mainInputValue, setMainInputValue] = useState('');
  const [subInputValue, setSubInputValue] = useState('');

  const industryInfo = {
    mainIndustry: mainInputValue,
    subIndustry: subInputValue,
  };

  useEffect(() => {
    if (category === 'industry') {
      setValue(industryInfo);
    } else if (category === 'region') {
      setValue(mainInputValue);
    }
    if (
      category === 'industry' &&
      mainInputValue !== '' &&
      subInputValue !== ''
    ) {
      setIsValid(true);
    } else if (category === 'region' && mainInputValue !== '') {
      setIsValid(true);
    }
  }, [mainInputValue, subInputValue]);

  return (
    <li>
      <label>
        {title}
        {subtitle ? <p>{subtitle}</p> : null}
        <span>*</span>
      </label>
      {quantity === 1 ? (
        <SelectBox optionList={option1} setInputValue={setMainInputValue} />
      ) : (
        <div>
          <SelectBox optionList={option1} setInputValue={setMainInputValue} />
          <SelectBox
            optionList={option2}
            mainInputValue={mainInputValue}
            setSubInputValue={setSubInputValue}
          />
        </div>
      )}
    </li>
  );
}

export default SelectForm;
