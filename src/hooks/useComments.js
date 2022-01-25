import { useCallback } from "react";
import PostsAPI from "../api/PostsAPI";
import useAPI from "./useAPI";

function useComments() {
  const [comments, dispatch] = useAPI();

  const getComments = useCallback((id) => {
    dispatch({ type: 'RESET' })
    PostsAPI.getComments(id)
    .then((res) => {
      dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
    })
    .catch((err) => {
        dispatch({ type: 'FETCH_FAILED', payload: err.message })
    })
}, [dispatch])

  return { comments, getComments, dispatch };
}

export default useComments;
