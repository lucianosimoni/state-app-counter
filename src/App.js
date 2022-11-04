import './App.css';
import { useState } from 'react';

function App() {
  const [count, setCount] = useState(10);
  const [countFontSize, setFontSize] = useState(10);
  const maxValue = 20;
  const minValue = 0;

  const updateFontSize = () => {
    console.log(`Update ${count}`)

    // Normalized stays between 0 and 1. Floating
    const normalized = (count - minValue) / (maxValue - minValue)

    // The Normalized is multiplied with the maximum value we like it to be.
    setFontSize(normalized * maxValue)
  }

  const incrementCount = () => {
    // If not more than 10, add
    if (!(count >= maxValue)) {
      setCount(count + 1);
    }

    updateFontSize();
  }
  const decrementCount = () => {
    // If not less than 0, remove
    if (!(count <= minValue)) {
      setCount(count - 1);
    }

    updateFontSize();
  }
  const doubleCount = () => {
    // Doubles the counter
    let doubled = count * 2;

    // If more than max, set it to be max
    if (doubled > maxValue) {
      doubled = maxValue;
    }

    // Render
    setCount(doubled);

    updateFontSize();
  }
  const halveCount = () => {
    // Halves the Count
    const countHalve = count / 2;

    // Rounds it
    const rounded = Math.round(countHalve);

    // Render
    setCount(rounded);

    updateFontSize();
  }

  return (
    <div className="App">
      <main>
        <p>Counter: 
          <span 
          style={
            // {transform: scale(countFontSize)}
            {fontSize: countFontSize}
          }
          
          >{count}</span></p>
        <button onClick={incrementCount}>Increment</button>
        <button onClick={decrementCount}>Decrement</button>
        <button onClick={doubleCount}>Double</button>
        <button onClick={halveCount}>Halve</button>
      </main>
    </div>
  );
}

export default App;
