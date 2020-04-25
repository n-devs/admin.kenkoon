import { LoginPage, RegisterPage } from "@kenkoon/pages";

export const routePublic = [
    {
        exact: true,
        path: "/",
        component: LoginPage
    },
    {
        exact: false,
        path: "/login",
        component: LoginPage
    },
    {
        exact: false,
        path: "/register",
        component: RegisterPage
    }
]