const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

export const YOUTUBE_API = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&regionCode=US&maxResults=35&key=${API_KEY}`;

export const YOUTUBE_SEARCH_API =
  'https://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=';

export const YOUTUBE_VIDEO_SEARCH_RESULT_API =
  'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q='; 


