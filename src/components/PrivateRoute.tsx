import React from "react";
import { Route, Redirect } from "react-router-dom";

interface PrivateRouteProps {
    path: string;
    redirectPath: string;
    component: React.FC;
    isActive: boolean;
    exact?: boolean;
}

const PrivateRoute = ({
    path,
    redirectPath,
    component: Component,
    isActive,
    exact: isExact = false,
}: PrivateRouteProps) => (
    <Route
        exact={isExact}
        path={path}
        render={() =>
            isActive ? (
                <Component />
            ) : (
                <Redirect
                    to={{
                        pathname: redirectPath,
                        state: { successRedirectPath: path },
                    }}
                />
            )
        }
    />
);
export default PrivateRoute;
