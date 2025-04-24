import CollectionPage from "@/pages/CollectionPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import CartPage from "@/pages/CartPage";
// import WishlistPage from "@/pages/WishlistPage";
import RegisterPage from "@/pages/RegisterPage";
import PaymentPage from "@/pages/PaymentPage";

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
        path: '/register',
        component: RegisterPage,
    },
    {
        path: '/payment',
        component: PaymentPage,
    },
    {
        path: '/collection/:heading',
        component: CollectionPage,
    },
    {
        path: '/product/:id',
        component: ProductDetailPage,
    },
    {
        path: '/cart',
        component: CartPage,
    },
    // {
    //     path: '/wishlist',
    //     component: WishlistPage,
    // },
]

const privateRouters = []

export {privateRouters, publicRouters};