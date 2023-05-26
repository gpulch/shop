import { createStore } from "redux";
import basketReducer from "./reducers/basketReducer";

const store = createStore(basketReducer);

export default store;
