import React, { useState } from "react";

function TextForm(props) {
  const [text, setText] = useState("Enter   the   text  here");

  const upperCase = () => {
    console.log("UpperCase was clicked");
    let newText = text.toUpperCase();
    setText(newText);
  };
  function lowerCase() {
    let newText = text.toLowerCase();
    setText(newText);
  }
  const capitalize = () => {
    let textArr = text.split(" ");
    let newText = [];
    for (let i = 0; i < textArr.length; i++) {
      let capText =
        textArr[i].charAt(0).toUpperCase() + textArr[i].slice(1).toLowerCase();
      newText[i] = capText;
    }
    setText(newText.join(" "));
  };
  let clearText = () => {
    setText("");
  };

  const handleChange = (event) => {
    console.log("on change");
    setText(event.target.value);
  };
  let words = () => {
    let words = text.trim().split(/\s+/).filter(Boolean);
    let wordCount = words.length;
    let characterCount = text.length;
    return `${wordCount} words ${characterCount} characters`;
  };
  return (
    <>
      <div className="main-container wv-100" style={props.background}>
        <div className="container pb-5 ">
          <div className="mb-3">
            <div className="headings d-flex f-row justify-content-between border-2 w-100 w-100 pt-3 align-items-center">
              <h1>{props.heading}</h1>
              <p className="mt-10">{`${words()}`}</p>
            </div>
            <textarea
              className="form-control "
              id="exampleFormControlTextarea1"
              rows="14"
              value={text}
              onChange={handleChange}
              style={props.textareaBackground}
            ></textarea>
          </div>
        <div className = "buttons">
        <button className="btn btn-primary mx-2 my-2" onClick={upperCase}>
          Convert to UpperCase
        </button>
        <button className="btn btn-primary mx-2 my-2 " onClick={lowerCase}>
          Convert to LowerCase
        </button>
        <button className="btn btn-primary  mx-2 my-2" onClick={capitalize}>
          Capitalize
        </button>
        <button className="btn btn-primary  mx-2 my-2" onClick={clearText}>
          Clear Text
        </button>
          </div>
        </div>

      </div>
    </>
  );
}

export default TextForm;
