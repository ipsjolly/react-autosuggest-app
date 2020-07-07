// App.js
import React from 'react';
import './App.css';
import BasicAutoSuggest from './components/basic.autosuggest';
import ServerAutoSuggest from './components/server.autosuggest';

function App() {
  return (
    <div className="App">

      <h1>Basic Auto Suggest</h1>
      <BasicAutoSuggest />

      <h1>Server Auto Suggest</h1>
      <ServerAutoSuggest />

    </div>
  );
}

export default App;
