import React, { useState } from 'react';
import "./Cart.css";

function Cart(props) {

    var itemparse = JSON.parse(localStorage.getItem('item'));
    var [item] = useState(itemparse);
    var [adult, setAdult] = useState(0);
    var [child, setChild] = useState(0);

    var adultprice = adult * item.price;
    var childprice = child * 0.6 * item.price;

    function increaseA() {
        setAdult(prev => prev + 1);
    }

    function increaseC() {
        setChild(prev => prev + 1);
    }

    function decreaseA() {
        setAdult(prev => prev > 0 ? prev - 1 : prev);
    }

    function decreaseC() {
        setChild(prev => prev > 0 ? prev - 1 : prev);
    }



    return (
        <div className="cart-container">
            <div className="cart">
                <img src={item.img} alt="" />
                <h1>{item.name}</h1>
                <h2>{item.heading}</h2>
                <div className="pay">

                    <div className="payrow">
                        <p>Người lớn ({item.price} vnđ)</p>
                        <div className="quantity">
                            <button onClick={decreaseA}>-</button>
                            <p>{adult}</p>
                            <button onClick={increaseA}>+</button>
                        </div>
                    </div>
                    <div className="payrow">
                        <p>Trẻ em(5-9) ({0.6 * item.price} vnđ)</p>
                        <div className="quantity">
                            <button onClick={decreaseC}>-</button>
                            <p>{child}</p>
                            <button onClick={increaseC}>+</button>
                        </div>
                    </div>
                    <div className="payrow">
                        <h2>Tổng Cộng</h2>
                        <div className="quantity">
                            <p>{Math.ceil(adultprice + childprice)} vnđ</p>
                        </div>
                    </div>
                    <div className="payrow last">
                        <h2 className="payment">Thanh toán</h2>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart;
