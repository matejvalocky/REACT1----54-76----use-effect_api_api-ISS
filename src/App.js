import { useState, useEffect } from "react"

const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  const sizeControl = () => {
    setWindowSize(window.innerWidth)
  }

  useEffect ( () => {
    window.addEventListener("resize", sizeControl)
  })

  // pridáme [] ak to chceme spustiť len raz, ale toto nie je riešenie

  return (
    <div>
      <h1>Šírka okna</h1>
      <h2>{windowSize}</h2>
    </div>
  )
}

export default App