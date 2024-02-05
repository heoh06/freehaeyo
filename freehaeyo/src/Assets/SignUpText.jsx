const SignUpText = [
  {
    category: 'email',
    title: '이메일',
    type: 'text',
    placeholder: '이메일을 입력해주세요',
    regEx:
      /^([A-Z|a-z|0-9](\.|_){0,1})+[A-Z|a-z|0-9]\\@([A-Z|a-z|0-9])+((\.){0,1}[A-Z|a-z|0-9]){2}\.[a-z]{2,3}$/,
    errorMessage: '이메일 형식에 맞지 않습니다.',
    required: true,
  },
  {
    category: 'password',
    title: '비밀번호',
    type: 'password',
    placeholder: '비밀번호를 입력해주세요',
    regEx: /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/,
    errorMessage: '비밀번호는 영문, 숫자, 특수문자 포함 8자 이상 입력해주세요',
    required: true,
  },
  {
    category: 'name',
    title: '이름',
    type: 'text',
    placeholder: '실명을 입력해주세요',
    errorMessage: '한 글자 이상 입력해주세요',
    required: true,
  },
  {
    category: 'phone',
    title: '휴대폰 번호',
    type: 'number',
    placeholder: '휴대폰 번호를 입력해주세요',
    regEx: /^01[0-1, 7][0-9]{7,8}$/,
    errorMessage: '휴대폰 번호 열 한 자리를 입력해주세요',
    required: true,
  },
  {
    category: 'companyname',
    title: '회사·의뢰인 이름',
    type: 'text',
    placeholder: '회사 또는 실명을 입력해주세요',
    errorMessage: '한 글자 이상 입력해주세요',
    required: true,
  },
  {
    category: 'companyphone',
    title: '회사 전화번호',
    type: 'number',
    placeholder: '회사 전화번호·휴대폰 번호를 입력해주세요',
    regEx: /^01[0-1, 7][0-9]{7,8}$/,
    errorMessage: '번호 6자리 이상 입력해주세요',
    required: true,
  },
  {
    category: 'intro',
    title: '회사소개',
    type: 'text',
    placeholder: '회사 소개를 입력해주세요.',
    required: false,
  },
];

export default SignUpText;
