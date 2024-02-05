import { useState, useEffect } from "react"

const App = () => {

  const [quote, setQuote] = useState("východzí text")

  const url = "https://api.kanye.rest/"



  console.log("text nad funkciou")



  const getQuote = async () => {
    const response = await fetch(url)
    const data = await response.json()
    const finalQuote = data["quote"]
    setQuote(finalQuote)

  }

  useEffect(() => {
    getQuote()
  }, []) // ide len raz

  



  return (
    <div>
      <h1>{quote}</h1>
    </div>
  )
}
// API 
export default App