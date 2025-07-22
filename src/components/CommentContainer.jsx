import React, { useEffect, useState } from 'react';

const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

const CommentContainer = ({ videoId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    if (videoId) fetchComments(videoId);
  }, [videoId]);

  const fetchComments = async (videoId) => {
    try {
      const response = await fetch(
        `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${API_KEY}&maxResults=10`
      );
      const data = await response.json();
      if (data.items) setComments(data.items);
    } catch (error) {
      console.error('Failed to fetch comments:', error);
    }
  };

  return (
    <div>
      <h2 className="text-xl font-semibold mb-4">Comments</h2>
      {comments.length === 0 ? (
        <p>No comments found.</p>
      ) : (
        <ul>
          {comments.map(({ id, snippet }) => {
            const topComment = snippet.topLevelComment.snippet;
            return (
              <li key={id} className="mb-4 border-b border-gray-700 pb-2">
                <p className="font-bold text-black">
                  {topComment.authorDisplayName}
                </p>
                <p className="text-black">{topComment.textDisplay}</p>
                <p className="text-xs text-black">
                  {new Date(topComment.publishedAt).toLocaleString()}
                </p>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default CommentContainer;
