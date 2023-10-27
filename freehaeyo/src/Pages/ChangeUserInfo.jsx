import TextForm from '../Components/Signup/TextForm';
import SelectForm from '../Components/Signup/SelectForm';
import SelectTag from '../Components/Signup/SelectTag';
import Career from '../Components/Signup/Career';

function ChangeUserInfo(){
    return(
        <>
            <div>
                <p>개인 정보 수정</p>
                <main>
                    <form>
                        <ul>
                            <TextForm/>
                            <TextForm/>
                            <TextForm/>
                            <SelectForm/>
                            <SelectTag/>
                            <Career/>
                        </ul>
                        <button>수정하기</button>
                    </form>
                </main>
            </div>
        </>
    )
}

export default ChangeUserInfo;