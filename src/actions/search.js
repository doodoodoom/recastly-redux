import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return (dispatch) => {
    searchYouTube({YOUTUBE_API_KEY, q}, (err, items) => {
      if (err) {
        console.log(`ERROR! ${err}`);
        return;
      }
      dispatch(changeVideoList(items)), changeVideo(items[0]);
    });
  };
};

export default handleVideoSearch;
