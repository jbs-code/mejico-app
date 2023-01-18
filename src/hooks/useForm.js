import { useState } from 'react'

function useForm(initialState = {}) {
  const [values, setValues] = useState(initialState);

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        });
    }

    return [values, handleInputChange]
}

export default useForm