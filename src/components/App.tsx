import React, { useState } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { AuthProvider } from "Contexts";
import { Main, News, Profile, Login } from "Screens";
import Header from "./Header";
import PrivateRoute from "./PrivateRoute";

const App: React.FC = () => {
    const [isAuthorized, setIsAuthorized] = useState(false);
    return (
        <Router>
            <Header />
            <AuthProvider value={{ isAuthorized, setIsAuthorized }}>
                <main>
                    <Route exact path="/" component={Main} />
                    <Route exact path="/news" component={News} />
                    <PrivateRoute
                        path="/profile"
                        redirectPath="/login"
                        component={Profile}
                        isActive={isAuthorized}
                    />
                    <Route exact path="/login" component={Login} />
                </main>
            </AuthProvider>
        </Router>
    );
};

export default App;
