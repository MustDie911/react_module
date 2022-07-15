import './App.css';
import {Comments} from "./services/index";

function App() {
    return (
        <div>
            <Comments/>
        </div>
    );

}

export default App;

// Зробити компонент, в якому буде форма,
// за допомоги якої можливо створити новий комментар постовим запитом на http://jsonplaceholder.typicode.com/comments
