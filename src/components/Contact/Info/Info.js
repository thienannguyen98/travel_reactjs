import React from 'react';
import './Info.css'

function Info() {
    return (
        <div className="info">
            <div className="info-row">
                <div className="icon-bg">
                    <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="info-item">
                    <h4>Địa chỉ</h4>
                    <p>Thủ Đức, TP.HCM</p>
                </div>
            </div>
            <div className="info-row">
                <div className="icon-bg">
                    <i className="fas fa-phone"></i>
                </div>
                <div className="info-item">
                    <h4>Điện thoại</h4>
                    <p>444-333-5555</p>
                </div>
            </div>
            <div className="info-row">
                <div className="icon-bg">
                    <i className="fas fa-envelope"></i>
                </div>
                <div className="info-item">
                    <h4>Email</h4>
                    <p>qwerty@xxx.com</p>
                </div>
            </div>
        </div>
    )
}

export default Info
