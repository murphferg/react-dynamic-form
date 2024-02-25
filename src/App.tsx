import React, { useEffect, useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import { parseFormJson } from './parseJson';
import { FormElement } from './jsonTypes';

function App() {

  const [formElements, setFormElements] = useState<FormElement[] | null>(null);

  useEffect(() => {
    fetch('./form.json')
      .then(response => response.json())
      .then(data => {
        const parsedData = parseFormJson(JSON.stringify(data));
        setFormElements(parsedData);
      })
      .catch(error => console.error(`Error loading form JSON: ${error}`));
  }, []);





  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
