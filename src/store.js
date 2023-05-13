import { createStore, applyMiddleware } from "redux";
import Reducer from "./Reducer";
import middleware from "./middleware";

const store = createStore(Reducer, applyMiddleware(middleware));
export default store;
