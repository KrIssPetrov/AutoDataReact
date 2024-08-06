import { useState, useEffect } from "react"
import Swal from "sweetalert2";

export default function useForm(submitHandler) {
    const [values, setValues] = useState('');



    const onChange = (e) => {


        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };




    const onSubmit = (e) => {
        e.preventDefault();


        if (((values.email == '') || (values.password == '')) || ((values.email == undefined) || (values?.password == undefined))) {

            Swal.fire({

                icon: "error",
                title: `Enter email and password !`,
                showConfirmButton: false,
                timer: 1500,

            });
            return;
        }

        if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {

            Swal.fire({

                icon: "error",
                title: `Email is invalid !`,
                showConfirmButton: false,
                timer: 1500,

            });
            return;
        }


        submitHandler(values);
    };

    return {
        values,
        onChange,
        onSubmit,
    }
}