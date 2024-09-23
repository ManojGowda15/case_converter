import React from 'react';

export default function Footer() {
    return (
        <footer className="bg-body-tertiary text-center text-lg-start">
            <div className="container p-4">
                <div className="row">
                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">CASE CONVERTER</h5>
                        <p>
                            Transform your text with ease using our online case converter.
                        </p>
                    </div>

                    <div className="col-lg-6 col-md-12 mb-4 mb-md-0">
                        <h5 className="text-uppercase">Follow Us</h5>
                        <ul className="list-unstyled d-flex justify-content-center">
                            <li className="me-3">
                                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                                    <i className="fab fa-facebook-f"></i> Facebook
                                </a>
                            </li>
                            <li className="me-3">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                                    <i className="fab fa-twitter"></i> Twitter
                                </a>
                            </li>
                            <li className="me-3">
                                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                                    <i className="fab fa-instagram"></i> Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-dark">
                                    <i className="fab fa-linkedin-in"></i> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="text-center p-3" style={{ backgroundColor: '#f8f9fa' }}>
                © {new Date().getFullYear()} Case Converter. All Rights Reserved.
            </div>
        </footer>
    );
}