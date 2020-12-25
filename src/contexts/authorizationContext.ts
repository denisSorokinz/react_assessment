import { createContext } from "react";
import { AuthContextValue } from "Entity";

const AuthContext = createContext<AuthContextValue | null>(null);
const AuthProvider = AuthContext.Provider;
const AuthConsumer = AuthContext.Consumer;

export { AuthContext, AuthProvider, AuthConsumer };
