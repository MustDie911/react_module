export function User({item,getHigher}) {
const onclick = () => {
    getHigher(item.id)
}
    
    return (
        <div>
        {item.name}
        <button onClick={onclick}>get more posts</button>
    </div>
    );
}