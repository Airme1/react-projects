import React, { useState } from "react"
import List from "./List"
import data from "./components/data"

export default function App() {
  const [person, setPerson] = useState(data);
  return (
    <main>
      <section className="container">
        <h1>{person.length} Birthdays today</h1>
        <List people={person} />
        <button onClick={ () => setPerson([])}>Clear All</button>
      </section>
    </main>
  );
}