import { Chip } from '@mantine/core';

function Tag({tag}){
    return(
            <li>
                <Chip>{tag}</Chip>
            </li>
    )
}

export default Tag;