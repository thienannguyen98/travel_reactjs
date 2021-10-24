import React from 'react';
import "./ExploreFooter.css";
import { Link } from "react-router-dom";

function Footer() {

    function scrollToTop() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }


    return (
        <div className="footer-container">
            <div className="row top">
                <div className="detail">
                    <h3 className="top-title">Chi tiết</h3>
                    <p className="top-text"><b>Công ty trách nhiệm hữu hạn một thành viên TraVel</b>, hẻm 6, đường 21, tổ 3, Thủ Đức, TP.HCM</p>
                    <p className="top-text"><b>(0)444-333-5555</b></p>
                    <p>Ngày hoạt động: 20/10/2000</p>
                    <p>Giấy phép kinh doanh: 123456789</p>
                </div>
                <div className="address">
                    <h3 className="top-title">Thông tin công ty</h3>
                    <p className="top-text">Đăng kí giấy phép tại TP.HCM<br /> Số đăng kí: 3528325 <br />Số VAT: 714 6583 27 <br />
                        Xem điều khoản dịch vụ để biết thêm thông tin</p>
                    <p className="top-text">© 2021 TraVel</p>
                </div>
            </div>
            <div className="row foc-info">
                <b>Liên hệ với chúng tôi để nhận được những ưu đãi hấp dẫn ngay hôm nay:</b> <Link to="./Contact">Tại đây</Link>
            </div>
            <div className="row privacy">
                <ul className="policy-list">
                    <li>Điều khoản dịch vụ</li>
                    <li>Chính sách bảo mật</li>
                    <li>Bản đồ</li>
                    <li onClick={scrollToTop}>Lên đầu trang</li>
                </ul>
                <div className="social-media">
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-facebook-square"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
            <div className="row bottom">Bạn còn chờ gì nữa, tham gia ngay đi nào</div>
        </div>
    )
}

export default Footer;
