const App = () => {
  const url = "http://api.open-notify.org/iss-now.json"
  let latitude = ""
  let longitude = ""

  const getCoordinates = async () => {
    const response = await fetch(url) // fetch daj mi tie dáta // await - počkaj
    const data = await response.json() // prekonvertovanie dat
    console.log(data["iss_position"]["latitude"]) // zemepisna šírka
    console.log(data["iss_position"]["longitude"]) // zemepisna dĺžka
    latitude = data["iss_position"]["latitude"]
    longitude = data["iss_position"]["longitude"]
  }

  getCoordinates()


  return (
    <div>
      <h1>API</h1>
      <h2>Zemepisná šírka</h2>
      <p>{latitude}</p>
      <h2>Zemepísná dĺžka</h2>
      <p>{longitude}</p>
    </div>

  )
}

export default App