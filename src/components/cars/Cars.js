import {useForm} from "react-hook-form";
import {addCar} from "../../services";


const Cars = () => {

    let {register, handleSubmit,formState:{errors}} = useForm();


    return (
        <div>
            <form onSubmit={handleSubmit(addCar)}>
                <input type="text"
                       {...register('model',{required:true, maxLength:10})}/>
                {errors.name && errors.name.type === 'required' &&<span>field is empty</span>}

                <input type="number"

                       {...register('price',{required:true})}/>
                {errors.price &&<span>field is empty</span>}

                <input type="number"

                       {...register('year',{required:true})}/>
                {errors.year &&<span>field is empty</span>}
                <button>Save</button>

            </form>


        </div>
    )
}

export {Cars}