import React from 'react';
import { InputText } from './jsonTypes';

interface InputTextComponentProps {
  inputText: InputText;
}

const InputTextComponent: React.FC<InputTextComponentProps> = ({ inputText }) => {
  return (
    <input type="text" id={inputText.text} name={inputText.text} placeholder={inputText.Properties.label} />
  );
};

export default InputTextComponent;