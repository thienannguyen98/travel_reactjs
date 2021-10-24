import React from 'react';
import './Modal.css';
import Video from '../../../asset/videos/explore-background.mkv'

function Modal({ off }) {

    function onHideModal() {
        off();
    }


    return (
        <div id='modal-contain'>
            <div id="modal">
                <div className="close" onClick={onHideModal}>
                    <i className="fas fa-times"></i>
                </div>
                <video src={Video} autoPlay muted />
            </div>
        </div>
    )
}

export default Modal
