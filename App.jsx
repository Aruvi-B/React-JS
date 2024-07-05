import React, { useState } from 'react';
import './App.css';

function App() {
  const [items, setItems] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const addItem = () => {
    if (inputValue.trim() === '') {
      alert("You are not write anything!");
      return;
    }
    setItems([...items, { text: inputValue, checked: false }]);
    setInputValue('');
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const toggleCheck = (index) => {
    const newItems = items.map((item, i) => {
      if (i === index) {
        return { ...item, checked: !item.checked };
      }
      return item;
    });
    setItems(newItems);
  };

  const clearItems = () => {
    setItems([]);
  };

  return (
    <div className="header">
      <h2 style={{ margin: '5px' }}>React To Do List</h2>
      <input
        type="text"
        id="myInput"
        placeholder="Write Something..."
        value={inputValue}
        onChange={handleInputChange}
      />
      <button onClick={addItem} className="addBtn">Add</button>
      <button onClick={clearItems} id="clear-list">Clear Items</button>
      <ul id="myUL">
        {items.map((item, index) => (
          <li
            key={index}
            className={item.checked ? 'checked' : ''}
            onClick={() => toggleCheck(index)}
          >
            {item.text}
            <span className="close" onClick={(e) => { e.stopPropagation(); removeItem(index); }}>&times;</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
