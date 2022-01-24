import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILED,
} from "../types/postType";

const initialState = {
  loading: false,
  posts: [],
  error: "",
};

const postReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };

    case FETCH_POST_SUCCESS:
      return {
        loading: false,
        posts: action.payload,
        error: "",
      };

    case FETCH_POST_FAILED:
      return {
        ...state,
        posts: [],
        error: action.payload,
      };
    default:
      return state;
  }
};


export default postReducer