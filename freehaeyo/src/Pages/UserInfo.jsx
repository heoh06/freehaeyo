import NameCard from '../Components/Common/NameCard';

import UserData from '../MockData/UserData.json';

import { useParams } from 'react-router-dom';

function UserInfo() {
  const userId = useParams();

  const currentUserData = UserData[userId.id];
  const careerData = currentUserData.resume;

  return (
    <>
      <div>
        <main>
          <NameCard userData={currentUserData} />
          <div>
            <span>이력</span>
            <ul>
              {careerData.map((data, index) => (
                <li key={index}>{data}</li>
              ))}
            </ul>
          </div>
        </main>
      </div>
    </>
  );
}

export default UserInfo;
