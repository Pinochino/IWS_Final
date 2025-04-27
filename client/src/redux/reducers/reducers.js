import { combineReducers } from "redux";
import { dropdownReducer } from "./DropdownReducer";
import { cartReducer } from "./CartReducer";
import { loadingReducer } from "./LoadingReducer";
import { wishlistReducer } from "./WishlistReducer";
import { userReducer } from "./UserReducer";
import { productReducer } from "./ProductReducer";
import { quantityReducer } from "./QuantityReducer";
import { paymentReducer } from "./PaymentReducer";

const reducers = combineReducers({
    dropdown: dropdownReducer,
    cart: cartReducer,
    loading: loadingReducer,
    wishlist: wishlistReducer,
    product: productReducer,
    user: userReducer,
    quantity: quantityReducer,
    payment: paymentReducer,
});
export default reducers;