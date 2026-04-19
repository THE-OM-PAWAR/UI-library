import React from 'react';
import { RadioGroup, RadioGroupItem } from './Radio.jsx';

export const RadioDemo = (
  <RadioGroup defaultValue="option2" className="max-w-xs">
    <label htmlFor="radio-demo-option1" className="flex items-center gap-2">
      <RadioGroupItem id="radio-demo-option1" value="option1" />
      <span>Option 1</span>
    </label>

    <label htmlFor="radio-demo-option2" className="flex items-center gap-2">
      <RadioGroupItem id="radio-demo-option2" value="option2" />
      <span>Option 2</span>
    </label>

    <label htmlFor="radio-demo-option3" className="flex items-center gap-2">
      <RadioGroupItem id="radio-demo-option3" value="option3" />
      <span>Option 3</span>
    </label>
  </RadioGroup>
);
