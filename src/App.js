import './App.css';
import {useEffect, useState} from "react";
import Npc from "./components/Npc";

function App() {

    let  [npc, setNpc] = useState([]);

    useEffect(()=>{
        fetch('https://rickandmortyapi.com/api/character')
            .then(value => value.json())
            .then(value => {
                setNpc(value.results);
                console.log(value)
            })
    },[])


    return (
        <div>
            {
                npc.map(value => <Npc name={value.name}/>
                )
            }

        </div>
    );
}

export default App;
