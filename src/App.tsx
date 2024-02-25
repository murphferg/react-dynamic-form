import React, { useEffect, useState }  from 'react';
import logo from './logo.svg';
import './App.css';
import { parseFormJson } from './parseJson';
import { FormElement, InputCheckbox, InputSelect, InputText } from './jsonTypes';
import InputTextComponent from './InputTextComponent';
import InputCheckboxComponent from './InputCheckboxComponent';
import InputSelectComponent from './InputSelectComponent';

function App() {

  const [formElements, setFormElements] = useState<FormElement[] | null>(null);

  useEffect(() => {
    fetch('./data/form.json', { headers: { 'Accept': 'application/json' } })
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
        {formElements?.map((element, index) => {
          if ('text' in element) {
            return <InputTextComponent key={index} inputText={element as InputText} />;
          } else if ('checkbox' in element) {
            return <InputCheckboxComponent key={index} inputCheckbox={element as InputCheckbox} />;
          } else if ('select' in element) {
            return <InputSelectComponent key={index} inputSelect={element as InputSelect} />;
          }
          return null;
        })}
      </header>
    </div>
  );
}

export default App;
