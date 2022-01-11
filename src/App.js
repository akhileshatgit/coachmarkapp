import logo from './logo.svg';
import './App.css';
import React, { useRef, useState } from "react";
import { CoachMark, ICoachProps } from "react-coach-mark";

function App() {
    
    const ref1 = useRef(null);
    const coach: ICoachProps = {
            activate: true,
            component: <div>Any Component You Want</div>,
            reference: ref1,
            tooltip: { position: 'bottom' }
        };
    <CoachMark {...coach} />
  
    return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p ref={ref1}>Any ref based element</p>
        <p>
          This is an instructional overlay display POC.
        </p>
      </header>
    </div>
  );
}

export default App;
