import * as React from 'react';
import  { useState } from 'react';

interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
}

const App: React.FC = () => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleCheckboxChange = (checked: boolean) => {
    setIsChecked(checked);
  };

  const Checkbox: React.FC<CheckboxProps> = ({ label, checked, onChange }) => {
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      onChange(event.target.checked);
    };

    return (
      <label>
        <input 
          type="checkbox" 
          checked={checked} 
          onChange={handleChange} 
        />
        {label}
      </label>
    );
  };

  return (
    <div>
      <Checkbox 
        label="Accept Terms and Conditions" 
        checked={isChecked} 
        onChange={handleCheckboxChange} 
      />
      <p>{isChecked ? "Checkbox is checked" : "Checkbox is not checked"}</p>
    </div>
  );
};

export default App;
