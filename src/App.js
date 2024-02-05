const App = () => {

  const url = "https://api.kanye.rest/"

  let quote = "vychodzí text"

  console.log("text nad funkciou")



  const getQuote = async () => {
    const response = await fetch(url)
    const data = await response.json()
    quote = (data["quote"])
    console.log("text vo funkcií")

  }

  getQuote()



  return (
    <div>
      <h1>{quote}</h1>
      {console.log("text v return")}
    </div>
  )
}
// API 
export default App