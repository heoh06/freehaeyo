import { Chip } from '@mantine/core';

function Tag({ tag }) {
  return <Chip value={tag}>{tag}</Chip>;
}

export default Tag;
