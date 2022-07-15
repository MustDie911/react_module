import {useForm} from "react-hook-form";
import {getComments} from "../services";


const Comments = () => {
    let {register, handleSubmit,formState:{errors}} = useForm();

    const submit = (obj) => {
      getComments(obj).then(({data})=>console.log(data))
    }



    return(
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type="text"{...register('name',{required:true})}/>

                {errors.name &&<span>field is empty</span>}

                <input type="text"{...register('body',{required:true})}/>

                {errors.body &&<span>field is empty</span>}

                <input type="text"{...register('email',{required:true})}/>

                {errors.email &&<span>field is empty</span>}

                <input type="submit"/>

            </form>
        </div>
    )
}
export {Comments}