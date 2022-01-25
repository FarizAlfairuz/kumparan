import React, { useEffect } from "react";
import Layout from "@components/Layout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostDetails } from "@redux/actions/postDetailsAction";
import { GridLoader } from "react-spinners";
import UserInfo from "@components/misc/UserInfo";
import CommentCards from "@components/cards/CommentCards";

function PostDetailsPage() {
  const params = useParams();
  const details = useSelector((state) => state.postDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <Layout width="w-5/6 md:w-3/5">
      {details.loading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <GridLoader size={30} margin={2} color="teal" />
        </div>
      ) : (
        <div className="space-y-4">
          <h1 className="text-4xl font-bold text-ellipsis overflow-hidden">
            {details.post.title}
          </h1>
          {details.post.userId === undefined ? (
            <div className="animate-pulse w-full flex space-x-3 text-sm">
              <div className="h-3 bg-gray-300 w-1/4 rounded-sm"></div>
              <div className="h-3 bg-gray-300 w-2/5 rounded-sm"></div>
            </div>
          ) : (
            <UserInfo id={details.post.userId} />
          )}
          <p className="text-lg">{details.post.body}</p>
          <CommentCards id={params.id} />
        </div>
      )}
    </Layout>
  );
}

export default PostDetailsPage;
