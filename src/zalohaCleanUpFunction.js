import { useState, useEffect } from "react"

const App = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

  const sizeControl = () => {
    setWindowSize(window.innerWidth)
  }

  useEffect ( () => {
    console.log("ja som useEffect")
    window.addEventListener("resize", sizeControl)
    return () => {
      console.log("ja som cleanUp function")
      window.removeEventListener("resize", sizeControl)
    }
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