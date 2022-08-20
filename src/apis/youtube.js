import axios from 'axios';
const KEY = 'AIzaSyCXSnWw5gGM1wtkN5cd-lOqbzQ2-keH_Zc'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part:'snippet',
        type:'video',
        maxResults: 5,
        key: KEY
    }
})