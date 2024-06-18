import { combineReducers, createStore } from "redux";
import ReducerUser from "./reducers/B1";
import Reducerproduct from "./reducers/B3";
import ReducerCount from "./reducers/B4";
import ReducerRandom from "./reducers/B5";
import ReducerCompany from "./reducers/B6";
import ReducerTheme from "./reducers/B7";
import themeReducer from "./reducers/B8";
const rootUser = combineReducers({
    ReducerUser,Reducerproduct,ReducerCount,ReducerRandom,ReducerCompany,ReducerTheme,themeReducer
});
const store = createStore(rootUser);
export default store;