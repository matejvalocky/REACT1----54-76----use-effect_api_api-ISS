import { useState, useEffect } from "react"

const App = () => {


  const [value, setValue] = useState(0)
  const [test, setTest] = useState(0)


  // useEffect nemôžeme obaľovať do podmienky
  // useEffect beží len raz ak na konci pridáme []

  useEffect(() => {
    const button = document.querySelector(".btn")
    if (value >= 1) {
      button.textContent = `Klik číslo ${value}`
    } else {
      button.textContent = "klikni"
    }

    console.log("Prvý useEffect - Klikni")



  }, [value]) // spustí sa len vtedy keď sa zmení value

  // useEffect sa spúšťa až na konci

  useEffect(() => {
    document.title = `Nový titulok ${test}`
    console.log("Druhý useEffect - titulok")
  },[test]) // spustí sa len vtedy keď sa zmení test





  return (
    <div>
      <h1>začíname</h1>
      <p>{value}</p>
      
      <button className="btn" onClick={() => setValue(value + 1)}>Klikni</button>

      <button className="btn-test" onClick={() => setTest(test + 1)}>Titulok</button>
    </div>
  )
}

export default App