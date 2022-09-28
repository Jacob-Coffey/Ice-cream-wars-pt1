import React from 'react';
import './App.css';
import SetHeader from './components/header';
import AdDesigner from './components/AdDesigner';
import Votes from './components/votes';

function App() {
  
  return (
    <div className="App">
      <SetHeader />
      <AdDesigner />
      <Votes />
    </div>
  );
}

export default App;
