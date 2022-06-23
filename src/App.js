import './App.css';
import {useEffect, useState} from "react";
import User from "./components/user";

export default function App() {

    let [users, setUsers] = useState([]);
    let [user,setUser] = useState({});

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(value => value.json())
            .then(value => {
                setUsers(value)

            })
    }, [])


    const choseUser = (user) => {setUser(user)}

    return (
        <div>
            {users.map(user => <User key={user.id}
                                         user={user}
                                         choseUser ={choseUser}

            />)}

            {
                user && <div><h3>{user.id}.
                    {user.username}
                    <p>{user.email}</p>
                    <p>{user.address.street}</p>
                    <p>{user.website}</p>
                </h3>
                </div>
            }

        </div>
    );
}

