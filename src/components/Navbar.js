import React from 'react';


export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/logo">CASE CONVERTER</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav mx-auto my-2 my-lg-1 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
                            <li className="nav-item mx-4">
                                <a className="nav-link active" aria-current="page" href="/home">Home</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="/about">About</a>
                            </li>
                            <li className="nav-item mx-4">
                                <a className="nav-link" href="/features">Features</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="form-check form-switch m-4" style={{ position: '', left: '10px' }}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
                        <label className="form-check-label ms-2" htmlFor="flexSwitchCheckDefault">Dark</label>
                </div>
            </nav>
        </>
    )
}
