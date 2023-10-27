import Header from '../Components/Common/Header';
import Tag from '../Components/Common/Tag';
import HireCard from '../Components/Common/HireCard';

function Hire(){
    return(
        <>
            <Header/>
            <main>
                <section>
                    <div>
                        <ul>
                            <Tag/>
                        </ul>
                    </div>
                </section>
                <section>
                    <div>
                        <ul>
                            <HireCard/>
                        </ul>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Hire;
