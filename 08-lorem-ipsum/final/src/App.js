import React, { useState } from 'react';
import data from './data';
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    let amount = parseInt(count);   
    let temp = [];
    for (let i = 0; i<amount; i++) {
      temp.push(data[i%8]);
    }
    setText(temp);
  }
  return (
    <section className='section-center'>
      <h3>Bored Of Regular ipsum lorem ?</h3>
      <form className="lorem-form" onSubmit={handleSubmit}>
        <label htmlFor="count">Paragraph:</label>
        <input type="number" name="count" id="count"
          value={count}
          onChange={(e) => setCount(e.target.value)}
        />
        <button type="submit" className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((element, index) =>{
          return(
            <p key={index}>{element}</p>
          )
        })}
      </article>
    </section>    
  )
}

export default App;
