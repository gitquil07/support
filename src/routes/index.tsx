import { Route, Switch } from "react-router-dom";
import Login from "./auth/Login";
import Register from "./auth/Register";
import ResetPassword from "./auth/ResetPassword";

const Routes = () => {
    return (
        <Switch>
            <Route path="/login" component={Login} exact />
            <Route path="/reset-password" component={ResetPassword} exact />
            <Route path="/register" component={Register} exact />
        </Switch>
    )
}

export default Routes;