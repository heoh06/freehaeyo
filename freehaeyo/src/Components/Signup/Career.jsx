import { TagsInput } from '@mantine/core';

import styled from 'styled-components';

function Career({ setValue }) {
  return (
    <li>
      <label>이력</label>
      <TagsInput placeholder="이력을 입력하세요" onChange={setValue} />
    </li>
  );
}

export default Career;
