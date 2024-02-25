import React from 'react';
import { InputSelect, SelectOption } from './jsonTypes';

interface InputSelectComponentProps {
  inputSelect: InputSelect;
}

const InputSelectComponent: React.FC<InputSelectComponentProps> = ({ inputSelect }) => {
  return (
    <select id={inputSelect.select} name={inputSelect.select}>
      {inputSelect.properties.options.map((option: SelectOption, index: number) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default InputSelectComponent;