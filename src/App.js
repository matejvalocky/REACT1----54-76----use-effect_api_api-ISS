// Multiple returns
import { useState, useEffect } from "react"
const url = "http://api.open-notify.org/iss-now.json"



const App = () => {

  const [loading, setLoading] = useState(true)
  const [latitude, setLatitude] = useState("")
  const [longitude, setLongitude] = useState("")

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => data["iss_position"])
      .then((position) => {

        setLatitude(position["latitude"])
        setLongitude(position["longitude"])
      })
      setLoading(false)
  }, [])

  if (loading) {
    return <h2>Načítanie stránky</h2>
  }




  return <>
    <h2>Zemepisná šírka</h2>
    <p>{latitude}</p>
    <h2>Zemepisná dĺžka</h2>
    <p>{longitude}</p>
  </>







}

export default App