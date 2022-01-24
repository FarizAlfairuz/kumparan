import { FETCH_USER_REQUEST, FETCH_USER_SUCCESS, FETCH_USER_FAILED } from "../types/userType"
import UserAPI from '../../api/UserAPI'

export const fetchUsers = () => {
  return (dispatch) => {
    dispatch(fetchUserRequest)
    UserAPI.getUsers()
    .then((res) => {
      dispatch(fetchUserSuccess(res.data))
    })
    .catch((err) => {
      dispatch(fetchUserFailed(err.message))
    })
  }
}

export const fetchUserRequest = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}
export const fetchUserSuccess = (posts) => {
  return {
    type: FETCH_USER_SUCCESS,
    payload: posts
  }
}
export const fetchUserFailed = (error) => {
  return {
    type: FETCH_USER_FAILED,
    payload: error
  }
}