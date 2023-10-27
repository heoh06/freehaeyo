import TextForm from "../Components/Signup/TextForm";

function ChangeCompanyInfo(){
    return(
        <>
            <div>
                <p>회사 정보 수정</p>
                <main>
                    <form>
                        <ul>
                            <TextForm/>
                            <TextForm/>
                            <TextForm/>
                            <TextForm/>
                        </ul>
                        <button>수정하기</button>
                    </form>
                </main>
            </div>
        </>
    )
}

export default ChangeCompanyInfo;