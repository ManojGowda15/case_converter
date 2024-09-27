import React from 'react';
import PropTypes from 'prop-types';

export default function Footer(props) {

    const footerStyle = {
        backgroundColor: props.mode ? '#252424' : '#f8f9fa',
        color: props.mode ? 'white' : 'black'
    };

    return (
        <footer className="text-center text-lg-start"   style={footerStyle}>
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">{props.title}</h5>
                        <p>
                            {props.desc}
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">{props.follow}</h5>
                        <ul className="list-unstyled d-flex justify-content-center">
                            {props.socialLinks.map((link, index) => (
                                <li className="me-3" key={index}>
                                    <a href={link.href} target="_blank" rel="noopener noreferrer" style={{ color: props.mode ? 'white' : 'black' }}>
                                        <i className={link.icon}></i> {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={footerStyle}>
                © {new Date().getFullYear()} Case Converter. All Rights Reserved.
            </div>
        </footer>
    );
}

Footer.defaultProps = {
    title: 'CASE CONVERTER',
    desc: 'Transform your text with ease using our online case converter.',
    follow: 'Follow Us',
    socialLinks: [
        { name: 'Facebook', href: 'https://facebook.com', icon: 'fab fa-facebook-f' },
        { name: 'Twitter', href: 'https://twitter.com', icon: 'fab fa-twitter' },
        { name: 'Instagram', href: 'https://instagram.com', icon: 'fab fa-instagram' },
        { name: 'LinkedIn', href: 'https://linkedin.com', icon: 'fab fa-linkedin-in' }
    ]
};

Footer.propTypes = {
    socialLinks: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string.isRequired,
            href: PropTypes.string.isRequired,
            icon: PropTypes.string.isRequired
        })
    ),
    mode: PropTypes.bool
};