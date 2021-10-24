import React from 'react';
import './ExploreVideo.css';

import video from "../../../asset/videos/explore-background.mkv"

function ExploreVideo() {
    return (
        <div className="ep-video">
            <div className="video">
                <video src={video} controls></video>
            </div>
            <div className="video-text">
                <h2>Cuộc sống là những chuyến hành trình</h2>
                <p>
                    Đến với chúng tôi, bạn sẽ được trải nghiệm không chỉ những vùng đất, cảnh quan mới mà còn là
                    là một chuyến đi tìm hiểu về văn hóa, con người bản sắc của từng địa phương
                </p>
            </div>
        </div>
    )
}

export default ExploreVideo;
