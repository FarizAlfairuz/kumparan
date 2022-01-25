import React from "react";
import { Link } from "react-router-dom";
import UserInfo from '@components/misc/UserInfo'

function PostCard(props) {
  const { post } = props;

  return (
    <Link to={`/post/${post.id}`}>
      <div className="bg-white rounded py-4 px-6 space-y-2 shadow-md hover:cursor-pointer transition hover:scale-105">
        <h5 className="truncate text-lg font-bold">{post.title}</h5>
        <UserInfo id={post.userId} />
        <p className="line-clamp-3">{post.body}</p>
      </div>
    </Link>
  );
}

export default PostCard;
