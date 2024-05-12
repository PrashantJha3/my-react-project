import React , { useState }from 'react';
import Button from './Button';
import { ReactComponent as Icon } from './icon.svg';
import { ReactComponent as DelIcon } from './delete.svg';
import './App.css';
const App = () => {
  const [inputs, setInputs] = useState(['', '', '']);

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

  

  return (
    <div className="container">
      <form className="form">
    {inputs.map((input, index) => (
      <div key={index} className="input-container">
        <input
          type="text"
          value={input}
          onChange={(e) => handleInputChange(index, e.target.value)}
        />
        <button onClick={() => handleDelete(index)}><DelIcon className="icon" />
      <span className="text">Delete</span></button>
      </div>
    ))}
    <Button />
    </form>
  </div>
  );
};

export default App;
