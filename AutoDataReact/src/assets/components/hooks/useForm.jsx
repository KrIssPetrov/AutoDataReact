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


  if((values.email || values.password ) == '')
    {

        Swal.fire({
            position: "top-end",
            icon: "error",
            title: `Попълнете всички полета !`,
            showConfirmButton: false,
            timer: 1500,
          
          });

  } 

        submitHandler(values);
    };

    return {
        values,
        onChange,
        onSubmit,
    }
}