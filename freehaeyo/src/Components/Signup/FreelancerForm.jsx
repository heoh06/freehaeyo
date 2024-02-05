import TextForm from './TextForm';
import SelectForm from './SelectForm';
import SelectTag from './SelectTag';
import Career from './Career';

import { useState, useEffect } from 'react';

function FreelancerForm({ setUserInfo, setInfoValidation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [industry, setIndustry] = useState('');
  const [stack, setStack] = useState([]);
  const [career, setCareer] = useState([]);

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [industryValid, setIndustryValid] = useState(false);

  useEffect(() => {
    setUserInfo({
      email,
      password,
      name,
      phone,
      industry,
      stack,
      career,
    });
  }, [email, password, name, phone, industry, stack, career]);

  useEffect(() => {
    setInfoValidation([
      emailValid,
      passwordValid,
      nameValid,
      phoneValid,
      industryValid,
    ]);
  }, [emailValid, passwordValid, nameValid, phoneValid, industryValid]);

  return (
    <ul>
      <TextForm
        textCategory="email"
        setValue={setEmail}
        isValid={emailValid}
        setIsValid={setEmailValid}
      />
      <TextForm
        textCategory="password"
        setValue={setPassword}
        isValid={passwordValid}
        setIsValid={setPasswordValid}
      />
      <TextForm
        textCategory="name"
        setValue={setName}
        isValid={nameValid}
        setIsValid={setNameValid}
      />
      <TextForm
        textCategory="phone"
        setValue={setPhone}
        isValid={phoneValid}
        setIsValid={setPhoneValid}
      />
      <SelectForm
        category="industry"
        setValue={setIndustry}
        setIsValid={setIndustryValid}
      />
      <SelectTag freelancer setValue={setStack} />
      <Career setValue={setCareer} />
    </ul>
  );
}

export default FreelancerForm;
