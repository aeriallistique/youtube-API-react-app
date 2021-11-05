import axios from 'axios';

//const KEY = 'AIzaSyCiV-448JFtS-wIivunvPjQY2xCjbBsFnc';
const KEY = 'AIzaSyBRBRHfzOfhERsTd-ei8gDJVhY15D_zVBY'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY
    }
})