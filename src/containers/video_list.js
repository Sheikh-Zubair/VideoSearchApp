import React from 'react';
import VideoListItem from '../components/video_list_item';
import { connect } from 'react-redux';
import {videoSelect} from '../actions/index';
import { bindActionCreators } from 'redux';



const VideoList = (props) => {

    const VideoItems = props.videos.map((video) => {
        return (
            <VideoListItem
                key={video.etag}
                video={video} 
                videoSelect={(video)=>props.videoSelect(video)}/>
        );
    });
    return (
        <ul className="col-md-4 list-group" >
            {VideoItems}
        </ul>
    );
}
function mapDispatchToProps (dispatch) {
    return bindActionCreators ({videoSelect}, dispatch);
    // { videoSelect: videoSelect}
}

function mapStateToProps(state) {
    return (
        {
            videos: state.videos
        }
    );
}
export default connect(mapStateToProps,mapDispatchToProps)(VideoList);