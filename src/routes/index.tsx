import { Route, Switch } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ResetPassword from "./auth/ResetPassword";
import Home from "./admin/Home";
import Organizations from "./admin/Organizations";

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
        component: Home
    },
    {
        path: "/admin/organizations",
        component: Organizations
    }
];

const Routes = () => {
    return (
        <Switch>
            {routes.map(route => (
                <Route key={route.path} path={route.path} component={route.component} />
            ))}
        </Switch>
    )
}

export default Routes;

