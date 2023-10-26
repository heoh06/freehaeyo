import Delete from '../../Assets/delete.svg';

function Career(){
    return(
        <li>
            <label htmlFor="record">이력</label>
            <input id="record" type="text" placeholder="이력을 입력해주세요"></input>
            <img src={Delete} alt="삭제"/>
            <button>+ 이력 추가하기</button>
        </li>
    )
}

export default Career;
