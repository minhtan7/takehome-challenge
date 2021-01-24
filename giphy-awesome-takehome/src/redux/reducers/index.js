import { combineReducers } from "redux";
import authReducer from "./auth.reducer";
import gifReducer from "./gif.reducer";

export default combineReducers({
  auth: authReducer,
  gif: gifReducer,
});
