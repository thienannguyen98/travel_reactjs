import React from 'react';
import "./Benefit.css";

function Benefit() {
    return (
        <>
            <div className="left">
                <div className="endow">
                    <div className="endow-icon">
                        <i className="fas fa-dollar-sign"></i>
                    </div>
                    <div className="endow-text">
                        Giá cả hợp lý, nhận ngay ưu đãi giảm giá 20% hậu Covid-19
                    </div>
                </div>
                <div className="endow">
                    <div className="endow-icon">
                        <i className="fas fa-user-tie"></i>
                    </div>
                    <div className="endow-text">
                        Đội ngũ hướng dẫn viên có tính chuyên môn cao, hiểu biết về văn hóa địa phương
                    </div>
                </div>
                <div className="endow">
                    <div className="endow-icon">
                        <i className="fas fa-route"></i>
                    </div>
                    <div className="endow-text">
                        Đa dạng mô hình du lịch, tùy theo sở thích của quý khách hàng, nhiều điểm đến hấp dẫn
                    </div>
                </div>
            </div>
            <div className="right">
            </div>
        </>
    )
}

export default Benefit
