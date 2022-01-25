import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import postDetailsReducer from "./postDetailsReducer";
import albumsReducer from "./albumsReducer";

const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer,
    postDetail: postDetailsReducer,
    album: albumsReducer
})

export default rootReducer