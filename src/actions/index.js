
export const VIDEO_SEARCH = 'VIDEO_SEARCH';
export const SELECTED_VIDEO = 'SELECTED_VIDEO';
export const SEARCH_TERM = 'SEARCH_TERM';


export function searchedVideos(videos) { // all videos from a search

    return (
        {
            type: VIDEO_SEARCH,
            payload: videos
        }
    );
}
export function videoSelect (video){ // selectedVideo
   /* if (!video){
        video=null;
    }*/
    return {
        type: SELECTED_VIDEO,
        payload: video
    };
}

export function searchTerm (term) { // contains only string of search term
    return {
        type: SEARCH_TERM,
        payload: term
    };
}


