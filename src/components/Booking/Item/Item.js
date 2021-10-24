import React, { useState } from 'react';
import "./Item.css";
import { Link } from 'react-router-dom';



function Item(props) {

var [data] = useState({
    name: props.name,
    img: props.img,
    heading: props.heading,
    price: props.price
})

    function senddata() {
        localStorage.setItem("item", JSON.stringify(data))
        props.buy(data);
    }




    let width = props.rank * 20;

    return (
        <div className="tour-item">
            <div className="tour-contain">
                <span></span>
                <img src={props.img} alt="" />
                <div className='title-row'>
                    <h1>{props.name}</h1>
                    <p className="tour_desc">{props.heading}</p>
                </div>
                <p className="tour_price">{props.price} đ</p>
                <div className="tour_row">
                    <div className="ranking">
                        <p className="tour_rank">{props.rank}</p>
                        <div className="star">
                            <span className="vstar" style={{ width: width + '%' }}>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                                <i className="fas fa-star"></i>
                            </span>

                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>
                            <i className="fas fa-star"></i>

                        </div>
                    </div>
                    <Link to="/Cart">
                        <button className="tour_button" onClick={senddata}>Đặt vé</button>
                    </Link>
                </div>

            </div>
        </div>
    )

}
export default Item
