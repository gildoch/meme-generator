import React from "react";
import "./NavBar.css";

function NavBar(props) {
  return (
    <nav className="n-wrapper">
      <div className="n-left">
        <img src="/images/Troll Face.png" alt="" className="troll-face" />
        <h1 className="app-name">Meme Generator</h1>
      </div>
      <div className="n-rigth">
        <h4 className="project-name">React Course - Project 3</h4>
      </div>
    </nav>
  );
}

export default NavBar;
