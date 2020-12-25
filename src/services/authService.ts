import { LoginArgs, AuthContextValue } from "Entity";
import { authCredentials } from "Constants";

const login = (
    loginArgs: LoginArgs,
    contextValue: AuthContextValue
) => {
    const { isAuthorized, setIsAuthorized } = contextValue;
    if (!isAuthorized && areCredentialsValid(loginArgs)) {
        setIsAuthorized(true);
    }
};

const logout = (contextValue: AuthContextValue) => {
    const { isAuthorized, setIsAuthorized } = contextValue;
    if (isAuthorized) {
        setIsAuthorized(false);
    }
};

const areCredentialsValid = (loginArgs: LoginArgs) => {
    for (let credentialName in loginArgs) {
        if (
            loginArgs[credentialName] !=
            authCredentials[credentialName]
        ) {
            return false;
        }
    }
    return true;
};

export default { login, logout };
