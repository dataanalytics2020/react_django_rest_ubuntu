import logo from './logo.svg';
import './App.css';
import React from 'react';
import ApiFetch from './components/ApiFetch';
// import Basic2 from './components/Basic2';
// import BasicUseEffect from './components/BasicUseEffect';
// import TimerContainer from './components/TimerContainer';
function App() {
  return (
    <div className="App">
      
      <img src={logo} className="App-logo" alt="logo" />
      {/* <BasicUseEffect/> */}
      {/* <TimerContainer /> */}
      <ApiFetch />
    </div>
  );
}

export default App;
