import { Chip } from '@mantine/core';
import styled from 'styled-components';

function Tag({tag, categoryData, type, handleTagClick}){
    return(
            <li>
                {type? 
                <Chip>
                    <ButtonStyled
                    onClick={()=>handleTagClick(categoryData.id)}
                    className={categoryData.isChecked? "selected" : ""}
                    >
                    {categoryData.category}
                    </ButtonStyled> 
                </Chip>
                :<Chip>{tag}</Chip>}
            </li>
    )
}

export default Tag;

// 임시 확인용 버튼 스타일, 삭제 필요
const ButtonStyled = styled.button`
    background-color:gray;
    color:white;
    &.selected{
        background-color:blue;
        color:blue;
    }
`