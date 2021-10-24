import React from 'react'
import './ExploreInfo.css'

function ExploreInfo(props) {
    return (
        <div className="unique-item">
            <img src={props.src} alt="" />
            <h3>{props.title}</h3>
            <p>{props.text}</p>
        </div>
    )
}

export default ExploreInfo
