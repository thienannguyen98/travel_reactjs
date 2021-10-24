import React from 'react';
import './HomeMain.css';
import { Link } from 'react-router-dom';

function HomeMain({ clicked, city }) {
    const citylist = [
        {
            city: 'Phú Quốc',
            nickname: 'Đảo ngọc',
            description: 'Được tạo hóa ban cho một hệ sinh thái đẹp tuyệt vời với những bờ biển dài thoai thoải cát mịn, những bãi tắm trong trẻo, những rặng san hô đầy màu sắc và một nguồn hải sản dồi dào, phong phú'
        },
        {
            city: 'Đà Lạt',
            nickname: 'Thành phố mộng mơ',
            description: 'Sở hữu vẻ đẹp nên thơ, trữ tình với những rừng thông bạt ngàn, những cánh đồng hoa cẩm tú cầu xinh xắn, những hàng cây mai anh đào rực rỡ trong gió, thắng cảnh sông, hồ, núi hùng vĩ'
        },
        {
            city: 'Nha Trang',
            nickname: 'Hòn ngọc biển Đông',
            description: 'Với những bãi tắm xanh trong, dải cát trắng mịn, những hòn đảo ngoài khơi đẹp ngỡ ngàng, rạn san hô kì ảo dưới lòng đại dương, Nha Trang là điểm đến lý tưởng cho những ai vừa thích du lịch biển, vừa muốn du lịch nghỉ dưỡng'
        },


    ];

    function openModal() {
        clicked();
    }

    return (
        <div key={city} className="contain">
            <div className="contain-info">
                <div className="intromain">
                    <div className=""></div>
                    <div>
                        <h1>{citylist[city].city}</h1>
                        <h2>{citylist[city].nickname}</h2>
                    </div>

                    <p>{citylist[city].description}</p>
                    <Link to="/Explore">
                        <button className="explore">
                            Khám phá<i className="fas fa-arrow-right"></i>
                        </button>
                    </Link>

                </div>
                <div className="home-video" onClick={openModal}>
                    <div className="border">
                        <i className="fas fa-play"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomeMain;
