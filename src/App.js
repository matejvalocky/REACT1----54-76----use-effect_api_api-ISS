import { useState, useEffect } from "react"

const App = () => {

  const [value, setValue] = useState(0)

  


  useEffect(() => {
    console.log("ja som useEffect");
  })

  // useEffect sa spúšťa až na konci





  return (
    <div>
      <h1>začíname</h1>
      <p>{value}</p>
      {console.log("ja som return")}
      <button onClick={ () => setValue (value + 1)}>Klikni</button>
    </div>
  )
}

export default App