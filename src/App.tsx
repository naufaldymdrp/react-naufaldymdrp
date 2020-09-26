import React from "react";
// import { StyledButton } from "./components/StyledButton";
import Button from "./components/Button";

import { myTheme } from "./theme";
import { ThemeProvider } from "styled-components/macro";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";

function App() {
  return (
    <ThemeProvider theme={myTheme}>
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
