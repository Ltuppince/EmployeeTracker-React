import React from "react";
import "./style.css";


function Navbar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg fixed-top">
                <a className="navbar-brand" href="/">Employee Directory</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">

                       


                    </ul>
                    <form className="form-inline my-2 my-lg-0">
                        <input className="form-control mr-sm-2" type="search" placeholder="Search by name" aria-label="Search" />
                        <button className="btn srchBtn my-2 my-sm-0" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>
    );
}


export default Navbar;