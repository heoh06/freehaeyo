import TextForm from './TextForm';
import SelectTag from './SelectTag';
import SelectForm from './SelectForm';

import { useState, useEffect } from 'react';

function CompanyForm({ setCompanyInfo, setInfoValidation }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [region, setRegion] = useState('');
  const [intro, setIntro] = useState('');
  const [stack, setStack] = useState([]);

  const [emailValid, setEmailValid] = useState(true);
  const [passwordValid, setPasswordValid] = useState(true);
  const [nameValid, setNameValid] = useState(true);
  const [phoneValid, setPhoneValid] = useState(true);
  const [regionValid, setRegionValid] = useState(false);

  useEffect(() => {
    setCompanyInfo({
      email,
      password,
      name,
      phone,
      region,
      intro,
      stack,
    });
  }, [email, password, name, phone, region, intro, stack]);

  useEffect(() => {
    setInfoValidation([
      emailValid,
      passwordValid,
      nameValid,
      phoneValid,
      regionValid,
    ]);
  }, [emailValid, passwordValid, nameValid, phoneValid, regionValid]);

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
        textCategory="companyname"
        setValue={setName}
        isValid={nameValid}
        setIsValid={setNameValid}
      />
      <TextForm
        textCategory="companyphone"
        setValue={setPhone}
        isValid={phoneValid}
        setIsValid={setPhoneValid}
      />
      <SelectForm
        category="region"
        setValue={setRegion}
        isValid={regionValid}
        setIsValid={setRegionValid}
      />
      <SelectTag company setValue={setStack} />
      <TextForm textCategory="intro" setValue={setIntro} setIsValid="true" />
    </ul>
  );
}

export default CompanyForm;
