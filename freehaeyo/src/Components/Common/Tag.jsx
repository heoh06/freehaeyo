import { Chip } from '@mantine/core';

function Tag({ tag }) {
  return (
    <Chip value={tag} defaultChecked={false}>
      {tag}
    </Chip>
  );
}

export default Tag;
