import { useState } from 'react';

const useForm = (initialValues, validate) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  };

  const validateForm = () => {
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setValues(initialValues);
      return true;
    }
    return false;
  };

  return {
    values,
    errors,
    handleChange,
    validateForm,
  };
};

export default useForm;