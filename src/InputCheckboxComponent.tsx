import React from 'react';
import { InputCheckbox } from './jsonTypes';

interface InputCheckboxComponentProps {
  inputCheckbox: InputCheckbox;
}

const InputCheckboxComponent: React.FC<InputCheckboxComponentProps> = ({ inputCheckbox }) => {
  return (
    <input type="checkbox" id={inputCheckbox.checkbox} name={inputCheckbox.checkbox} value={inputCheckbox.Properties.value} />
  );
};

export default InputCheckboxComponent;