import {
    FETCH_ALBUMS_REQUEST,
    FETCH_ALBUMS_SUCCESS,
    FETCH_ALBUMS_FAILED,
  } from "../types/albumsType";
  
  const initialState = {
    loading: false,
    album: [],
    error: "",
  };
  
  const albumsReducer = (state = initialState, action) => {
    switch (action.type) {
      case FETCH_ALBUMS_REQUEST:
        return {
          ...state,
          loading: true,
        };
  
      case FETCH_ALBUMS_SUCCESS:
        return {
          loading: false,
          album: action.payload,
          error: "",
        };
  
      case FETCH_ALBUMS_FAILED:
        return {
          ...state,
          album: [],
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default albumsReducer;
  