import React, { FormEvent, useState, useContext } from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";
import { StaticContext } from "react-router";
import { authService } from "Services";
import { LoginArgs } from "Entity";
import { AuthContext, AuthConsumer } from "Contexts";

interface LoginRouteProps {
    successRedirectPath?: string;
}

const Login: React.FC<
    RouteComponentProps<{}, StaticContext, LoginRouteProps>
> = (routeProps) => {
    const successRedirectPath =
        routeProps.location.state.successRedirectPath;
    return (
        <AuthConsumer>
            {(authState) =>
                (() => {
                    if (authState!.isAuthorized) {
                        if (successRedirectPath) {
                            return (
                                <Redirect to={successRedirectPath} />
                            );
                        }
                        return <LogoutForm />;
                    }
                    return <LoginForm />;
                })()
            }
        </AuthConsumer>
    );
};

const LoginForm: React.FC = () => {
    const authContextValue = useContext(AuthContext)!;
    const [formState, setFormState] = useState<LoginArgs>({
        login: "",
        password: 0,
    });
    const onFormFieldChange = (
        ev: React.ChangeEvent<HTMLInputElement>,
        fieldName: string
    ) => {
        const val = ev.currentTarget.value;
        setFormState({ ...formState, [fieldName]: val });
    };
    const onLoginSubmit = (ev: FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
        authService.login(formState, authContextValue);
    };
    return (
        <form method="POST" onSubmit={onLoginSubmit}>
            <input
                name="login"
                type="text"
                value={formState.login}
                onChange={(ev) => onFormFieldChange(ev, "login")}
            />
            <input
                name="password"
                type="password"
                value={formState.password ? formState.password : ""}
                onChange={(ev) => onFormFieldChange(ev, "password")}
            />
            <input type="submit" value="login" />
        </form>
    );
};

const LogoutForm: React.FC = () => {
    const authContextValue = useContext(AuthContext)!;
    const onLogoutSubmit = () => authService.logout(authContextValue);

    return (
        <form method="POST" onSubmit={onLogoutSubmit}>
            <input type="submit" value="logout" />
        </form>
    );
};

export default Login;
