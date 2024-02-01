import { useState, useEffect } from "react"

const App = () => {


  useEffect(() => {
    console.log("ja som useEffect");
  })

  // useEffect sa spúšťa až na konci





  return (
    <div>
      <h1>začíname</h1>
      {console.log("ja som return")}
    </div>
  )
}

export default App