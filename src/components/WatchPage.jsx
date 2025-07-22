import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParams.get('v');

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  if (!videoId) return <p>No video selected</p>;

  return (
    <div className="p-4">
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

      <CommentContainer videoId={videoId} />
    </div>
  );
};

export default WatchPage;
