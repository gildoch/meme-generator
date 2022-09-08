import "./App.css";
import NavBar from "./navBar/NavBar";
import Footer from "./footer/Footer";

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
      <footer className="App-footer">
        <Footer />
      </footer>
    </div>
  );
}

export default App;
