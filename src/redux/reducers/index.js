import { combineReducers } from "redux";
import postReducer from "./postReducer";
import userReducer from "./userReducer";
import postDetailsReducer from "./postDetailsReducer";

const rootReducer = combineReducers({
    post: postReducer,
    user: userReducer,
    postDetail: postDetailsReducer
})

export default rootReducer