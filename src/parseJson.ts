import fs from 'fs';
import path from 'path';
import { FormElement } from './jsonTypes';

export function parseFormJson(jsonString: string): FormElement[] | null {
    try {
      const parsedContent: FormElement[] = JSON.parse(jsonString);
  
      // Check for exceptions in the properties collections
      parsedContent.forEach((element) => {
        if ('Properties' in element) {
          if (typeof element.Properties.label !== 'string') {
            throw new Error(`Invalid label in Properties of element: ${JSON.stringify(element)}`);
          }
        } else if ('properties' in element) {
          if (typeof element.properties.value !== 'string' || !Array.isArray(element.properties.options)) {
            throw new Error(`Invalid properties in Select element: ${JSON.stringify(element)}`);
          }
        }
      });
  
      return parsedContent;
    } catch (error) {
      console.error(`Error parsing form JSON: ${error}`);
      return null;
    }
  }
  