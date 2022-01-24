import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILED } from "../types/postType"
import PostsAPI from '../../api/PostsAPI'

export const fetchPosts = () => {
  return (dispatch) => {
    dispatch(fetchPostRequest)
    PostsAPI.getPosts()
    .then((res) => {
      dispatch(fetchPostSuccess(res.data))
    })
    .catch((err) => {
      dispatch(fetchPostFailed(err.message))
    })
  }
}

export const fetchPostRequest = () => {
  return {
    type: FETCH_POST_REQUEST
  }
}
export const fetchPostSuccess = (posts) => {
  return {
    type: FETCH_POST_SUCCESS,
    payload: posts
  }
}
export const fetchPostFailed = (error) => {
  return {
    type: FETCH_POST_FAILED,
    payload: error
  }
}