import './App.css';
import {useEffect, useState} from "react";

function App() {

  let [flights, setFlights] = useState([])

  useEffect(() => {
    fetch('https://api.spacexdata.com/v3/launches/')
        .then(value => value.json())
        .then(value => {
            setFlights(value.filter(flight => flight.launch_year !== '2020'));
        })
  }, [])



  return (

  );
}

export default App;
