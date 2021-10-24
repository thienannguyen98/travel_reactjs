import React, { useState } from 'react';
import './Home.css';
import HomeMain from './HomeMain/HomeMain';
import HomeSlider from './HomeSlider/HomeSlider';
import Modal from './Modal/Modal';


function Home() {
    const containerbg = ['container1', 'container2', 'container3']

    var [container, setContainer] = useState('container1');
    var [modalStatus, setModalStatus] = useState(false);
    var [city, setCity] = useState(0);



    function handleChangeBg(data) {
        setContainer(containerbg[data - 1]);
        setCity(data - 1);

    }

    function showModal() {
        setModalStatus(true);
    }

    function hideModal() {
        setModalStatus(false);
    }


    return (
        <div className={container}>
            <div id='main'>
                <HomeMain clicked={showModal} city={city} />
                <HomeSlider changeBg={handleChangeBg} />
                {modalStatus ? <Modal off={hideModal} /> : ''}
            </div>

        </div>
    )
}

export default Home;
