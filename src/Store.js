import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import bibleReducer from "./Pages/Bible/ComponetsBible/Redux/reducers/bible";
import user from "./Pages/TrybeWallet/redux/reducers/user";
import wallet from "./Pages/TrybeWallet/redux/reducers/wallet";

const store = createStore(combineReducers({ bibleReducer, user, wallet }), applyMiddleware(thunk));

export default store;
