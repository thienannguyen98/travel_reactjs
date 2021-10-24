import React from 'react';
import './Explore.css';
import ExploreIntro from './ExploreIntro/ExploreIntro';
import ExploreInfo from './ExploreInfo/ExploreInfo';
import ExploreVideo from './ExploreVideo/ExploreVideo';
import ExploreFooter from '../ExploreFooter/ExploreFooter';
import Benefit from './Benefit/Benefit';
import intro1 from "../../asset/images/intro-img-1.jpg";
import intro2 from "../../asset/images/intro-img-2.jpg";
import intro3 from "../../asset/images/intro-img-3.jpg";
import img1 from "../../asset/images/unique-1.jpg";
import img2 from "../../asset/images/unique-2.jpg";
import img3 from "../../asset/images/unique-3.jpg";
import img4 from "../../asset/images/unique-4.jpg";
import img5 from "../../asset/images/unique-5.jpg";
import img6 from "../../asset/images/unique-6.jpg";

function Explore() {

    const intros = [
        {
            src: intro1,
            title: 'Nghỉ dưỡng',
            text: 'Tận hưởng cảm giác yên bình, phục hồi sức khỏe, tinh thần'
        },
        {
            src: intro2,
            title: 'Mạo hiểm',
            text: 'Trải nghiệm cảm giác mạnh, tìm kiếm những điều mới mẻ'
        },
        {
            src: intro3,
            title: 'Giao lưu',
            text: 'Tìm hiểu về bản sắc, con người, tham gia các lễ hội văn hóa'
        }
    ]

    const uniqueinfo = [
        {
            src: img1,
            title: "Phong cảnh",
            text: "Chiêm ngưỡng cảnh sắc thiên nhiên đắm say, hùng vĩ khắp mọi miền đất nước"
        },
        {
            src: img2,
            title: "Ẩm thực",
            text: "Thưởng thức những món ăn độc đáo, có một không hai của từng vùng miền"
        },
        {
            src: img3,
            title: "Tôn giáo",
            text: "Tìm hiểu những giá trị văn hóa phi vật thể và vật thể gắn liền với tôn giáo, tín ngưỡng"
        },
        {
            src: img4,
            title: "Vui chơi, giải trí",
            text: "Tham gia các hoạt động vui chơi ngoài trời, các trò chơi cảm giác mạnh"
        },
        {
            src: img5,
            title: "Lễ hội",
            text: "Tìm hiểu về truyền thống, đời sống tinh thần của từng địa phương thông qua các hoạt động lễ hội"
        },
        {
            src: img6,
            title: "Văn hóa",
            text: "Hòa mình cùng cuộc sống, các hoạt động văn hóa một cách vô cùng chân thực"
        }
    ]


    return (

        <div id="ep-container">
            <div id="bg">
                <div className="bg-text">
                    <h1>Mong muốn của các bạn <br />là nhiệm vụ của chúng tôi</h1>
                </div>
                <div className="blur-bg"></div>
            </div>


            <div id="ep-main">
                <div className="intro">
                    {intros.map((intro, index) =>
                        <ExploreIntro
                            key={index}
                            src={intro.src}
                            title={intro.title}
                            text={intro.text}
                        />
                    )}
                </div>
                <div className="unique">
                    {uniqueinfo.map((info, index) =>
                        <ExploreInfo
                            key={index}
                            src={info.src}
                            title={info.title}
                            text={info.text}
                        />
                    )}
                </div>
                <ExploreVideo />


                <div className="endow-container">
                    <Benefit />
                </div>
                <ExploreFooter />
            </div>

        </div>

    )
}

export default Explore;
