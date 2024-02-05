const App = () => {

  const url = "https://api.kanye.rest/"

  // 1. riadok kodu
  // 2. riadok kodu - 5 sekund
  // 3. riadok kodu


  const getQuote = async () => {
    const response = await fetch(url)
    const data = await  response.json()
    console.log(data["quote"])

  }

  getQuote()



  return (
    <div>
  
    </div>
  )
}
// API 
export default App