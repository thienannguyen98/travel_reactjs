import React from 'react';
import './ExploreIntro.css'

function ExploreIntro(props) {
    return (
        <div className="intro-info">
            <img src={props.src} alt="intro" />
            <div className="intro-text">
                <h4>{props.title}</h4>
                <p>
                    {props.text}
                </p>
            </div>
        </div>
    )
}

export default ExploreIntro
