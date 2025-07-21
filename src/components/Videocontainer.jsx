// components/Videocontainer.jsx
import React, { useEffect, useState } from 'react';
import { YOUTUBE_API } from '../utils/constant';
import VideoCard from './VideoCard';

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    getVideos();
  }, []);

  const getVideos = async () => {
    try {
      const data = await fetch(YOUTUBE_API);
      const json = await data.json();
      setVideos(json.items);
    } catch (err) {
      console.error('Error fetching videos:', err);
    }
  };

  return (
    <div className="flex flex-wrap justify-between px-4">
      {videos.map((video) => (
        <VideoCard key={video.id.videoId || video.id} info={video} />
      ))}
    </div>
  );
};

export default Videocontainer;
