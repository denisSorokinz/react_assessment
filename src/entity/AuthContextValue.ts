interface AuthContextValue {
    isAuthorized: boolean;
    setIsAuthorized: React.Dispatch<React.SetStateAction<boolean>>;
}

export default AuthContextValue;
