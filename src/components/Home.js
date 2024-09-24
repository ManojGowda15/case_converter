import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Home(props) {

    const handleUpper = () => {
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLower = () => {
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleSentence = () => {
        const sentences = text.split('.').map(sentence => {
            const trimmed = sentence.trim();
            return trimmed.charAt(0).toUpperCase() + trimmed.slice(1);
        });
        const newText = sentences.join('. ').trim();
        setText(newText);
    };

    const handleCamel = () => {
        const words = text.split(/[-_ ]+/);
        const newText = words.map((word, index) => {
            if (index === 0) {
                return word.toLowerCase();
            }
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        }).join('');
        setText(newText);
    };

    const handleExtraSpace = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    };

    const handleClear = () => {
        let newText = "";
        setText(newText);
    };

    const handleCopy = () => {
        let textarea = document.getElementById("exampleFormControlTextarea1");
        textarea.select();
        navigator.clipboard.writeText(textarea.value)
    };

    const handleChange = (event) => {
        setText(event.target.value);
    };

    const [text, setText] = useState("Enter your text")
    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="exampleFormControlTextarea1" className="form-label" style={{ fontSize: `25px`, fontWeight: `bold` }}>{props.labelText}</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="10" onChange={handleChange} value={text}></textarea>
                </div>
            </div>

            <div className="container">
                <button type="button" className="btn btn-light ms-3" style={{ fontSize: `18px` }} onClick={handleUpper}>{props.btnUpr}</button>
                <button type="button" className="btn btn-light ms-3" style={{ fontSize: `18px` }} onClick={handleLower}>{props.btnLwr}</button>
                <button type="button" className="btn btn-light ms-3" style={{ fontSize: `18px` }} onClick={handleSentence}>{props.btnSentence}</button>
                <button type="button" className="btn btn-light ms-3" style={{ fontSize: `18px` }} onClick={handleCamel}>{props.btnCamel}</button>
                <button type="button" className="btn btn-light ms-3" style={{ fontSize: `18px` }} onClick={handleExtraSpace}>{props.btnExtraSpace}</button>
                <button type="button" className="btn btn-light ms-3" style={{ fontSize: `18px` }} onClick={handleClear}>{props.btnClear}</button>
                <button type="button" className="btn btn-light ms-3" style={{ fontSize: `18px` }} onClick={handleCopy}>{props.btnCopy}</button>
            </div>

            <div className="container my-4">
                <h2 className="heading">Text Summary</h2>
                <p className="Content">There are {text.split(/\s+/).filter(word => /[a-zA-Z]+/.test(word)).length} words and {text.length} characters.</p>
                {(() => {
                    const words = text.split(/\s+/).filter(word => /[a-zA-Z]/.test(word));
                    const readTimeSeconds = 0.192 * words.length;
                    const readTimeMinutes = (readTimeSeconds / 60).toFixed(2);
                    return (
                        <p className="Content">It takes {readTimeSeconds.toFixed(2)} seconds or {readTimeMinutes} minutes to read this content.</p>
                    );
                })()}

                <h2 className="heading">Preview</h2>
                <textarea className="form-control" id="myBox" rows="5" value={text} readOnly style={{ width: '100%', resize: 'none' }}></textarea>
            </div>

        </>
    )
}

Home.defaultProps = {
    labelText: 'CONVERT CASE',
    btnUpr: 'UPPER CASE',
    btnLwr: 'lower case',
    btnSentence: 'Sentence case',
    btnExtraSpace: 'Extra Space',
    btnCamel: 'camelCase',
    btnClear: 'Clear Text',
    btnCopy: 'Copy Text',

};

Home.propTypes = {
    labelText: PropTypes.string,
    btnUpr: PropTypes.string,
    btnLwr: PropTypes.string,
    btnSentence: PropTypes.string,
    btnExtraSpace: PropTypes.string,
    btnCamel: PropTypes.string,
    btnCopy: PropTypes.string,
}