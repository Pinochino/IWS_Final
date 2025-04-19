import CollectionPage from "@/pages/CollectionPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductDetailPage from "@/pages/ProductDetailPage";
import CartPage from "@/pages/CartPage";

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
]

const privateRouters = []

export {privateRouters, publicRouters};