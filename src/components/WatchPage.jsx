import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentContainer from './CommentContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();
  const videoId = searchParams.get('v');

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  if (!videoId) return <p>No video selected</p>;

  return (
    <div className="p-4 w-full">
      {/* VIDEO + LIVE CHAT SIDE BY SIDE */}
      <div className="flex flex-col lg:flex-row">
        {/* Video Section */}
        <div className="flex-1">
          <div className="flex justify-center mb-4 lg:mb-0 lg:mr-4">
            <iframe
              width="100%"
              height="500"
              src={`https://www.youtube.com/embed/${videoId}`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg w-full"
            ></iframe>
          </div>
        </div>

        {/* Live Chat Section */}
        <div className="w-full lg:w-96 mt-4 lg:mt-0 border-b-black rounded-b-4xl">
          <LiveChat />
        </div>
      </div>

      {/* Comment Section */}
      <div className="mt-6">
        <CommentContainer videoId={videoId} />
      </div>
    </div>
  );
};

export default WatchPage;
