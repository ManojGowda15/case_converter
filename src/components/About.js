import React from 'react'

export default function About() {
  return (
    <>
    <div className="container ">
                <section class="about-section">
                    <div class="container">
                        <h1 className="heading" >About Case Converter</h1>
                        <p className="Content" >
                            Case Converter is a simple web application designed to help users easily change the case of their text.
                            Whether you need to convert text to Uppercase, Lowercase, CamelCase, or Sentence Case, this tool does it for you
                            instantly. It helps save time and effort when dealing with large text files or repetitive case conversions.
                        </p>
                        <h2 className="heading">Key Features</h2>
                        <ul>
                            <li className="Content" >Convert text to Uppercase, Lowercase, CamelCase, and Sentence Case.</li>
                            <li className="Content" >Quick and easy to use interface.</li>
                            <li className="Content" >Free and accessible to everyone.</li>
                            <li className="Content" >Responsive design for optimal experience on all devices.</li>
                        </ul>
                    </div>
                </section>
                <div className="container d-flex justify-content-center">
                    <button type="button"  class="btn btn-dark "></button>
                </div>
            </div>
    </>
  )
}
