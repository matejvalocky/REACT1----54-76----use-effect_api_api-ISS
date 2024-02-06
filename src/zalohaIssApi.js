import { useState, useEffect } from "react"

const App = () => {
  const url = "http://api.open-notify.org/iss-now.json"

  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")
  const [urlMap, setUrlMap] = useState("")

  const getCoordinates = async () => {
    const response = await fetch(url) // fetch daj mi tie dáta // await - počkaj
    const data = await response.json() // prekonvertovanie dat


    setLatitude(data["iss_position"]["latitude"])
    setLongitude(data["iss_position"]["longitude"])
    const iss_long = data["iss_position"]["longitude"]
    const iss_lat = data["iss_position"]["latitude"]

    setUrlMap(`https://sk.mapy.cz/zakladni?x=${iss_long}&y=${iss_lat}&z=19`)


  }

  useEffect(() => {
    getCoordinates()
  }, [])


  




  return (
    <div>
      <h1>API</h1>
      <h2>Zemepisná šírka</h2>
      <p>{latitude}</p>
      <h2>Zemepísná dĺžka</h2>
      <p>{longitude}</p>
      <a href={urlMap} target="_blank" rel="noreferrer">Pozícia iss v mapách</a>
    </div>

  )
}

export default App