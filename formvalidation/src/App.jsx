import React, { useState } from 'react';
import Form from './form';


const InputBox = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <Form/> 
    </div>
  );
};

export default InputBox;
