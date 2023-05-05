import React from "react";

import Puerta from "./components/Puerta";
import Termometro from "./components/Termometro";

function App() {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>SOFTEL TEST</h1>
      <h3 style={{ textAlign: 'center' }}>Por: Alexis Cepeda</h3>
      <Puerta />
      <Termometro />
    </div>
  );
}

export default App;
