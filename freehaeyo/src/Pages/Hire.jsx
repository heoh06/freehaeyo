import Header from '../Components/Common/Header';
import Tag from '../Components/Common/Tag';
import HireCard from '../Components/Common/HireCard';

import HireData from '../MockData/HireData.json';
import HireTagData from '../MockData/HireTagData';

import { Chip } from '@mantine/core';
import { Group } from '@mantine/core';

import { useState } from 'react';
import { Link } from 'react-router-dom';

function Hire() {
  const [checkedTag, setCheckedTag] = useState([]);

  return (
    <>
      <Header />
      <main>
        <section>
          <div>
            <Chip.Group multiple onChange={setCheckedTag}>
              <Group>
                {HireTagData.map((data) => (
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
              {HireData.map((data) => (
                <Link to={`/hireinfo/${data.id}`} key={data.id}>
                  <HireCard employmentData={data} key={data.id} />
                </Link>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </>
  );
}

export default Hire;
