import { combineReducers } from 'redux';

import Videos from './reducer_videos';
import SelectedVideo from './reducer_video_select';
import  SearchTerm  from './reducer_search_term';

const rootReducer = combineReducers({
    videos: Videos,
    selectedVideo: SelectedVideo,
    term : SearchTerm
});

export default rootReducer;