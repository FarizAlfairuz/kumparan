import { useCallback } from "react";
import useAPI from "./useAPI";
import PhotosAPI from "../api/PhotosAPI";

function usePhoto() {
  const [photo, dispatch] = useAPI();

  const getSinglePhoto = useCallback((id) => {
    dispatch({ type: "RESET" });
    PhotosAPI.getSinglePhoto(id)
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: "FETCH_FAILED", payload: err.message });
      });
  }, [dispatch])

  return { photo, getSinglePhoto };
}

export default usePhoto;
