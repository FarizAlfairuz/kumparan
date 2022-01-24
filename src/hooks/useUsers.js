import { useCallback } from "react";
import UserAPI from "../api/UserAPI";
import useAPI from "./useAPI";

function useUsers() {
  const [user, dispatch] = useAPI();

  const getSingleUser = useCallback((id) => {
    dispatch({ type: 'RESET' })
    UserAPI.getSingleUser(id)
    .then((res) => {
      dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
    })
    .catch((err) => {
        dispatch({ type: 'FETCH_FAILED', payload: err.message })
    })
  }, [dispatch])

  return { user, getSingleUser, dispatch };
}

export default useUsers;
