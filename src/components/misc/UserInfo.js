import React, { useEffect } from "react";
import useUsers from "../../hooks/useUsers";
import { Link } from "react-router-dom";

function UserInfo(props) {
  const { id } = props;

  const { user, getSingleUser, dispatch } = useUsers();

  useEffect(() => {
    getSingleUser(id);

    return () => {
      dispatch({ type: 'RESET' })
    }

  }, [getSingleUser, id, dispatch]);

  return user.loading ? (
    <div className="animate-pulse w-full flex space-x-3 text-sm">
      <div className="h-3 bg-gray-300 w-1/4 rounded-sm"></div>
      <div className="h-3 bg-gray-300 w-2/5 rounded-sm"></div>
    </div>
  ) : (
    <div className="flex space-x-3 text-base text-gray-500">
      <Link to={`/user/${id}`}>
        <p className="hover:underline hover:cursor-pointer">{user.data.name && user.data.name}</p>
      </Link>
      <p>{user.data.company.name && user.data.company.name}</p>
    </div>
  );
}

export default UserInfo;
