import {
  FETCH_POST_DETAILS_REQUEST,
  FETCH_POST_DETAILS_SUCCESS,
  FETCH_POST_DETAILS_FAILED,
} from "../types/postDetailsType";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const postDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_DETAILS_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_POST_DETAILS_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };

    case FETCH_POST_DETAILS_FAILED:
      return {
        ...state,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

export default postDetailsReducer;
