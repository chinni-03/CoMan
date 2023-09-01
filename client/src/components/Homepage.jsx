import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Homepage () {
    return (
        <>
            <Header />
            <div className="parent-div homepage">
                <div className="caption">
                    <p>Manage your contacts the <span>right</span> way.</p>
                    <Link to={'/action'} className="nav-link yellow-btn get-started">Get Started</Link>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Homepage;