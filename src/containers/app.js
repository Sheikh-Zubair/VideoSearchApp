

import React, { Component } from 'react';
import _ from 'lodash';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import SearchBar from './search_bar.js';
import VideoList from './video_list.js';
import VideoDetail from './video_detail.js';
// actions
import {searchedVideos, videoSelect} from '../actions/index';

import YTsearch from 'youtube-api-search';

const API_KEY = 'AIzaSyA-Fy4lJ-4dY7wtyxNKQJKaBHNfTNmxWR4'; // it allows us to request to youtube 


// This is a class based component that should produce some HTML content

class App extends Component {
    constructor (props) {
        super(props);

        this.state={
            selectedVideo: null
        }
        this.videoSearch('karachi city');
        
    }

    videoSearch(term) {
        YTsearch({ key: API_KEY, term: term }, (videos) => {
            this.props.searchedVideos(videos); // send searched result to reduceres by actionCreators
            //this.setState({selectedVideo:videos[0]});
            this.props.videoSelect(videos[0]); // send selectedVideo to the videoDetail
        })
    }
    
    render() {
        if (this.props.term){ // making sure that vidoSearch with these params never run at the time of rendering
            this.videoSearch(this.props.term);
        }
        return (
            <div>
                <SearchBar />
                <VideoDetail />
                <VideoList />
            </div>
        );
    }
    // this html like thing is jsx, which allows us to 
    //  write html htl like content inside JavaScript
}
function mapStateToProps (state){
    return {
        term: state.term
    }
}

function mapDipatchToProps (dispatch) {
    return bindActionCreators(
        {
            searchedVideos: searchedVideos,
            videoSelect: videoSelect
        }, dispatch);
}

export default connect (mapStateToProps, mapDipatchToProps)(App);
