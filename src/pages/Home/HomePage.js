import React, { useEffect } from "react";
import PostCard from "../../components/cards/PostCard";
import Layout from "@components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../../redux/actions/postAction";
// import { fetchUsers } from '../../redux/actions/userAction'

function HomePage() {
  const posts = useSelector((state) => state.post);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
    // dispatch(fetchUsers())
  }, [dispatch]);

  return (
    <Layout>
      <h1 className="text-4xl font-bold">Post List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {posts.posts.map((post, index) => (
          <PostCard key={index} post={post} />
        ))}
      </div>
    </Layout>
  );
}

export default HomePage;
