import "./App.css";
import NavBar from "./navBar/NavBar";
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
    </div>
  );
}

export default App;
