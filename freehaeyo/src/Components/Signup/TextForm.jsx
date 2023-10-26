
function TextForm(){
    return(
        <li>
            <label htmlFor="e-mail">이메일</label><span>*</span>
            <input id="e-mail" type="이메일을 입력해주세요" placeholder="이메일"/>
            <p>error</p>
        </li>
    )
}

export default TextForm;