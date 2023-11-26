import NoContentBox from './NoContentBox';
import HireSummaryCard from './HireSummaryCard';
import HireCard from '../HireCard';

import { Link } from 'react-router-dom';

import MyPageText from '../../../Assets/MyPageText';
import HireData from '../../../MockData/HireData.json';

function InfoBox({ infoCategory, ...data }) {
  const { title, noContent, category } = MyPageText.filter(
    (data) => data.category === infoCategory,
  )[0];

  const { bookmarkedData, applicationData } = data;

  const bookmarkedList = [bookmarkedData];
  const bookmarkedHireData = HireData.filter((data) =>
    bookmarkedList.includes(data.id),
  );

  return (
    <div>
      <div>
        <p>{title}</p>
        <span></span>
      </div>
      {category === 'hiring' ? (
        <div>
          <Link to="/createhire">+ 채용추가하기</Link>
        </div>
      ) : null}
      <div>
        {/* 나중에 empty 파일 어떻게 처리할건지 다시 적기 */}
        {Object.values(data)[0] === undefined ? (
          <NoContentBox text={noContent} />
        ) : null}
        <ul>
          {category === 'hiring' && 'pastHire'
            ? HireData.map((data) => (
                <HireSummaryCard employmentData={data} key={data.id} />
              ))
            : null}
          {category === 'bookmark'
            ? bookmarkedHireData.map((data) => (
                <HireCard employmentData={data} key={data.id} />
              ))
            : null}
        </ul>
      </div>
    </div>
  );
}

export default InfoBox;
