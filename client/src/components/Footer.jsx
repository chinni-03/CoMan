import React from "react";
import { Link } from "react-router-dom";

function Footer () {
    return (
        <>
            <div className="container-fluid bg-dark footer">
                <footer className="d-flex flex-wrap justify-content-between align-items-center mb-4 mt-3">
                    <p className="col-md-4 mb-0 white">© 2023 CoMan, Inc - by V Harshini</p>
                    <Link className="col-md-4 d-flex align-items-center justify-content-center mb-3 mb-md-0 me-md-auto navbar-brand" to={ '/' }><span>Co</span>Man</Link>
                </footer>
            </div>
        </>
    )
}

export default Footer;