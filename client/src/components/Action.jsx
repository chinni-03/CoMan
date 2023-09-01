import React from "react";
import { Link } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";

function Action () {
    
    return (
        <>
            <Header />
            <div className="parent-div options">
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                        <Link to={'/all-contacts'} style={{textDecoration: 'none'}} className="yellow-btn">Show Contacts</Link>
                    </div>
                </div>
                <div class="row">
                    <div class="col-lg-12 col-sm-12">
                    <Link to={'/add-contact'} style={{textDecoration: 'none'}} className="yellow-btn">Add Contact</Link>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Action;