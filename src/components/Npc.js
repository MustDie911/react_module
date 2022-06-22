import './Npc.css';
export default function Npc(props) {
    let {id,name,status,species,gender,image}=props;


    return (
        <div className={'card'}>
            <h2>{id}</h2>
            <h1>{name}</h1>
            <h2>{status}</h2>
            <p>{species}</p>
            <h2>{gender}</h2>
            <img src={image} alt="rick_morty_img"/>
        </div>
    )
}
