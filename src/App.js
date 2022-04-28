import "./App.css";
import NavBar from "./navBar/NavBar";
import Pic from "./pic-section/Pic";

import ButtonsGroup from "./input-button-group/ButtonsGroup";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
      </header>
      <section>
        <ButtonsGroup />
      </section>
      <section className="me-pic-section">
        <Pic />
      </section>

    </div>
  );
}

export default App;
