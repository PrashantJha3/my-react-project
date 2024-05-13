
import React, { useState } from 'react';
import './App.css';
import { ReactComponent as Icon } from './icon.svg';
import { ReactComponent as DelIcon } from './delete.svg';

function App() {
  const [inputs, setInputs] = useState(['', '', '']);

  const handleInputChange = (index, value) => {
    const newInputs = [...inputs];
    newInputs[index] = value;
    setInputs(newInputs);
  };

  const handleDelete = index => {
    const newInputs = [...inputs];
    newInputs.splice(index, 1);
    setInputs(newInputs);
  };

  const handleAddInput = () => {
    setInputs([...inputs, '']);
  };

  return (
    <div className="container">
      <div className="form-container">
        <form className="form">
          {inputs.map((input, index) => (
            <div key={index} className="input-container">
              <input
                type="text"
                value={input}
                onChange={e => handleInputChange(index, e.target.value)}
                placeholder={`Input ${index + 1}`}
              />
              <button type="button" onClick={() => handleDelete(index)}> <DelIcon className="icon" />
      <span className="text">Delete</span></button>
            </div>
          ))}
        </form>
        <button type="button" className='textAdd' onClick={handleAddInput}><Icon className="icon" />
      <span className="text">Add</span></button>
      </div>
    </div>
  );
}

export default App;

