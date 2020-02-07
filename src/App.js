import React from "react"
import { render } from "react-dom"
import Pet from "./Pet"
import SearchParams from "./SearchParams"

const App = () => {
  return (
    <div>
      <h1 id="something-important">Adopt me!</h1>
      <Pet name="Scout" animal="Dog" breed="Beagle" />
      <Pet name="Pepper" animal="Bird" breed="Cockatiel" />
      <Pet name="Sparky" animal="Crab" breed="Hermit" />
      <SearchParams />
    </div>
  )
}

render(<App />, document.getElementById("root"))
