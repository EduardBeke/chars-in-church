import "./App.css";
import ChurchRenderer from "./ChurchRenderer";
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const url = new URLSearchParams(location.search).get("url");
  const [text, setText] = useState(url ?? "");

  const onTextChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Chars in Church</h1>
      <p>
        Church sourced from{" "}
        <a href="https://www.asciiart.eu/buildings-and-places/church">
          https://www.asciiart.eu/buildings-and-places/church
        </a>
      </p>
      <input
        type="text"
        value={text}
        placeholder="enter text here"
        onChange={onTextChange}
      />
      <ChurchRenderer text={text} />
    </div>
  );
}

export default App;
