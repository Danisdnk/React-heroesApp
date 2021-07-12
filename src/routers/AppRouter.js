import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { loginScreen } from '../components/login/loginScreen';
import { MarvelScreen } from '../components/Marvel/MarvelScreen';
import { Navbar } from '../components/ui/Navbar';
export const AppRouter = () => {
    return (
        <Router>
            <div>
                <Navbar />

                <Switch>

                    <Route exact path="/login" component={loginScreen}/>

                    <Route exact path="/" component={MarvelScreen}/>


                </Switch>
            </div>
        </Router>
    );
}
