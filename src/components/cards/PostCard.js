import React, { useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import { Link } from "react-router-dom";

function PostCard(props) {
  const { post } = props;

  const { user, getSingleUser, dispatch } = useUsers();

  useEffect(() => {
    getSingleUser(post.userId);

    return () => {
      dispatch({ type: "RESET" });
    };
  }, [dispatch, getSingleUser, post.userId]);

  return (
    <Link to={`/post/${post.id}`}>
      <div className="bg-white rounded py-4 px-6 space-y-2 shadow-md hover:cursor-pointer transition hover:scale-105">
        <h5 className="truncate text-lg font-bold">{post.title}</h5>
        {user.loading ? (
          <div className="animate-pulse w-full flex space-x-3 text-sm">
            <div className="h-3 bg-gray-300 w-1/4 rounded-sm"></div>
            <div className="h-3 bg-gray-300 w-2/5 rounded-sm"></div>
          </div>
        ) : (
          <div className="flex space-x-3 text-sm text-gray-500">
            <p>{user.data.name}</p>
            <p>{user.data.company.name}</p>
          </div>
        )}
        <p className="line-clamp-3">{post.body}</p>
      </div>
    </Link>
  );
}

export default PostCard;
