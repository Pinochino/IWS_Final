import CollectionPage from "@/pages/CollectionPage";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";

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
    }
]

const privateRouters = []

export {privateRouters, publicRouters};