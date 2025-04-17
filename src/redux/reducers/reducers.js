import { combineReducers } from "redux";
import { dropdownReducer } from "./DropdownReducer";

const reducers = combineReducers({
    dropdown: dropdownReducer,
    
});
export default reducers;