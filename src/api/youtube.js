import axios from "axios";

const KEY = "AIzaSyC0pA0H7WhiAHSJKl1Yl56eplLDzWpHPBI"
const BaseURL = "https://www.googleapis.com/youtube/v3"

export default axios.create({
    baseURL: BaseURL,
    params: {
        part: "snippet",
        maxResults: 5,
        key: KEY,
        type: "video",
    }
})