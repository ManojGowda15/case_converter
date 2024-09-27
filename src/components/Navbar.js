import React from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
    return (
        <>
            <nav className= {`navbar navbar-expand-lg ${props.mode ? 'navbar-dark bg-dark' : 'navbar-light bg-body-tertiary'}`}>
                <div className="container-fluid">
                    <a className="navbar-brand" style={{fontSize: `30px`,fontWeight: `bold`}} href="/logo">{props.brandName}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarScroll">
                        <ul className="navbar-nav mx-auto my-2 my-lg-1 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px", "fontSize":"20px" }}>
                            {props.navLinks.map((link, index) => (
                                <li className="nav-item mx-4" key={index}>
                                    <a className="nav-link active" aria-current="page" href={link.href}>{link.name}</a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <div className="form-check form-switch m-4" style={{ position: '', left: '10px' }}>
                    <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" checked = {props.mode} onChange={props.toggleMode} />
                        <label className="form-check-label ms-2" htmlFor="flexSwitchCheckDefault">{props.mode ? 'Light Mode' : 'Dark Mode'}</label>
                </div>
            </nav>
        </>
    )
}
Navbar.defaultProps = {
    brandName : 'CASE CONVERTER',
    navLinks : [
        {name : 'Home', href : '/home'},
        {name : 'About', href : '/about'},
        {name : 'Features', href : '/features'}
    ]
};

Navbar.propTypes = {
    brandName : PropTypes.string,
    navLinks : PropTypes.arrayOf(
        PropTypes.shape({
            name : PropTypes.string.isRequired,
            href : PropTypes.string.isRequired
        })
    ),
    mode: PropTypes.bool.isRequired,
    toggleMode: PropTypes.func.isRequired
};