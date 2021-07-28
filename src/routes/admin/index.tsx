import { Route } from "react-router-dom";

import Home from "./Home";

import Organizations from "./Organizations";
import OrganizationEdit from "./Organizations/Edit";

import Systems from "./Systems";
import SystemsEdit from "./Systems/Edit";

import Applications from "./Applications";

type TMatch = {
    url: string,
    path: string,
    params: object
}

type TAdminRoutes = {
    match: TMatch
}

const AdminRoutes = ({ match }: TAdminRoutes): JSX.Element => {

    const url: string = match.url;

    const getUrl = (path: string): string => `${url}${path}`;

    return (
        <>
            <Route path={getUrl("/")} component={Home} exact />
            <Route path={getUrl("/applications")} component={Applications} />

            <Route path={getUrl("/organizations")} component={Organizations} exact />
            <Route path={getUrl("/organizations/edit/:id")} component={OrganizationEdit} />

            <Route path={getUrl("/systems")} component={Systems} exact />
            <Route path={getUrl("/systems/create")} component={SystemsEdit} />
            <Route path={getUrl("/systems/edit/:id")} component={SystemsEdit} />
        </>
    );

}

export default AdminRoutes;