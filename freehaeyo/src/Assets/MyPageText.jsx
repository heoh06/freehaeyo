const MyPageText = [
  {
    category: 'application',
    title: '명함 넣은 회사',
    noContent: {
      title: '아직 명함을 넣은 회사가 없어요!',
      subtitle: '채용 중인 회사들을 보시겠어요?',
      buttonPhrase: '채용 중인 회사 보기',
      buttonLink: '/hire',
    },
  },
  {
    category: 'bookmark',
    title: '북마크한 회사',
    noContent: {
      title: '북마크한 회사가 없어요!',
      subtitle: '채용 중인 회사들을 보시겠어요?',
      buttonPhrase: '채용 중인 회사 보기',
      buttonLink: '/hire',
    },
  },
  {
    category: 'hiring',
    title: '열린 채용',
    noContent: {
      title: '열린 채용이 없어요!',
      subtitle: '채용을 올려보시겠어요?',
      buttonPhrase: '+ 공고 추가하기',
      buttonLink: '/createhire',
    },
  },
  {
    category: 'pastHire',
    title: '지난 채용',
    noContent: {
      title: '지난 채용이 없어요!',
    },
  },
];

export default MyPageText;
