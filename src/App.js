import React from "react";

import milkteaList from "./components/utils/Products";
import Milktea from "./components/utils/Milktea";

import './App.css';

function App() {
  const milktea = milkteaList.map(milk_tea => <Milktea   key={milk_tea.id} product={milk_tea}/>)
  return (
    <div className="App">
      <header className="App-header">
        <h1>Kumusta React?</h1>
        {milktea}
      </header>
    </div>
  );
}

export default App;
