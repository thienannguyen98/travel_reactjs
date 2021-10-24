import React, { useCallback, useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Explore from './components/Explore/Explore';
import Booking from './components/Booking/Booking';
import Cart from './components/Cart/Cart';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";

function App() {

    var [data, setData] = useState({})

    const buy = useCallback(
        (e) => {
            setData(e);
        }, []);

    return (
        <Router>
            <Header />
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/Contact">
                    <Contact />
                </Route>
                <Route path="/Explore">
                    <Explore />
                </Route>
                <Route path="/Booking">
                    <Booking buy={buy} />
                </Route>
                <Route path="/Cart">
                    <Cart data={data} />
                </Route>
            </Switch>
        </Router>
    );
}

export default App;
