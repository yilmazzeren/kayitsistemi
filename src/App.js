import React from 'react';
import './App.css';
import Pagelayout from './components/layout/Pagelayout';
import HomeView from './components/HomeView/HomeView';

function App() {
  return (
    <div className="App">
      <Pagelayout/>
      <HomeView/>
    </div>
  );
}

export default App;
