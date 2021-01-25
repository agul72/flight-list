import React from "react";
import { Switch, Route, Redirect } from 'react-router-dom';
import {CreatePage} from "./pages/CreatePage";
import AuthPage from "./pages/AuthPage";
import { FlightPage } from "./pages/FlightPage";

export const useRoutes = isAuthenticated => {
    if (isAuthenticated) {
        return (
            <Switch>
                <Route path={'/create'} component={CreatePage} />
                <Route path='/list' component={FlightPage} />
                <Redirect to={'/list'} />
            </Switch>
        )
    }

    return (
        <Switch>
            <Route to={'/'} component={AuthPage} />
            <Redirect to={'/'} />
        </Switch>
    )
}
