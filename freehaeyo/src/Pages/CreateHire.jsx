import CompanyCard from "../Components/Common/CompanyCard";
import CompanyInfoCard from "../Components/Common/MyPage/CompanyInfoCard";
import {Link} from 'react-router-dom';

function CreateHire(){
    return(
        <>
            <div>
                <p>채용 올리기</p>
                <main>
                    <section>
                        <form>
                            <div>
                                <p>제목</p><span>*</span>
                                <p>채용하실 직군을 정확하게 입력해주세요</p>
                                <input type="text" placeholder="제목을 입력해주세요"/>
                            </div>
                            <div>
                                <p>내용</p><span>*</span>
                                <p>자격 요건, 우대 사항, 기술 스택 등을 입력해주세요</p>
                                <input type="text" placeholder="내용을 상세하게 입력해주세요"/>
                            </div>
                            <div>
                                <p>마감일</p>
                                <input type="date"/>
                            </div>
                            <button>채용 올리기</button>
                        </form>
                    </section>
                    <section>
                        <CompanyCard/>
                        <CompanyInfoCard/>
                        <button><Link to="/changecompanyinfo">회사 정보 수정하기</Link></button>
                    </section>
                </main>
            </div>
        </>
    )
}

export default CreateHire;
