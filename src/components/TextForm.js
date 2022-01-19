import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick = () =>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Coverted to uppercase", "success");
    }

    const handleLowClick = () =>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Coverted to lowercase", "success");
    }

    const handleClrwClick = () =>{
        let newText = '';
        setText(newText);
        props.showAlert("Content cleared", "success");
    }

    const handleExtraSpaces = () =>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra space removed", "success");
    }

    const handleCopy = () =>{
        let text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Conted copied", "success");
    }

    const handleOnChange = (event) =>{
        setText(event.target.value);
    }
    const [text, setText] = useState('');
    
    return (
        <>
        <div className='container' style={{color: props.mode==='dark'?'white':'#172b49'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3" style={{color: props.mode==='dark'?'white':'#172b49'}}>
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'white':'#172b49', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="6"></textarea>
            </div>
            <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>
            <button className="btn btn-primary mx-1" onClick={handleLowClick}>Convert to Lowercase</button>
            <button className="btn btn-primary mx-1" onClick={handleClrwClick}>Clear text</button>
            <button className="btn btn-primary mx-1" onClick={handleCopy}>Copy text</button>
            <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove extra spaces</button>
        </div>
        <div className='container my-2' style={{color: props.mode==='dark'?'white':'#172b49'}}>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes read</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter somthing in the textbox above to preview it here"}</p>
        </div>
        </>
    )
}
