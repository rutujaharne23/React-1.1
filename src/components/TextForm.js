import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
    }

    const handleClrwClick = () =>{
        let newText = '';
        setText(newText);
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary" onClick={handleClrwClick}>Clear text</button>
        </div>
        <div className='container my-2'>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text}</p>
        </div>
        </>
    )
}
