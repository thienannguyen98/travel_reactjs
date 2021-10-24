import React, { useState, useEffect } from 'react';
import './HomeSlider.css';
import BG from '../../../asset/images/home-background.jpg';
import BG2 from '../../../asset/images/home-background-2.jpg';
import BG3 from '../../../asset/images/home-background-3.jpg';

function HomeSlider({ changeBg }) {

    var [bg, setBg] = useState(1);

    function changebg() {
        setBg(1)
    }

    function changebg2() {
        setBg(2)
    }

    function changebg3() {
        setBg(3)
    }

    useEffect(() => {
        changeBg(bg)
    }, [bg, changeBg])


    return (
        <div className="slider">
            <div className="slide-img">
                <img src={BG} alt="slide-img" onClick={changebg} />
            </div>
            <div className="slide-img">
                <img src={BG2} alt="slide-img" onClick={changebg2} />
            </div>
            <div className="slide-img">
                <img src={BG3} alt="slide-img" onClick={changebg3} />
            </div>
        </div>
    )
}

export default HomeSlider;
