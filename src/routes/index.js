import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import Books from "../pages/books";
import Home from "../pages/home";

const RouteNavigation = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/books" element={<Books />} />
                </Routes>
            </Router>
        </>
    );
};


export default RouteNavigation;