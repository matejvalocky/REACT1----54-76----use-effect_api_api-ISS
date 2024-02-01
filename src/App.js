import { useState, useEffect } from "react"

const App = () => {


  const [value, setValue] = useState(0)


  // useEffect nemôžeme obaľovať do podmienky
  // useEffect beží len raz ak na konci pridáme []

  useEffect(() => {
    const button = document.querySelector(".btn")
    if (value >= 1) {
      button.textContent = `Klik číslo ${value}`
    } else {
      button.textContent = "klikni"
    }



  }, []) // pridanie []

  // useEffect sa spúšťa až na konci





  return (
    <div>
      <h1>začíname</h1>
      <p>{value}</p>
      {console.log("ja som return")}
      <button className="btn" onClick={() => setValue(value + 1)}>Klikni</button>
    </div>
  )
}

export default App