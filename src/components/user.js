import './user.css'
export default function User({user,choseUser}) {


    return (<div className={'user'}>

        {user.id}.   {user.name}
        {user.address.street}

           <div className={'btn'}>
               <button onClick={() => {

                   choseUser(user)

               }}>More

               </button>
           </div>

    </div>)
}