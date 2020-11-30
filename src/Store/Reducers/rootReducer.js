import { combineReducers } from "redux";
import usersReducer from "./usersReducer";
import newsReducer from "./newsReducer";
import appReducer from "./appReducer";

const rootReducer = combineReducers({
  users: usersReducer,
  news: newsReducer,
  app: appReducer,
});

export default rootReducer;
