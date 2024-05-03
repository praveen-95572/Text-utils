import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpperClick = () => {
       setText(text.toUpperCase());
       props.showAlert("Converted to uppercase!", "success");
    }
    const handlelowerClick = () => {
        setText(text.toLowerCase());
        props.showAlert("Converted to lowercase!", "success");
     }

     const handleClearText = () => {
        setText('');
        props.showAlert("Text cleared!", "success");
     }

     const handleCopy = () => {
        navigator.clipboard.writeText(text);
        props.showAlert("Copied to clipboard!", "success");
     }

     const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
     }
     
     const handleReverseText = () => {
        let splitString = text.split(""); // var splitString = "hello".split("");
        let reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
        let joinArray = reverseArray.join("");
        props.showAlert("Reversed text!", "success");
        setText(joinArray);
     }

    const handleOnChange = (event) => {
        setText(event.target.value);
        props.showAlert("Changes detected", "success");
    }
    const [text, setText] = useState('');

    return (
        <>
    <div className='container'  style={{color:props.mode === 'light' ? props.modeColor.light.color :props.modeColor.dark.color}}>
        <h2>{props.heading}</h2>
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} rows="8" value={text} placeholder='Enter text here'
            style={{backgroundColor:props.mode === 'dark' ? 'grey' :props.modeColor.light.backgroundColor,
            color:props.mode === 'light' ? 'black' : 'white'}}></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handlelowerClick}>Convert To Lowercase</button>
        <button className="btn btn-primary mx-2" onClick={handleUpperClick}>Convert To Uppercase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearText}>Clear Text</button>
        <button className="btn btn-primary mx-2" onClick={handleReverseText}>Reverse Text</button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>Copy Text</button>
        <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className='container my-3'  style={{color:props.mode === 'light' ? props.modeColor.light.color :props.modeColor.dark.color}}>
       <h1>Your text summary</h1> 
       <p>{text.split(" ").length} words and {text.length} characters</p>
       <p>{0.008*text.split(" ").length} Minutes read</p>
       <h2>Preview</h2>
       <p>{text.length>0?text:"Enter something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
