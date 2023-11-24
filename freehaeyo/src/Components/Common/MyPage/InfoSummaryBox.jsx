function InfoSummaryBox({ userType, bookmarkedData }) {
  // Todo: 나중에 LocalStorage에 저장된 유저 정보값 -> data.length구하기
  const freelancerSummaryPhrase = {
    applicationPhrase: '명함 넣은 회사',
    selectedNameCardPhrase: '채택한 명함',
    bookmarkedCompanyPhrase: '북마크한 회사',
  };
  const companySummaryPhrase = {
    openHirePhrase: '열린 공고',
    pastHirePhrase: '지난 공고',
    selectedNameCardPhrase: '채택한 명함',
  };

  const bookmarkedList = [bookmarkedData];

  return (
    <div>
      <p>지원 현황</p>
      <ul>
        <li>
          <span>0</span>
          <p>
            {userType === 'freelancer'
              ? freelancerSummaryPhrase.applicationPhrase
              : companySummaryPhrase.openHirePhrase}
          </p>
        </li>
        <li>
          <span>{bookmarkedList.length}</span>
          <p>
            {userType === 'freelancer'
              ? freelancerSummaryPhrase.bookmarkedCompanyPhrase
              : companySummaryPhrase.pastHirePhrase}
          </p>
        </li>
        <li>
          <span>0</span>
          <p>
            {userType === 'freelancer'
              ? freelancerSummaryPhrase.selectedNameCardPhrase
              : companySummaryPhrase.selectedNameCardPhrase}
          </p>
        </li>
      </ul>
    </div>
  );
}

export default InfoSummaryBox;
