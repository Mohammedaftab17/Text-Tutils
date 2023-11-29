import React from "react";
import { useState } from "react";

function Text(props) {
  const [Text, updateText] = useState("");
  
  const handleonchange = (e) => {
    updateText(e.target.value);
  };
  const uphandleonclick = (e) => {
    let upperText = Text.toUpperCase();
    updateText(upperText);
    props.alert("Converted to Uppercase", "success")
  };
  const lowhandleonclick = (e) => {
    let lowerText = Text.toLowerCase();
    updateText(lowerText);
    props.alert("Converted to Lowercase", "success")
  };
  const handlecopyText = (e) => {
    window.navigator.clipboard.writeText(Text);
    props.alert("Text Copied", "success")
  };
  
  const capitalizeFirstLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };
  
  const handleCapitalizeText = () => {
    const capitalizedText = capitalizeFirstLetter(Text);
    updateText(capitalizedText);
    props.alert("First letter of every word converted into Capital", "success")
  };

  const handleClearText = () =>{
    let cleartext =  "";
    updateText(cleartext)
    props.alert("Input Field Cleared", "success")
  }

  return (
    <>
    <div id="MainDiv"
    style={{color:props.mode === "dark"?"white":"#042743" }}>
      <div className="container mb-0 my-2 p-2">
        <div className="mb-4">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
            <h4>Edit and Convert Your Text</h4>
          </label>
          <textarea
            onChange={handleonchange}
            className="form-control border-3"
            style={{backgroundColor: props.mode === "dark"?"#042743":"white", color:props.mode === "dark"?"white":"#042743" }}
            id="exampleFormControlTextarea1"
            rows="8"
            value={Text}
          ></textarea>
        </div>

        <div className="container">
          <button
            type="button"
            onClick={uphandleonclick}
            className="mx-2 btn btn-primary"
          >
            UpperCase
          </button>
          <button
            type="button"
            onClick={lowhandleonclick}
            className="mx-2 btn btn-primary"
          >
            LowerCase
          </button>
          <button
            type="button"
            className="mx-2 btn btn-primary"
            onClick={handleCapitalizeText}
          >
            Capitalized
          </button>
          <button
            type="button"
            onClick={handlecopyText}
            className="mx-2 btn btn-primary"
          >
            Copy
          </button>
          <button
            type="button"
            onClick={handleClearText}
            className="mx-2 btn btn-primary"
          >
            Clear-Text
          </button>
        </div>
      </div>
      <div className="container mb-1 my-2 p-2">
        <h4>Text Summary</h4>
        <p>
          <b>Preview: </b>
          {Text.length>0?Text:"Write Something in the Text-Box to Preview it here"}
        </p>
        <p>
          {Text.length} Characters, {Text.split(" ").length - 1} words
        </p>
      </div>
      </div>
    </>
  );
}
export default Text;
