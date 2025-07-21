import React from 'react';
import { Link } from 'react-router-dom';

const VideoCard = ({ info }) => {
  const { id, snippet, statistics } = info;
  const { title, thumbnails, channelTitle, publishedAt } = snippet;

  const formatViews = (num) => {
    if (!num) return '0 views';
    if (num >= 1e6) return `${(num / 1e6).toFixed(1)}M views`;
    if (num >= 1e3) return `${(num / 1e3).toFixed(1)}K views`;
    return `${num} views`;
  };

  const videoId = typeof id === 'string' ? id : id?.videoId;

  return (
    <Link to={`/watch?v=${videoId}`}>
      <div className="w-[320px] m-3 cursor-pointer hover:scale-[1.02] transition-transform duration-200">
        <img
          className="w-full h-[180px] object-cover rounded-lg"
          src={thumbnails.medium.url}
          alt={title}
        />
        <div className="mt-2 text-black">
          <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
          <p className="text-sm text-gray-400">{channelTitle}</p>
          <p className="text-xs text-gray-500">
            {formatViews(statistics?.viewCount)} • {new Date(publishedAt).toDateString()}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;
