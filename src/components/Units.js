import './Units.css';
function Units(props) {
    let {name, desc,img} = props;

    return (
        <div className={'card'}>
            <h2>{name}</h2>
            <p>{desc}</p>
            <img src= {img} alt="simpson_img"/>
        </div>
    )
}


export default Units;
