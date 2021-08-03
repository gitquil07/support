import { Route, Switch } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ResetPassword from "./auth/ResetPassword";
import { Main } from "components/General/Main";
import { SideBar } from "components/General";
import { NavBar } from "components/General";
import AdminRoutes from "./admin";



const routes = [
    {
        path: "/login",
        component: Login
    },
    {
        path: "/reset-password",
        component: ResetPassword
    },
    {
        path: "/register",
        component: Register
    },
    {
        path: "/admin",
        component: AdminRoutes
    },
];

const Routes = () => {
    return (
        <>
            <NavBar />
            <SideBar />
            <Main>
                <Switch>
                    {routes.map(route => (
                        <Route key={route.path} path={route.path} component={route.component} />
                    ))}
                </Switch>
            </Main>
        </>
    )
}

export default Routes;

