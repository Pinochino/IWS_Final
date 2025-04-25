import { combineReducers } from "redux";
import { userReducer } from "./UserReducer";
import { productReducer } from "./ProductReducer";


const reducer = combineReducers({
    product: productReducer,
    user: userReducer,
})
export default reducer;