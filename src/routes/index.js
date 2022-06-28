import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";

import Books from "../pages/books";
import Home from "../pages/home";
import Characters from "../pages/characters";
import Infos from "../pages/infos";
import Spells from "../pages/spells";
import Students from "../pages/students";

const RouteNavigation = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/books" element={<Books />} />
                    <Route exact path="/characters" element={<Characters />} />
                    <Route exact path="/spells" element={<Spells />} />
                    <Route exact path="/students" element={<Students />} />
                    <Route exact path="/infos" element={<Infos />} />
                </Routes>
            </Router>
        </>
    );
};


export default RouteNavigation;