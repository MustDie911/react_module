import './App.css';
import {Users} from "./components/users/Users";
import {getUserPost, Posts} from "./services";
import {useState} from "react";


function App() {

    let [posts, setPosts] = useState([]);

    const getHigher = (id) => {
        getUserPost(id).then(({data}) => {
            setPosts([...data])
        })
    }
    return (
        <div>
            <Users getHigher={getHigher}/>
            <br/>
            <Posts item={posts}/>
        </div>

    );

}

export default App;

//Отримати всіх користувачів з jsonplaceholder, вивести їх.
//Біля кожного користувача зробити кнопку, при натисканні на яку в Апп компоненті з'являються всі пости поточного користувача
//Запити робити через axios, організація коду через сервіси