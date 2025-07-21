import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParams.get('v');

  const [comments, setComments] = useState([]);

  useEffect(() => {
    dispatch(closeMenu());

    if (videoId) {
      fetchComments(videoId);
    }
  }, [dispatch, videoId]);

  const fetchComments = async (videoId) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}&maxResults=10`
      );
      const data = await response.json();

      if (data.items) {
        setComments(data.items);
      }
    } catch (error) {
      console.error('Failed to fetch comments:', error);
    }
  };

  return (
    <div className="p-4">
      {videoId ? (
        <>
          <div className="flex justify-center mb-6">
            <iframe
              width="900"
              height="506"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-4">Comments</h2>
            {comments.length === 0 && <p>No comments found.</p>}

             <ul>
  {comments.map(({ id, snippet }) => {
    const topComment = snippet.topLevelComment.snippet;
    return (
      <li key={id} className="mb-4 border-b border-gray-700 pb-2">
        <p className="font-bold text-black">{topComment.authorDisplayName}</p>
        <p className="text-black">{topComment.textDisplay}</p>
        <p className="text-xs text-black">
          {new Date(topComment.publishedAt).toLocaleString()}
        </p>
      </li>
    );
  })}
</ul>


          </div>
        </>
      ) : (
        <p>No video selected</p>
      )}
    </div>
  );
};

export default WatchPage;
