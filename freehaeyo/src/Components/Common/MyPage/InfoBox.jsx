import NoContentBox from './NoContentBox';
import HireSummaryCard from './HireSummaryCard';
import HireCard from '../HireCard';

import { Link } from 'react-router-dom';

import MyPageText from '../../../Assets/MyPageText';
import HireData from '../../../MockData/HireData.json';

function InfoBox({ data, infoCategory }) {
  const { title, noContent, category } = MyPageText.filter(
    (data) => data.category === infoCategory,
  )[0];

  return (
    <div>
      <div>
        <p>{title}</p>
        <span>12</span>
      </div>
      {category === 'hiring' ? (
        <div>
          <Link to="/createhire">+ 채용추가하기</Link>
        </div>
      ) : null}
      <div>
        <NoContentBox text={noContent} />
        <ul>
          {/* Todo: HireData를 LocalStorage에 있는 데이터로 변경하기 */}
          {category === 'hiring' || 'pastHire'
            ? HireData.map((data) => (
                <HireSummaryCard employmentData={data} key={data.id} />
              ))
            : HireData.map((data) => (
                <HireCard employmentData={data} key={data.id} />
              ))}
        </ul>
        <div />
      </div>
    </div>
  );
}

export default InfoBox;
