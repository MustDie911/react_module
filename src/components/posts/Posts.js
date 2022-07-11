export function Posts({item}) {
    return(
        <div>
            {
                item.map(value=><div>{value.body}</div>)
            }
        </div>
    )
}