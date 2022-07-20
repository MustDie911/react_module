import {Link} from "react-router-dom";


export default function Header(){
    return(
            <div>
                <h2>Menu</h2>
                <ul>
                    <li><Link to={'/todos'}>Todos</Link></li>
                    <li><Link to={'/albums'}>Albums</Link></li>
                    <li><Link to={'/comments'}>Comments</Link></li>
                </ul>
            </div>
    )
}