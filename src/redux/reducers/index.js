import { combineReducers } from "redux";
import userReducer from "./user.reducer";
import gifReducer from "./gif.reducer";

const rootReducer = combineReducers({
    userReducer,
    gifReducer,
});

export default rootReducer