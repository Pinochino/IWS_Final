import CollectionPage from "@/pages/CollectionPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import ProductDetailPage from "@/pages/ProductDetailPage";

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

]

const privateRouters = []

export {privateRouters, publicRouters};