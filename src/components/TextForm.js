import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    // console.log("handel Upper Case was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Text is converted to uppercase!","success");
  };

  const handleLoClick = () => {
    // console.log("handel Upper Case was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text is converted to lowercase!","success");
  };
  const handleClearClick = () =>{
      setText("");
      props.showAlert("Text Box is cleared!","success");
  }

  const handleInverseClick = () =>
  {
     let i=0;
     let n ="";
     let s = "";
     while(i<text.length)
     {
         n = text.charAt(i);
         if(n === n.toUpperCase())
         n = text.charAt(i).toLowerCase();
         else if(n === n.toLowerCase())
         n = text.charAt(i).toUpperCase();
         s += n;
         n="";
         i++;
     }
      setText(s);
      props.showAlert("Text is innverted!","success");
  }


  const onHandelChange = (e) => {
    //console.log('on change');
    setText(e.target.value);
  };
  const [text, setText] = useState("");
  return (
    <>
      <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1 color="white">{props.heading}</h1>
        <div className="mb-3">
          <textarea
       style={{backgroundColor: props.mode==='dark'? 'grey': 'white', color:props.mode=== 'dark'?'white': 'black'}}
            className="form-control"
            onChange={onHandelChange}
            value={text}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-1" onClick={handleUpClick}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleLoClick}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary mx-1" onClick={handleClearClick}>
          Clear
        </button>
        <button className="btn btn-primary mx-1" onClick={handleInverseClick}>
          InVeRsE TeXt
        </button>
        
      </div>
      <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>
          {text.length===0?0:text.split(" ").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} Minutes to read</p>
        <h2>Priview</h2>
        <p>{text.length===0?"Enter Something in above textbox to preview it here" :text}</p>
      </div>
    </>
  );
}
