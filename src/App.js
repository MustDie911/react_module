import './App.css';

import {Link,Route,Routes} from "react-router-dom";

import {Home,Todos,Albums,Comments} from "./pages/index"

function App() {
    return (
        <div>
            <div className={'header'}>
                <h2>Menu</h2>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/todos'}>Todos</Link></li>
                    <li><Link to={'/albums'}>Albums</Link></li>
                    <li><Link to={'/comments'}>Comments</Link></li>
                </ul>
            </div>

            <div className={'content'}>
                <h2>content</h2>

                <Routes>
                    <Route index element={<Home/>}/>

                    <Route path={'/todos'} element={<Todos/>}/>

                    <Route path={'/albums'} element={<Albums/>}/>

                    <Route path={'/comments'} element={<Comments/>}/>

                </Routes>


            </div>
        </div>
    );
}

export default App;

// реалізувати 3 маршрути
// todos - при переході на який тягнуться всі з https://jsonplaceholder.typicode.com/todos
//
//     albums - при переході на який тягнуться всі альбоми з https://jsonplaceholder.typicode.com/albums
//
//     comments - при переході на який тягнуться всі комментарі https://jsonplaceholder.typicode.com/comments
//     при натисканні на комментар тягнеться пост, до якого належіить цей коментар всі його пости.
//     приклад запиту https://jsonplaceholder.typicode.com/posts/ID
//     id поста взяти з коментаря (postId)
//
// відображати ті чи інші маршрути можна на будь-якому рівні на ваш вибір.