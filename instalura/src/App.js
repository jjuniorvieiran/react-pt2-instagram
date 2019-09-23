import React from 'react';
import Header from './componentes/Header';
import Timeline from "./componentes/Timeline";

function App() {
  return (
    <div id="root">
      <div data-reactroot="" className="main">
        <Header/>
        <Timeline/>
      </div> 
    </div> 
  );
}

export default App;
