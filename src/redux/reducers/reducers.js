import { combineReducers } from "redux";
import { dropdownReducer } from "./DropdownReducer";
import { cartReducer } from "./CartReducer";
import { loadingReducer } from "./LoadingReducer";
import { wishlistReducer } from "./WishlistReducer";
import { userReducer } from "./UserReducer";

const reducers = combineReducers({
    dropdown: dropdownReducer,
    cart: cartReducer,
    loading: loadingReducer,
    wishlist: wishlistReducer,
    user: userReducer,
});
export default reducers;