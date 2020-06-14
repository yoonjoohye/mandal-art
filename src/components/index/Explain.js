import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Write from "../button/Write";

const Explain = ({explain}) => {

    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div data-aos="zoom-in" className="text-center mb-100 mt-200">
                <div className="font-lg font-medium py-1">만다라트란?</div>
                <div className="font-gray mb-50">
                    <span className="only-pc">만다라트(Mandal-Art) 기법은</span> 일본의 '이마이즈미 히로아키'가 구상했습니다.<br/>
                    Manda(본질의 깨달음)+la(성취)+art(기술)의 합성어로<br className="only-mobile"/> '목적을 달성하는 기술'을 뜻합니다.<br/>
                </div>
            </div>

            {
                explain.map((data, index) => {

                    return(
                    <div key={index} data-aos="zoom-in" className="flex items-center justify-between mb-150">
                        {
                            index % 2 === 0 &&
                            <img className="home-img mr-50" src={require(`../../assets/img/${data.img}`)} alt={`만다라트-${data.title}`}/>
                        }
                                <div className={`w-100 ${index%2===0? 'text-right':''}`}>
                                    <div className="font-lg font-medium py-1 mb-20 border-bottom">{data.title}</div>
                                    <div className=" font-gray mb-50" dangerouslySetInnerHTML={{__html:data.contents}}></div>
                                    <Write/>
                                </div>
                        {
                            index % 2 === 1 &&
                            <img className="home-img ml-50" src={require(`../../assets/img/${data.img}`)} alt={`만다라트-${data.title}`}/>
                        }
                    </div>
                    )
                })
            }
        </>
    );
}

export default Explain;