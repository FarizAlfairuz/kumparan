import React, { useEffect } from "react";
import Layout from "@components/Layout";
import useUsers from "@hooks/useUsers";
import { useParams } from "react-router-dom";
import AlbumCards from "@components/cards/AlbumCards";

function UserDetailsPage() {
  const params = useParams();
  const { user, getSingleUser, dispatch } = useUsers();

  useEffect(() => {
    getSingleUser(params.id);

    return () => {
      dispatch({ type: "RESET" });
    };
  }, [dispatch, getSingleUser, params.id]);

  return (
    <Layout width="w-5/6 md:w-3/5">
      <h1 className="text-4xl font-bold text-ellipsis overflow-hidden">
        User Details
      </h1>
      {user.loading ? (
        <div className="bg-white rounded-lg w-full shadow-md px-6 py-8 space-y-6">
          <div className="h-6 bg-gray-200 rounded-sm animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-sm animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-sm animate-pulse"></div>
          <div className="h-6 bg-gray-200 rounded-sm animate-pulse"></div>
        </div>
      ) : (
        <div className="bg-white rounded-lg w-full shadow-md px-6 py-8 space-y-4">
          <div className="space-y-2">
            <div>Name</div>
            <div className="border-b-2">{user.data.name}</div>
          </div>
          <div className="space-y-2">
            <div>Email</div>
            <div className="border-b-2">{user.data.email}</div>
          </div>
          <div className="space-y-2">
            <div>Address</div>
            <div className="border-b-2">
              {user.data.address.street +
                ", " +
                user.data.address.suite +
                ", " +
                user.data.address.city +
                ", " +
                user.data.address.zipcode}
            </div>
          </div>
          <div className="space-y-2">
            <div>Company</div>
            <div className="border-b-2">{user.data.company.name}</div>
          </div>
        </div>
      )}
      <div className="bg-white rounded-lg w-full shadow-md px-6 py-8 space-y-6">
        <div>Albums</div>
        <AlbumCards />
      </div>
    </Layout>
  );
}

export default UserDetailsPage;
