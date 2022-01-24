import { FETCH_POST_DETAILS_REQUEST, FETCH_POST_DETAILS_SUCCESS, FETCH_POST_DETAILS_FAILED } from "../types/postDetailsType"
import PostsAPI from '../../api/PostsAPI'

export const fetchPostDetailss = () => {
  return (dispatch) => {
    dispatch(fetchPostDetailsRequest)
    PostsAPI.getPostDetailss()
    .then((res) => {
      dispatch(fetchPostDetailsSuccess(res.data))
    })
    .catch((err) => {
      dispatch(fetchPostDetailsFailed(err.message))
    })
  }
}

export const fetchPostDetailsRequest = () => {
  return {
    type: FETCH_POST_DETAILS_REQUEST
  }
}
export const fetchPostDetailsSuccess = (posts) => {
  return {
    type: FETCH_POST_DETAILS_SUCCESS,
    payload: posts
  }
}
export const fetchPostDetailsFailed = (error) => {
  return {
    type: FETCH_POST_DETAILS_FAILED,
    payload: error
  }
}