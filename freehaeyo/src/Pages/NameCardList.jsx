import NameCard from "../Components/Common/NameCard";

function NameCardList(){
    return(
        <>
            <div>
                <p>받은 명함</p>
                <div>
                    <form>
                        <button>명함 채택하기</button>
                    </form>
                </div>
                <main>
                    <p>받은 명함이 아직 없어요!</p>
                    <ul>
                        <NameCard/>
                    </ul>
                </main>
            </div>
        </>
    )
}

export default NameCardList;