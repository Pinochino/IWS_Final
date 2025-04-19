import { combineReducers } from "redux";
import { dropdownReducer } from "./DropdownReducer";
import { cartReducer } from "./CartReducer";

const reducers = combineReducers({
    dropdown: dropdownReducer,
    cart: cartReducer,
});
export default reducers;