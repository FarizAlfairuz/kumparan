import { FETCH_ALBUMS_REQUEST, FETCH_ALBUMS_SUCCESS, FETCH_ALBUMS_FAILED } from "../types/albumsType"
import PhotosAPI from "../../api/PhotosAPI"

export const fetchAlbums = (id) => {
  return (dispatch) => {
    dispatch(fetchAlbumsRequest)
    PhotosAPI.getUserAlbums(id)
    .then((res) => {
      dispatch(fetchAlbumsSuccess(res.data))
    })
    .catch((err) => {
      dispatch(fetchAlbumsFailed(err.message))
    })
  }
}

export const fetchAlbumsRequest = () => {
  return {
    type: FETCH_ALBUMS_REQUEST
  }
}
export const fetchAlbumsSuccess = (post) => {
  return {
    type: FETCH_ALBUMS_SUCCESS,
    payload: post
  }
}
export const fetchAlbumsFailed = (error) => {
  return {
    type: FETCH_ALBUMS_FAILED,
    payload: error
  }
}