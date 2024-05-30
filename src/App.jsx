import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import Alert from "./Components/Alert";
import About from "./Components/About";
import "./App.css";

function App() {
  const [navStyle, setNavStyle] = useState({
    backgroundColor: "#f8f9fa",
    color: "black",
  });

  const [textareaBackground, setTextAreabackground] = useState({
    backgroundColor: "white",
    color: "black",
    border: "2px solid black",
  });

  const [background, setBackground] = useState({
    backgroundColor: "white",
  });

  const themeA = () => {
    setNavStyle({
      backgroundColor: "#240750 ",
      color: "white",
    });
    setBackground({
      backgroundColor: "#092327",
      color: "white",
    });
    setTextAreabackground({
      backgroundColor: "#577B8D",
      color: "white",
    });
  };

  const themeB = () => {
    setNavStyle({
      backgroundColor: "#4C0033 ",
      color: "white",
    });
    setBackground({
      backgroundColor: "#790252",
      color: "black",
    });
    setTextAreabackground({
      backgroundColor: "#CAE6B2",
      color: "black",
    });
  };

  const themeC = () => {
    setNavStyle({
      backgroundColor: "#32012F ",
      color: "white",
    });
    setBackground({
      backgroundColor: "#524C42",
      color: "white",
    });
    setTextAreabackground({
      backgroundColor: "#E2DFD0",
      color: "black",
    });
  };

  const changeTheme = () => {
    if (navStyle.backgroundColor === "#f8f9fa") {
      showAlert("Dark Mode Enabled", "success");
      setNavStyle({
        backgroundColor: "#4a4444",
        color: "white",
      });
      setTextAreabackground({
        backgroundColor: "grey",
        color: "white",
      });

      setBackground({
        backgroundColor: "#0d2c31",
        color: "white",
      });
      document.title = "TextUtils - Dark Mode";
    } else {
      showAlert("Light Mode Enabled", "success");
      setNavStyle({
        backgroundColor: "#f8f9fa",
        color: "black",
      });
      setBackground({
        backgroundColor: "white",
      });
      setTextAreabackground({
        backgroundColor: "white",
        color: "black",
      });
      document.title = "TextUtils - Light Mode";
    }
  };

  const [alert, setAlert] = useState("success");

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert("primary");
    }, 2000);
  };

  return (
    <>
      <Navbar
        navStyle={navStyle}
        changeTheme={changeTheme}
        className="theme themeA themeB themeC themeIcon"
        themeA={themeA}
        themeB={themeB}
        themeC={themeC}
      />

     
            <TextForm
              navStyle={navStyle}
              background={background}
              textareaBackground={textareaBackground}
            />
        
      
    </>
  );
}

export default App;
