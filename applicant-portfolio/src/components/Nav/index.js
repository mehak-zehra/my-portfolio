import React from "react";

function Nav(props) {
    
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Portfolio</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        {props.options.map((menu, i) => (
                            <li className="nav-item active">
                                <a className="nav-link" onClick={() => props.change(props.options[i])}>{menu.label}<span className="sr-only">(current)</span></a>
                            </li>
                        ))}
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Nav;