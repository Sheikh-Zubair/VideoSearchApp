import React from 'react';


const VideoListItem = ({ video,videoSelect }) => {
    // const video = props.video; new es6 syntax
    const imageUrl = video.snippet.thumbnails.default.url;
    const videoTitle = video.snippet.title;
    
    return (
        <li onClick = { ()=>videoSelect(video) } className="list-group-item">
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" src = {imageUrl} />
                </div>
                <div className="media-body">
                    <div className="media-heading"> {videoTitle} </div>
                </div>
            </div>
        </li>
    );
};

export default VideoListItem;
