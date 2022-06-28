import './App.css';

import {useEffect, useState} from "react";

import {Flight} from "./components";

import {Flights} from "./components";


function App() {

    let [flights, setFlights] = useState([])

    useEffect(() => {
        Flights().then(value => setFlights([...value]))
    }, [])



    return (
        <div>
            <h2>SpaseX missions:</h2>
            {flights.map((flight, flight_number) => <Flight
                key={flight_number}
                item={flight}
            />)}

        </div>
    );
}

export default App;
