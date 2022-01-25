import { useCallback } from "react";
import PhotosAPI from "../api/PhotosAPI";
import useAPI from "./useAPI";


function useAlbum() {
  const [album, dispatch] = useAPI();

  const getSingleAlbum = useCallback((id) => {
    dispatch({ type: 'RESET' })
    PhotosAPI.getSingleAlbum(id)
    .then((res) => {
        dispatch({ type: 'FETCH_SUCCESS', payload: res.data })
      })
      .catch((err) => {
          dispatch({ type: 'FETCH_FAILED', payload: err.message })
      })
  }, [dispatch])

  return { album, getSingleAlbum, dispatch };
}

export default useAlbum;
