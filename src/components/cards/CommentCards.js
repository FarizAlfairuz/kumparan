import React, { useEffect } from "react";
import useComments from "@hooks/useComments";

function CommentCards(props) {
  const { id } = props;
  const { comments, getComments, dispatch } = useComments();

  useEffect(() => {
    getComments(id);

    return () => {
      dispatch({ type: 'RESET' })
    }
  }, [getComments, id, dispatch]);

  return (
    <div className="w-full md:w-3/4 space-y-3">
      <h6 className="font-bold text-xl">Comments</h6>
      {comments.loading ? (
        <div className="bg-gray-400 rounded-md py-8 px-6 space-y-2 animate-pulse"></div>
      ) : (
        comments.data.map((comment, index) => (
          <div
            key={index}
            className="bg-white rounded-md py-4 px-6 space-y-2 shadow-md"
          >
            <h6 className="text-lg font-bold">{comment.name}</h6>
            <p>{comment.body}</p>
          </div>
        ))
      )}
    </div>
  );
}

export default CommentCards;
