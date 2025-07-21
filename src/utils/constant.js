const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=35&key=${API_KEY}`;
