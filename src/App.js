import "./styles.css";
import {
  SimpleCounter,
  CharacterCount,
  MatchPassword,
  PasswordAlphanumeric,
  SubmitDisable,
  PasswordShow,
  SmallFigma,
  AddToCart,
  SwitchTabs,
  Toaster,
  TodoApp,
  DarkMode,
  LikeInList
} from "./components";
import { GreyOut } from "./components/Greyout";

export default function App() {
  return (
    <div className="App">
      <header>
        <h1>React Components</h1>
      </header>
      <hr></hr>
      <SimpleCounter />
      <br></br>
      <hr></hr>
      <CharacterCount />
      <br></br>
      <hr></hr>
      <MatchPassword />
      <br></br>
      <hr></hr>
      <PasswordAlphanumeric />
      <br></br>
      <hr></hr>
      <SubmitDisable />
      <br></br>
      <hr></hr>
      <PasswordShow />
      <br></br>
      <hr></hr>
      <SmallFigma />
      <br></br>
      <hr></hr>
      <AddToCart />
      <br></br>
      <hr></hr>
      <SwitchTabs />
      <br></br>
      <hr></hr>
      <Toaster />
      <br></br>
      <hr></hr>
      <TodoApp />
      <br></br>
      <hr></hr>
      <DarkMode />
      <br></br>
      <hr></hr>
      <LikeInList />
      <br></br>
      <hr></hr>
      <GreyOut />
      <br></br>
      <hr></hr>
    </div>
  );
}
