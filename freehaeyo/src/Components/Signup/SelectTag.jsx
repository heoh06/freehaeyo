import Tag from '../Common/Tag';
import { Chip } from '@mantine/core';

import { useState, useEffect } from 'react';

import CategoryOption from '../../Assets/CategoryOption';

function SelectTag(props) {
  const { setValue, freelancer, company } = props;
  const [selectedTag, setSelectedTag] = useState([]);

  const freelancerTagList = CategoryOption.filter(
    (data) => data.title === 'freelancerTag',
  )[0].options;

  const companyTagList = CategoryOption.filter(
    (data) => data.title === 'companyTag',
  )[0].options;

  useEffect(() => {
    setValue(selectedTag);
    if (selectedTag.length > 3) {
      alert('태그는 최대 3개까지 선택 가능합니다.');
      setSelectedTag(selectedTag.slice(0, 3));
    }
  }, [selectedTag]);

  return (
    <li>
      <label>
        마이키워드<p>(최대 3개 선택 가능)</p>
      </label>
      <Chip.Group multiple={true} value={selectedTag} onChange={setSelectedTag}>
        {freelancer
          ? freelancerTagList.map((tag, index) => <Tag key={index} tag={tag} />)
          : companyTagList.map((tag, index) => <Tag key={index} tag={tag} />)}
      </Chip.Group>
    </li>
  );
}

export default SelectTag;
