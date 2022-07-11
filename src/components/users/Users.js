import {useEffect, useState} from "react";
import {getUsers, User} from "../../services";



export function Users({getHigher}) {
    let [users, setUsers] = useState([]);


    useEffect(() => {
        getUsers()
            .then(({data}) => setUsers([...data]))


    }, [])

    return (
        <div>
        {
            users.map(value => <User
                key={value.id}
                item={value}
                getHigher={getHigher}
                />
            )

        }


    </div>)


}

