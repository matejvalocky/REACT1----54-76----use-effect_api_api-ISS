const App = () => {
  const url = "http://api.open-notify.org/iss-now.json"

  const getCoordinates = async() => {
    const response = await fetch(url) // fetch daj mi tie dáta // await - počkaj
    const data = await response.json() // prekonvertovanie dat
    console.log(data["iss_position"]["latitude"]) // zemepisna šírka
    console.log(data["iss_position"]["longitude"]) // zemepisna dĺžka
  }

  getCoordinates()


  return (
    <h1>API</h1>
  )
}

export default App