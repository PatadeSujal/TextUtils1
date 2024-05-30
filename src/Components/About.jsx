import React from "react";

const About = ({ navStyle, background }) => {
  return (
    <div className="body-container p-5" style={background}>
      <div className="container rounded border-2" style={navStyle}>
        <h1 className="mt-5 mb-5">About Us</h1>
        <p>
          The "textutils" web app offers a comprehensive suite of text
          manipulation features designed to enhance user productivity and
          efficiency. Among its key functionalities are options for modifying
          text case, clearing text content, and adjusting font size.
        </p>
        <p>
          Firstly, users can easily convert text to uppercase or lowercase with
          dedicated buttons. The "UpperCase" function transforms all text to
          uppercase letters, ideal for emphasizing titles or headings, while the
          "LowerCase" feature performs the opposite operation, converting text
          to lowercase format for standardization or stylistic preference.
        </p>
        <p>
          Additionally, the app includes a "Capitalize" feature, which
          intelligently capitalizes the first letter of each word in the text.
          This function is particularly useful for ensuring proper noun
          capitalization or improving text readability without altering the
          overall content.
        </p>
        <p>
          The "textutils" web app offers a comprehensive suite of text
          manipulation features designed to enhance user productivity and
          efficiency. Among its key functionalities are options for modifying
          text case, clearing text content, and adjusting font size.
        </p>
        <p>
          Moreover, the app offers text customization capabilities with
          "IncreaseFont" and "DecreaseFont" functionalities. These features
          enable users to adjust the font size of the text displayed in the
          interface, catering to individual preferences for readability and
          visual aesthetics. Whether enlarging text for easier viewing or
          reducing font size to fit more content within the text area, these
          options provide flexibility for optimizing the user experience.
        </p>
        <p>
          In summary, the "textutils" web app empowers users with intuitive
          tools for manipulating text, enhancing formatting, and tailoring the
          display to suit their needs. With its user-friendly interface and
          versatile functionality, the app serves as a valuable resource for
          text editing and optimization tasks across various contexts.
        </p>
      </div>

      <div
        className="teamContainer container mt-5 pb-5 rounded"
        style={navStyle}
      >
        <h2 className="mt-5">Team</h2>
        <div className="accordion accordion-flush" id="accordionFlushExample">
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseOne"
                aria-expanded="false"
                aria-controls="flush-collapseOne"
                style={background}
              >
                Sujal Patade
              </button>
            </h2>
            <div
              id="flush-collapseOne"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                <p>
                  <a href="https://www.instagram.com/patadesujal2006/">
                    Instragram
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseTwo"
                aria-expanded="false"
                aria-controls="flush-collapseTwo"
                style={background}
              >
                Team Member #2
              </button>
            </h2>
            <div
              id="flush-collapseTwo"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                second item's accordion body. Let's imagine this being filled
                with some actual content.
              </div>
            </div>
          </div>
          <div className="accordion-item" style={background}>
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#flush-collapseThree"
                aria-expanded="false"
                aria-controls="flush-collapseThree"
                style={background}
              >
                Team Member #3
              </button>
            </h2>
            <div
              id="flush-collapseThree"
              className="accordion-collapse collapse"
              data-bs-parent="#accordionFlushExample"
            >
              <div className="accordion-body">
                Placeholder content for this accordion, which is intended to
                demonstrate the <code>.accordion-flush</code> class. This is the
                third item's accordion body. Nothing more exciting happening
                here in terms of content, but just filling up the space to make
                it look, at least at first glance, a bit more representative of
                how this would look in a real-world application.
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <button onClick={changeTheme}>Change Theme</button> */}
    </div>
  );
};

export default About;
