import React from 'react';
import PropTypes from 'prop-types';

export default function About(props) {
    return (
        <>
            <div className="container ">
                <section class="about-section">
                    <div class="container">
                        <h1 className="heading" >{props.about1}</h1>
                        <p className="Content" >
                            {props.content}
                        </p>
                        <h2 className="heading">{props.feature}</h2>
                        <ul>
                            <li className="Content" >{props.feat1}</li>
                            <li className="Content" >{props.feat2}</li>
                            <li className="Content" >{props.feat3}</li>
                            <li className="Content" >{props.feat4}</li>
                        </ul>
                    </div>
                </section>
                <div className="container d-flex justify-content-center">
                    <button type="button" class="btn btn-dark "></button>
                </div>
            </div>
        </>
    )
}
About.defaultProps = {
    about1: 'About Case Converter',
    content: 'Case Converter is a simple web application designed to help users easily change the case of their text. Whether you need to convert text to Uppercase, Lowercase, CamelCase, or Sentence Case, this tool does it for you instantly.It helps save time and effort when dealing with large text files or repetitive case conversions.',
    feature: 'Key Features',
    feat1: 'Convert text to Uppercase, Lowercase, CamelCase, and Sentence Case.',
    feat2: 'Quick and easy to use interface.',
    feat3: 'Free and accessible to everyone.',
    feat4: 'Responsive design for optimal experience on all devices.',
};

About.propTypes = {
about1 : PropTypes.string,
content : PropTypes.string,
feature : PropTypes.string,
feat1 : PropTypes.string,
feat2 : PropTypes.string,
feat3 : PropTypes.string,
feat4 : PropTypes.string,
};