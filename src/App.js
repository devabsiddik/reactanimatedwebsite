import React from "react";
import { Switch, Route, BrowserRouter, Redirect } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Service from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
const App = () => {

    // <> </> this is called react fragment;

    return (
        <>

            <BrowserRouter>
                <Navbar />
                <Switch>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/service" component={Service}></Route>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Redirect to="/" />
                </Switch>
                <Footer />
            </BrowserRouter>

        </>
    );
};

export default App;