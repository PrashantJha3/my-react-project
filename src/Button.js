import React , { useState }from 'react';
import './Button.css'; // Create Button.css for styling

import { ReactComponent as Icon } from './icon.svg';
import { ReactComponent as DelIcon } from './delete.svg';

const Button = () => {
  const [inputs, setInputs] = useState([]);
  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };
  const handleDelete = (index) => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };
  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };
  return (
    <div>

   
    {inputs.map((input, index) => (
      <div key={index}>
        <input
          type="text"
          value={input}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
        <button onClick={() => handleDelete(index)}>
        <DelIcon className="icon" />
      <span className="text">Delete</span>
        </button>
      </div>
    ))}
    <button className="button" onClick={handleAddInput}>
      <Icon className="icon" />
      <span className="text">Add</span>
    </button>
    </div>
  );
};

export default Button;
