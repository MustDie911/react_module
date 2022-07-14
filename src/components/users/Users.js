import {useForm} from "react-hook-form";
import {Submit} from "../../services";


const Users = () => {

    let {register, handleSubmit,formState:{errors}} = useForm();



    return (
        <div>
            <form onSubmit={handleSubmit(Submit)}>
                <input type="text"
                       {...register('name',{required:true})}/>
                {errors.name &&<span>field is empty</span>}

                <input type="text"
                       {...register('username',{required:true})}/>
                {errors.username &&<span>field is empty</span>}

                <button>Save</button>

            </form>


        </div>
    )
}

export {Users}