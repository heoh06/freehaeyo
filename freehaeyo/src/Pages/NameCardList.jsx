import Header from '../Components/Common/Header';
import NameCard from '../Components/Common/NameCard';

import UserData from '../MockData/UserData.json';

import { useState } from 'react';

function NameCardList() {
  // Todo: 나중에 채용 공고 리스트에 들어온 userid 찾아서 돌리기

  const [checkedUserId, setCheckedUserId] = useState([]);

  function onChangeCheckBox(checked, userId) {
    if (checked) {
      setCheckedUserId([...checkedUserId, userId]);
    }
  }

  //Todo: submit 버튼 누르고 hireData에 Post 시 보내는 데이터
  const checkedUserIdList = { checkedNameCard: checkedUserId };

  return (
    <>
      <Header />
      <div>
        <h3>받은 명함</h3>
        <div>
          <form>
            <button>명함 채택하기</button>
          </form>
        </div>
        <main>
          {UserData ? (
            <ul>
              {UserData.map((data) => (
                <NameCard
                  userData={data}
                  key={data.id}
                  checkbox
                  onChangeCheckBox={onChangeCheckBox}
                />
              ))}
            </ul>
          ) : (
            <p>받은 명함이 아직 없어요!</p>
          )}
        </main>
      </div>
    </>
  );
}

export default NameCardList;
