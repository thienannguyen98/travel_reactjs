import React from 'react';
import './Contact.css';
import Info from './Info/Info';
import Form from './Form/Form';

function Contact() {
    return (
        <div id="contact-container">


            <div id="contact-main">
                <div className="contact-text">
                    <h1>Liên hệ với chúng tôi</h1>
                    <p>
                        Bạn sẽ nhận được những lời khuyên vô cùng hữu ích trong việc chọn lựa những tour du lịch hợp với sở thích, nhu cầu và quan trọng
                        hơn là hợp lý với kinh tế của bạn
                    </p>
                </div>
                <div className="form-contain">
                    <Info />
                    <Form />
                </div>
            </div>

        </div>
    )
}

export default Contact
