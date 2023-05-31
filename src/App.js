import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar'
import Article from './components/Article'
function App() {

  const [counter, setCounter] = useState(0);

  const clickHandler = (value) => {
    setCounter(counter + value);
  }


  return (
    <div className="App">
      <Navbar />
      <section className='main-section'>
        <h2>current count is: </h2>
        <div>
          <button className='btn' onClick={() => clickHandler(1)}>
            +
          </button>
          <span>{counter}</span>
          <button className='btn' onClick={() => clickHandler(-1)}>
            -
          </button>
        </div>
      </section>

      <section>
        <Article />
      </section>
    </div>

  );
}

export default App;
