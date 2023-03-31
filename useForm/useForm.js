import { useState } from "react";



export const useForm = (initialForm = {}) => {

    const [formState, setFormState] = useState(initialForm);

    const inputChange = ({target}) => {

        const {name, value} = target;
        setFormState({
          ...formState,//mantiene los campos del formularo
            [name]: value
        });
    }

    const onResetForm = () => {
        setFormState(initialForm);
    }

    return{
        ...formState,
        formState,
        inputChange,
        onResetForm,


    }
}
