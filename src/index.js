import { StrictMode } from "react";
import ReactDOM from "react-dom";

import SimpleCounter from "./components/SimpleCounter";
import MatchPassword from "./components/MatchPassword";
import CharacterCount from "./components/CharacterCount";
import PasswordAlphanumeric from "./components/PasswordAlphanumeric";
import SubmitDisable from "./components/SubmitDisable";
import PasswordShow from "./components/PasswordShow";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    {/* <SimpleCounter />
    <CharacterCount />
    <MatchPassword />
    <PasswordAlphanumeric />
    <SubmitDisable /> */}
    <PasswordShow />
  </StrictMode>,
  rootElement
);
