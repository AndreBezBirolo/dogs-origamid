import React from "react";

const types = {
    email: {
        regex: '^[\\w-\\.]+@([\\w-]+\\.)+[\\w-]{2,4}$',
        message: 'Insert a valid e-mail'
    }
}
export const UseForm = (type) => {

    const [value, setValue] = React.useState('');
    const [error, setError] = React.useState('');

    function validate(value) {
        if (type === false) return true;
        if (value.length === 0) {
            setError(`Insert a value`);
            return false;
        } else if (types[type] && !types[type].regex.test(value)) {
            setError(types[type].message);
            return false
        } else {
            setError(null);
            return true;
        }
    }

    function onChange({target}) {
        if (error) validate(target.value)
        setValue(target.value)
    }

    return {
        value,
        setValue,
        onChange,
        error,
        validate: () => validate(value),
        onBlur: () => validate(value)
    }
}

export default UseForm