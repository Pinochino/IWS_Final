import CollectionPage from "@/pages/CollectionPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import CartPage from "@/pages/CartPage";
import WishlistPage from "@/pages/WishlistPage";

const publicRouters = [
    {
        path: '/',
        component: HomePage,
    },
    {
        path: '/login',
        component: LoginPage,
    },
    {
        path: '/collection',
        component: CollectionPage,
    },
    {
        path: '/product',
        component: ProductDetailPage,
    },
    {
        path: '/cart',
        component: CartPage,
    },
    {
        path: '/wishlist',
        component: WishlistPage,
    },
]

const privateRouters = []

export {privateRouters, publicRouters};