import React from "react"
import List from "./List"
import data from "./components/data"

export default function App() {
  return (
    <>
      <h1>Hello</h1>
      <List people={data} />
    </>
  )
}