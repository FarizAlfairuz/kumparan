import React, { useEffect } from "react";
import Layout from "@components/Layout";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostDetails } from "@redux/actions/postDetailsAction";
import { GridLoader } from "react-spinners";
import UserInfo from "@components/misc/UserInfo";

function PostDetailsPage() {
  const params = useParams();
  const details = useSelector((state) => state.postDetail);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPostDetails(params.id));
  }, [dispatch, params.id]);

  return (
    <Layout width="w-3/5">
      {details.loading ? (
        <div className="flex justify-center items-center h-screen w-full">
          <GridLoader size={30} margin={2} color="teal" />
        </div>
      ) : (
        <div className="space-y-4">
          <h1 className="text-4xl font-bold">{details.posts.title}</h1>
          <UserInfo id={params.id} />
          <p className="text-lg">
            {details.posts.body}
          </p>
          <div className="w-3/4 bg-red-300">
              <h6>Comments</h6>
              <div></div>
          </div>
        </div>
      )}
    </Layout>
  );
}

export default PostDetailsPage;
