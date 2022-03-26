import React from "react";
import Card from "./components/Card.js";
import { categories } from "./helpers/data.js";
import "./App.css";
import svg from "./assets/react.svg";

function App() {
  return (
    <div className="App">
      <img src={svg} alt="logo" id="logo"></img>
      <h2>Languages</h2>
      <div className="container">
        {categories.map((card) => (
          <Card key={card.name} {...card} />
        ))}
      </div>
    </div>
  );
}
export default App;
