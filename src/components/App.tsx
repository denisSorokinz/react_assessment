import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Main, News } from "Screens";
import Header from "./Header";

const App: React.FC = () => {
    return (
        <Router>
            <Header />
            <main>
                <Route exact path="/" component={Main} />
                <Route exact path="/news" component={News} />
                {/* <PrivateRoute path="/profile/" component={Main} isActive={isAuthorized} /> */}
            </main>
        </Router>
    );
};

export default App;
