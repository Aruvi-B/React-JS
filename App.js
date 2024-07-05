import React, { useState } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [items, setItems] = useState([]);

  const addItem = () => {
    if (inputValue !== "") {
      setItems([...items, { text: inputValue, checked: false }]);
      setInputValue("");
    } else {
      alert("You did not write anything!");
    }
  };

  const removeItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const toggleChecked = (index) => {
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
    <div className="App">
      <div className="header">
        <h2 style={{ margin: "5px" }}>React To Do List</h2>
        <input
          type="text"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Write Something..."
        />
        <button onClick={addItem} className="addBtn">Add</button>
        <button onClick={clearItems} id="clear-list">Clear Items</button>
      </div>
      <ul id="myUL">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => toggleChecked(index)}
            className={item.checked ? "checked" : ""}
          >
            {item.text}
            <span className="close" onClick={() => removeItem(index)}>
              ×
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
