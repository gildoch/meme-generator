import React from "react";
import "./ButtonsGroup.css";
import Data from "../Data/memeData";

function ButtonsGroup(props) {
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImages] = React.useState(Data);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    let url = memesArray[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }

  return (
    <div className="buttons-wrapper">
      <div className="input-text-wrapper">
        <input type="text" name="up-text" id="up-text" placeholder="Shut Up" />
        <input
          type="text"
          name="down-text"
          id="down-text"
          placeholder="and take the money"
        />
      </div>
      <button onClick={getMemeImage}>Get a new meme image</button>

      <div className="pic-wrapper">
        <img src={meme.randomImage} alt="" className="meme-pic" />
      </div>
    </div>
  );
}

export default ButtonsGroup;
