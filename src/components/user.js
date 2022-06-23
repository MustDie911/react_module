import './user.css'
export default function User({user,choseUser}) {


    return (<div className={'user'}>

        {user.id}.
        {user.name}
        {user.address.street}

            <button onClick={() => {

                choseUser(user)

            }}>More

            </button>

    </div>)
}