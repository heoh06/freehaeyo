const SelectOption = [
  {
    category: 'industry',
    quantity: 2,
    title: '산업군',
    subtitle: '(중복 불가)',
    option1: {
      category: 'mainIndustry',
      title: '메인 산업군',
      options: ['디자이너', '개발자', '통/번역가'],
    },
    option2: {
      category: 'subIndustry',
      title: '세부 산업군',
      optionDesign: [
        '로고/브랜딩',
        '인쇄/홍보물',
        '패키지',
        '웹/모바일',
        '마케팅',
        '산업/제품',
        '캐릭터/일러스트',
        '게임/그래픽',
        '캘리그라피/폰트',
        '기타',
      ],
      optionDeveloper: [
        '백엔드',
        '프론트엔드',
        '풀스택',
        'DevOps',
        '데이터',
        'ML/DL',
        '인프라',
        '퍼블리셔',
        'QA',
        '기타',
      ],
      optionTranslator: [
        '영어 번역',
        '중국어 번역',
        '일본어 번역',
        '기타 언어 번역',
        '영어 통역',
        '중국어 통역',
        '번역 공증 대행',
        '기타 언어 통역',
        '감수',
      ],
    },
  },
  {
    category: 'region',
    quantity: 1,
    title: '지역',
    option1: {
      category: 'region',
      title: '지역',
      options: ['서울', '경기', '인천', '부산', '광주', '제주'],
    },
  },
];

export default SelectOption;
