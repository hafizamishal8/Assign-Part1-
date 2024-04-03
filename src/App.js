
import React, { useState } from 'react';

function App() {
  const initialItems = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);
  const [items, setItems] = useState(initialItems.slice(0, 10));

  const handleShowMore = () => {
    setItems(items.concat(initialItems.slice(items.length, items.length + 2)));
  };

  const handleDelete = (index) => {
    const updatedItems = [...items];
    updatedItems.splice(index, 1);
    setItems(updatedItems);
  };

  const handleAddItem = (newItem) => {
    setItems([...items, newItem]);
  };

  return (
    <div>
      <h1>Arrays Practice </h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            {item}{' '}
            <button onClick={() => handleDelete(index)}>Delete</button>
          </li>
        ))}
      </ul>
      {items.length < initialItems.length && (
        <button onClick={handleShowMore}>Show More</button>
      )}
    </div>
  );
}

export default App;


