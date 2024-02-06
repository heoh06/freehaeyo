import { Chip, Group } from '@mantine/core';
import { useState, useEffect } from 'react';
import Header from '../Components/Common/Header';
import Tag from '../Components/Common/Tag';
import HireCard from '../Components/Common/HireCard';

import { getHireData, getHireTagData } from '../services/api';

function Hire() {
  const [checkedTag, setCheckedTag] = useState([]);
  const [hireData, setHireData] = useState([]);
  const [hireTagData, setHireTagData] = useState([]);

  useEffect(() => {
    getHireData(setHireData);
    getHireTagData(setHireTagData);
  }, []);

  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <Chip.Group multiple onChange={setCheckedTag}>
              <Group>
                {hireTagData.map((data) => (
                  <Tag tag={data.category} key={data.id} />
                ))}
              </Group>
            </Chip.Group>
          </div>
        </section>
        <section>
          <div>
            <ul>
              {/* Todo:무한스크롤 */}
              {hireData.map((data) => (
                <HireCard employmentData={data} key={data.id} />
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default Hire;
