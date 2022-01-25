import React, { useEffect } from "react";
import PostCard from "@components/cards/PostCard";
import Layout from "@components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "@redux/actions/postAction";
import { GridLoader } from "react-spinners";

function HomePage() {
  const posts = useSelector((state) => state.post);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <Layout>
      <h1 className="text-4xl font-bold">Post List</h1>
      {posts.loading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <GridLoader size={30} margin={2} color="teal" />
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {posts.posts.map((post, index) => (
            <PostCard key={index} post={post} />
          ))}
        </div>
      )}
    </Layout>
  );
}

export default HomePage;
