
  
  type InputTextProperties = {
    label: string;
  };

  type InputText = {
    text: string;
    Properties: InputTextProperties;
  };
  
  type SelectOption = {
    value: string;
    label: string;
  };
  
  type InputCheckboxProperties = {
    label: string;
    value: string;
  };
  
  type InputCheckbox = {
    checkbox: string;
    Properties: InputCheckboxProperties;
  };
  
  type InputSelectProperties = {
    value: string;
    options: SelectOption[];
  };
  
  type InputSelect = {
    select: string;
    properties: InputSelectProperties;
  };
  
  
  type FormElement = InputCheckbox | InputText | InputSelect;
  
  export type { InputCheckbox, InputText, SelectOption, InputSelect, FormElement };