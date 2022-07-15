import {useForm} from "react-hook-form";
import {addUser} from "../../services";


const Users = () => {

    let {register, handleSubmit,formState:{errors}} = useForm();

    console.log(errors)

    return (
        <div>
            <form onSubmit={handleSubmit(addUser)}>
                <input type="text"
                       {...register('name',{required:true, maxLength:3})}/>
                {errors.name && errors.name.type === 'required' &&<span>field is empty</span>}
                {errors.name && errors.name.type === 'maxLength' &&<span>field is too long</span>}

                <input type="text"
                       {...register('username',{required:true})}/>
                {errors.username &&<span>field is empty</span>}

                <button>Save</button>

            </form>


        </div>
    )
}

export {Users}