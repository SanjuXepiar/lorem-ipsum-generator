import "./App.css";
import item from "./data";
import React, { useState } from "react";
function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  //
  const handleChange = (e) => {
    e.preventDefault();
    let amount = +count;
    if (count <= 0) amount = 1;

    if (count > 8) amount = 8;
    setText(item.slice(0, amount));
    console.log(amount);
  };

  return (
    <main>
      <form onSubmit={handleChange}>
        <h1 className="title"> Lorem Ipsum generator</h1>
        <section className="input">
          <label htmlFor="amount">
            <p>Paragraph:</p>
          </label>
          <input
            type="number"
            value={count}
            onChange={(event) => setCount(event.target.value)}
          />
          <button type="submit">Generate</button>
        </section>
      </form>
      <article>
        {text.map((list, index) => {
          return <p key={index}>{list}</p>;
        })}
      </article>
    </main>
  );
}

export default App;
